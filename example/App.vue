<template>
  <fieldset>
    <legend>示例</legend>
    <button @click="onDownloadHTML">下载 HTML</button>
    ｜
    <Download
      href="https://dummyimage.com/100x100/894FC4/FFF.png&text=hello"
      download="hello.png"
      >下载图片</Download
    >
    ｜
    <Download href="http://httpbin.org/get" download="json.json"
      >下载json</Download
    >
  </fieldset>

  <fieldset>
    <legend>随便下载什么</legend>
    <input type="text" v-model="url" placeholder="自定义URL" />
    <button @click="customDownload">下载</button>
  </fieldset>
</template>

<script lang="ts">
import downloadByUrl from '../src';
import { defineComponent, ref } from 'vue';
import Download from './download.vue';

export default defineComponent({
  name: 'App',
  components: { Download },
  setup() {
    const url = ref('');
    return {
      url,
      onDownloadHTML() {
        downloadByUrl(window.location.href);
      },
      customDownload() {
        downloadByUrl(url.value);
      },
    };
  },
});
</script>
