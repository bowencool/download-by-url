# @bowencool/download-by-url

> 在浏览器中通过 url 下载文件。
> Download file by url in browser.
> [Live Demo](https://bowencool.github.io/download-by-url/)

## Why?

- 浏览器会尽可能直接预览（见 Demo），而不是保存到本地。
  The browser will preview it as directly as possible (see Demo), rather than saving it locally.
- 原生 a 标签**跨域**下载时不支持重命名。
  Native `a` tag do not support renaming when **crossing origin**.
- 点击的元素不是 a 标签。
  The click eventTarget is not an `a` tag.
- 下载逻辑并不是由用户点击事件触发的，需要在业务逻辑中处理。
  The download logic is not triggered by user click events and needs to be handled in the business logic.
- a 标签会闪烁一下
  There will be a flash when using an `a` tag.

## Usage

```sh
yarn add @bowencool/download-by-url
```

```ts
import saveFileByUrl from '@bowencool/download-by-url';

saveFileByUrl(
  'https://dummyimage.com/100x100/894FC4/FFF.png&text=hello',
  'hello.png',
);
```

## Api

```ts
/**
 * @description Create an a element and click it.
 */
export declare function downloadByUrlLegacy(url: string, filename?: string): void;
/**
 * @description Download blob by javascript.
 */
export declare function getBlobByUrl(url: string | URL, detectFileName?: boolean): Promise<{
    blob: Blob;
    filename: string;
}>;
/**
 * @description Save blob to local.
 */
export declare function saveBlob(blob: Blob, filename: string): void;
/**
 * @description Download blob(file) by url, and save it.
 */
export default function downloadByUrl(url: string | URL, filename?: string): Promise<void>;
```
