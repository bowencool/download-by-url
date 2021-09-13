export function getBlobByUrl(url: string | URL, detectFileName = false) {
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
          console.log('contentDispostion', contentDispostion);
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
                url = `${location.protocol}${url}`;
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
                console.log('pathLastName', pathLastName, pathnameSegments);
                break;
              }
            }

            if (!filename) {
              // fallback
              filename = `${URLObject.host}`;
            }

            if (!filename.includes('.')) {
              // 尝试从 content-type 里拼接
              contentType = xhr.getResponseHeader('Content-Type');
              console.log('contentType', contentType);
              if (contentType && contentType.match(/\/(\w+)/)) {
                let ext = RegExp.$1;
                filename = `${filename}.${ext}`;
              }
            }
          }
          // console.log('filename', filename);
        }
        const blob = new Blob([xhr.response], {
          type: contentType || 'application/octet-stream',
        });
        resolve({ blob, filename });
      };
      xhr.onerror = reject;
      xhr.send();
    },
  );
}
export default async function saveFileByUrl(url: string, filename?: string) {
  const { blob, filename: blobName } = await getBlobByUrl(url, !filename);
  return saveBlob(blob, filename || blobName);
}
/**
 * @description 将文件保存到本地
 */
export async function saveBlob(blob: Blob, filename: string) {
  const a = document.createElement('a');
  const blobUrl = window.URL.createObjectURL(blob);
  a.href = blobUrl;
  if (filename) a.download = filename;
  document.body.appendChild(a);
  // console.log(a);
  a.click();
  a.remove();
  window.URL.revokeObjectURL(blobUrl);
}
