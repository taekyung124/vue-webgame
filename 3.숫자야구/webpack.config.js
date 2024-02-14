const { VueLoaderPlugin } = require('vue-loader');
const path = require('node:path');

module.exports = {
    mode: 'development',
    devtool: 'eval',
    resolve: {
      extensions: ['.js','.vue'],
    },
    entry : {
      app : path.join(__dirname, 'main.js'),
    },
    module : {
      rules: [{
          test: /\.vue$/,
          loader: 'vue-loader',
      }],
    },
    plugins : [
      new VueLoaderPlugin(),
    ],
    output : {
      filename : 'app.js',
      path: path.join(__dirname, 'dist'),
    },
};