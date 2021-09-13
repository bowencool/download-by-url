# save-file-by-url

> 在浏览器中通过 url 下载文件。
> Download file by url in browser.
> [Live Demo](https://bowencool.github.io/download-by-url/)

## Why?

- 原生 a 标签*跨域*下载时不支持重命名。
  Native `a` tag do not support renaming when *crossing origin*.
- 点击的元素不是 a 标签。
  The click eventTarget is not an `a` tag.
- 下载逻辑并不是由用户点击事件触发的，需要在业务逻辑中处理。
  The download logic is not triggered by user click events and needs to be handled in the business logic.
- 浏览器迷惑行为之：直接预览了，而不是保存到本地。
  Browser confusion behavior: Open the preview directly instead of saving to local.

## Usage

```sh
yarn add save-file-by-url
```

```ts
import saveFileByUrl from 'save-file-by-url';

saveFileByUrl(
  'https://dummyimage.com/100x100/894FC4/FFF.png&text=hello',
  'hello.png',
);
```
