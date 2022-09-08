import mime from 'mime-types';

/**
 * @description Create an a element and click it.
 */
function downloadByUrlLegacy(url: string, filename?: string) {
  const a = document.createElement('a');
  a.href = url;
  if (filename) a.download = filename;
  a.style.position = 'fixed';
  a.style.left = '-9999px';
  document.body.appendChild(a);
  a.click();
  a.remove();
}

/**
 * @description Download blob by javascript.
 */
function getBlobByUrl(url: string | URL, detectFileName = false) {
  return new Promise(
    (resolve: (blob: { blob: Blob; filename: string }) => void, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.responseType = 'blob';
      xhr.onload = () => {
        let filename: string = '';
        let contentType: string | null = null;
        if (detectFileName) {
          // 尝试从 headers 里取
          // let contentDispostion;
          // try {
          const contentDispostion = xhr.getResponseHeader(
            'content-disposition',
          );
          // } catch (error) {
          //   contentDispostion = null;
          // }
          // console.log('contentDispostion', contentDispostion);
          if (
            contentDispostion &&
            contentDispostion.match(/filename\*?=(utf-8'')?("?)([^"]*)\2$/)
          ) {
            filename = decodeURIComponent(RegExp.$3);
          } else {
            // 尝试从 pathname 里取
            let URLObject: URL | undefined;
            if (url instanceof URL) {
              URLObject = url;
            } else if (typeof url === 'string') {
              if (url.startsWith('//')) {
                url = `${window.location.protocol}${url}`;
              }
              URLObject = new URL(url);
            }
            if (!URLObject) {
              throw new Error('no url');
            }
            const pathnameSegments = URLObject.pathname.split('/');
            for (let i = pathnameSegments.length - 1; i >= 0; i--) {
              const pathLastName = pathnameSegments[i];
              if (pathLastName && typeof pathLastName === 'string') {
                filename = pathLastName;
                // console.log('pathLastName', pathLastName, pathnameSegments);
                break;
              }
            }
            if (!filename) {
              filename = `${URLObject.host}`;
            }

            contentType = xhr.getResponseHeader('Content-Type');
            if (contentType) {
              // 尝试从 content-type 里拼接
              const ext = mime.extension(contentType);
              // console.log('contentType', contentType, ext);
              if (!filename.endsWith(`.${ext}`)) {
                filename = `${filename}.${ext}`;
              }
            }
          }
          // console.log('filename', filename);
        }
        const blob = new Blob([xhr.response], {
          type: contentType || 'application/octet-stream',
        });
        resolve({ blob, filename: decodeURIComponent(filename) });
      };
      xhr.onerror = reject;
      xhr.send();
    },
  );
}

/**
 * @description Save blob to local.
 */
function saveBlob(blob: Blob, filename: string) {
  const blobUrl = window.URL.createObjectURL(blob);
  downloadByUrlLegacy(blobUrl, filename);
  window.URL.revokeObjectURL(blobUrl);
}

/**
 * @description Download blob(file) by url, and save it.
 */
async function downloadByUrl(url: string | URL, filename?: string) {
  // let urlString: string = url instanceof URL ? url.href : url;
  if (typeof url === 'string' && url.startsWith('blob:')) {
    return downloadByUrlLegacy(url);
  }
  const { blob, filename: blobName } = await getBlobByUrl(url, !filename);
  return saveBlob(blob, filename || blobName);
}
export { downloadByUrl, saveBlob, downloadByUrlLegacy, getBlobByUrl };
export default downloadByUrl;
