export function getBlobByUrl(url: string, detectFileName = false) {
  return new Promise(
    (resolve: (blob: { blob: Blob; filename: string }) => void, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open('GET', url, true);

      xhr.responseType = 'blob';

      xhr.onload = () => {
        const blob = new Blob([xhr.response], {
          type: 'application/octet-stream',
        });
        let filename: string = '';
        if (detectFileName) {
          const contentDispostion = xhr.getResponseHeader(
            'content-disposition',
          );
          console.log(contentDispostion);
          if (
            contentDispostion &&
            contentDispostion.match(/filename\*?=(utf-8'')?("?)([^"]*)\2$/)
          ) {
            filename = decodeURIComponent(RegExp.$3);
          } else {
            const contentType = xhr.getResponseHeader('Content-Type');
            if (contentType && contentType.match(/\/(\w+)/)) {
              let ext = RegExp.$1;
              const URLObject = new URL(url);
              const pathnameSegments = URLObject.pathname.split('/');
              for (let i = pathnameSegments.length - 1; i >= 0; i--) {
                const pathLastName = pathnameSegments[i];
                if (pathLastName && typeof pathLastName === 'string') {
                  filename = pathLastName;
                  console.log(URLObject, pathnameSegments, pathLastName);
                  break;
                }
              }
              if (!filename) {
                filename = `${URLObject.host}.${ext}`;
              } else if (!filename.endsWith(`.${ext}`)) {
                filename += `.${ext}`;
              }
              console.log(contentType);
            }
          }
          console.log(filename);
        }
        resolve({ blob, filename });
      };
      xhr.onerror = reject;
      xhr.send();
    },
  );
}
export default async function downloadByUrl(url: string, filename?: string) {
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
