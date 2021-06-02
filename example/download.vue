<script>
import saveFileByUrl  from '../src';
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    href: String,
    download: String,
  },
  setup(props) {
    return {
      onDownload() {
        if (props.href) {
          saveFileByUrl(props.href, props.download);
        }
      },
    };
  },
});
</script>

<template>
  <a @click="onDownload"><slot></slot></a>
</template>
