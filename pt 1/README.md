# webpack-demo
A webpack sandbox

1)  Use npm init inside the project directory.
2)  Use npm install webpack -D.  -D puts webpack in package.json as a development dependency.
3)  Use npm install lodash -S.  -S puts Lodash in package.json as a dependency.  

** Note:  Dependencies are needed for the project to run.  
** Note:  DevDependencies are needed during the development process, but are not needed to run the project.

4)  Use npm install del-cli -D.  del-cli allows you to delete directories across operating systems.
5)  Update package.json script section.  It should read . . .

"scripts": {
    "prebuild": "del-cli dist -f",
	"build": "webpack src/main.js dist/bundle.js",
    "execute": "node dist/bundle.js",
    "start": "npm run build -s && npm run execute -s"
  }

