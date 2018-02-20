// This library allows us to combine paths easily

// modules are to node as libraries are to javascript
// require('module) includes the module for use.
const path = require('path');


// the module object has a property called exports.  Exports
// defines what the module makes available for other modules to use.

// In other words: values, functions or objects can  be attached to modules.exports as properties
// and these properties can be imported into other modules.  
module.exports = {
   devServer: { contentBase: './src', publicPath: '/output' },
   entry: path.resolve(__dirname, 'src', 'index.jsx'),
   output: {
      path: path.resolve(__dirname, 'output'),
      filename: 'bundle.js'
   },
   resolve: {
      extensions: ['.js', '.jsx']
   },resolve: {
      extensions: ['.js', '.jsx']
   },
   module: {
      rules: [
         {
             test: /\.jsx/,
             use: {
                loader: 'babel-loader',
                options: { presets: ['react', 'es2015'] }
             }
         },
         {
            test: /\.scss/,
            use: ['style-loader', 'css-loader', 'sass-loader']
         }
      ]
   }
};