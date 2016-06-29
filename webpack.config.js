var config = {
   entry: __dirname+'/common-ui/app.jsx',
   output: {
      filename: __dirname+'/common-ui/bundle.js',
   },

   devServer: {
      inline: true,
      port: 8080
   },

   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: __dirname+'/node_modules',
            loader: 'babel',

            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}

module.exports = config;
