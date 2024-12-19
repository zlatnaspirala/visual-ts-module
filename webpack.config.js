
const CopyWebpackPlugin = require('copy-webpack-plugin')

let webPackModule = {
  mode: "development",
  watch: true,
  stats: false,
  // entry: [ "./src/generators/generators.ts"],
  // entry: [ "./src/sprite-animation/sprite-animation.ts"],
  entry: "./src/from-zero/index.ts",
  // entry: "./src/add-element/add-element.ts"],
  output: {
    filename: 'visualts.engine.js',
    path: __dirname + "/build",
  },
  // devtool: "none",
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".json"]
  },

  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader", options: { allowTsInNodeModules: true } },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name(resourcePath, resourceQuery) {
            // `resourcePath` - `/absolute/path/to/file.js`
            // `resourceQuery` - `?foo=bar`
            // if (process.env.NODE_ENV === 'development') {
              return './imgs/' + '[name].[ext]';
            // }
            // return '[contenthash].[ext]';
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(ico)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: '/styles'
          }
        }
      },
       {
         test: /\.(mp4|ogg)$/,
         // include: __dirname + "/src/examples/platformer-single-player/audios",
         loader: 'file-loader',
         options: {
           name: '[name].[ext]',
           outputPath: "/audios"
         }
       },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },

  plugins: [
    new CopyWebpackPlugin({
      patterns: [
      { from: './template.html', to: 'index.html'},
      { from: './style/styles.css', to: 'style/styles.css'},
      { from: './style/broadcaster2.css', to: 'styles/broadcaster2.css' },
      { from: './externals/hack-timer.js', to: 'externals/hack-timer.js'},
      { from: './externals/drag.ts', to: 'externals/drag.ts' },
      { from: './externals/hack-timer-worker.js', to: 'externals/hack-timer-worker.js' },
      { from: './externals/cacheInit.ts', to: 'externals/cacheInit.ts' },
      { from: './externals/worker.js', to: 'worker.js' },
      { from: './externals/offline.html', to: 'offline.html' },
      { from: './externals/adapter.js', to: 'externals/adapter.js' },
      { from: "./src/ui/player-board.html", to: "templates/player-board.html"},
      { from: "./src/ui/select-player.html", to: "templates/select-player.html"},
      { from: "./src/ui/player-board.html", to: "templates/single-player-board.html"},
      { from: "./src/ui/message-box.html", to: "templates/message-box.html"},
      { from: 'src/html-components/register.html', to: 'templates/register.html' },
      { from: 'src/html-components/login.html', to: 'templates/login.html' },
      { from: 'src/html-components/user-profile.html', to: 'templates/user-profile.html' },
      { from: './src/html-components/store.html', to: 'templates/store.html' },
      { from: './src/html-components/games-list.html', to: 'templates/games-list.html' },
      { from: './src/html-components/broadcaster2.html', to: 'templates/broadcaster2.html' },
      // { from: './externals/facebook/fb.js', to: 'externals/fb.js' },
      // { from: './src/manifest.web', to: 'manifest.web' },
    ]})
  ]
};

module.exports = webPackModule;