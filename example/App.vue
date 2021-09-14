<template>
  <fieldset>
    <legend>
      普通 a 标签下载：不支持跨域重命名；甚至直接打开预览而不是下载
    </legend>

    <a
      href="https://dummyimage.com/300x300/92cbff/fff"
      >图片</a
    >
    ｜
    <a href="//httpbin.org/get">JSON</a>
    ｜
    <a
      href="https://wdzg-file-pre-cdn.mockuai.com/picture/open_file202109091739144850000165.6版本).pdf"
      download="aa.pdf"
    >
      PDF
    </a>
    ｜
    <a
      href="https://wdzg-file-pre-cdn.mockuai.com/picture/open_file202109131633158710000670.xlsx"
      download="aa.xlsx"
    >
      表格
    </a>
  </fieldset>

  <fieldset>
    <legend>使用此方法下载</legend>
    <button @click="onDownloadHTML">HTML</button>
    ｜
    <Download
      href="https://dummyimage.com/300x300/92cbff/fff"
      >图片</Download
    >
    ｜
    <Download
      href="https://wdzg-file-pre-cdn.mockuai.com/picture/open_file202109091739144850000165.6版本).pdf"
      download="aa.pdf"
      >PDF</Download
    >
    ｜
    <Download href="//httpbin.org/get">JSON</Download>
    ｜
    <Download
      href="https://wdzg-file-pre-cdn.mockuai.com/picture/open_file202109131633158710000670.xlsx"
      download="aa.xlsx"
      >表格</Download
    >
    ｜
    <Download
      href="https://raw.githubusercontent.com/bowencool/download-by-url/main/example/App.vue"
      download="App.vue"
      >下载此代码</Download
    >
  </fieldset>

  <fieldset>
    <legend>随便下载什么</legend>
    <input type="text" v-model="url" placeholder="自定义URL" />
    <button @click="customDownload">下载</button>
  </fieldset>
</template>

<script lang="ts">
import saveFileByUrl from '../src';
import { defineComponent, ref } from 'vue';
import Download from './download.vue';

export default defineComponent({
  name: 'App',
  components: { Download },
  setup() {
    const url = ref('https://cdn.mockuai.com/tms/template.xlsx');
    return {
      url,
      onDownloadHTML() {
        saveFileByUrl(window.location.href);
      },
      customDownload() {
        saveFileByUrl(url.value);
      },
    };
  },
});
</script>
