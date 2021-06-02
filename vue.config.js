module.exports = {
  outputDir: 'docs',
  publicPath: './',
  // en
  pages: {
    index: {
      entry: 'example/index.ts',
      title: 'save-file-by-url'
    },
  },
  configureWebpack: {
    resolve: {
      extensions: ['.ts', '.vue'],
      alias: {
        '@': 'src',
        src: 'src',
      },
    },
  },
};
