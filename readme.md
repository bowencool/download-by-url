# save-file-by-url

> Download file by url in browser.
> 在浏览器中通过 url 下载文件。
> [Live Demo](https://bowencool.github.io/download-by-url/)

## Why?

- 原生 a 标签*跨域*下载时不支持重命名
- 点击的元素不是 a 标签
- 有时下载逻辑并不是由用户点击事件触发的，需要在业务逻辑中处理
- 浏览器迷惑行为之：当前页打开了 fileUrl，而不是保存到本地

## 使用

```sh
yarn add save-file-by-url
```

```ts
import downloadByUrl from 'save-file-by-url';

downloadByUrl(
  'https://dummyimage.com/100x100/894FC4/FFF.png&text=hello',
  'hello.png',
);
```
