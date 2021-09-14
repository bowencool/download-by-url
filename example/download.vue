<template>
  <component :is="tag" v-bind="$attrs" @click="onClick"><slot /></component>
</template>

<script>
  import { defineComponent } from 'vue';
  import downloadByUrl from '../src';

  export default defineComponent({
    name: 'Download',
    emits: {
      success: null,
      error: null,
    },
    props: {
      tag: {
        type: String,
        default: 'a',
      },
      url: {
        type: [String, URL],
      },
      href: {
        type: [String, URL],
      },
      src: {
        type: [String, URL],
      },
      filename: {
        type: String,
      },
      download: {
        type: String,
      },
    },
    methods: {
      onClick() {
        const url = this.href || this.src || this.url;
        if (url) {
          downloadByUrl(url, this.filename || this.download)
            .then(() => this.$emit('success'))
            .catch((...err) => this.$emit('error', ...err));
        } else {
          console.warn('no url provide');
        }
      },
    },
  });
</script>
