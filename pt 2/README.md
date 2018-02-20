# webpack-sandbox
A sandbox environment for learning webpack.

1)  yarn init --yes

**Note:  Yarn is a package manager which uses npm at the backend.  It can install packages in parallel, rather than sequentially as done by npm, so it is faster than npm.

2)  yarn add --dev webpack babel-core babel-loader babel-preset-react babel-preset-es2015 node-sass css-loader sass-loader style-loader

**Note:  yarn add --dev webpack <dependencies> adds the following dependencies for webpack

**Note:  Babel is a javascript transpiler which converts newer versions of ecmascript to ecmascript5.  

3)  yarn add react react-dom


src/
   /index.jsx
   /index.html
   /components
       /HelloWorld.jsx
   /styles
       /app.scss
       /components
           /hello-world.scss