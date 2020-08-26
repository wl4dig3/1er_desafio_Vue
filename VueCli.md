npm install yarn -g

<!-- 1er paso  para instalar Vue por np, o yarn-->
`npm install -g @vue/cli `
# o
`yarn global add @vue/cli `

/////////

<!-- crear el proyecto  -->

` vue create nombre_proyecto `

///////
 <!-- Vue Cli setup  -->
 Seleccionar la primera opcion usando las flechas y dar 'enter':
 ` default (babel, eslint) `

 Nos pregunará cuál package manager desamos utilizar Yarn o NPM). Seleccionar una usando flechas del teclado y 'enter' 

 ////////////
 ***********///////////**********

 <!-- otra manera  .... -->
 npm install yarn -g
 yarn init

 <!-- Con esta instrucción, se nos preguntará varias cosas, como el nombre del proyecto, versión, tipo delicencia, repositorio, entre otras (podemos dejar por defecto cada nombre, y luego modificarlas), loimportante de este paso es que nos generará el archivo “package.json” -->

 {"name": "vuestart",
 "version": "1.0.0",
 "description":"",
 "main": "index.js",
 "scripts": {
     "test": "echo \"Error: no test specified\" && exit 1"}
     "author": "",
     "license": "ISC"}

     yarn add --dev vue vue-loader vue-template-compiler webpackwebpack-cli webpack-dev-server babel-loader @babel/core @babel/present-envcss-loader vue-style-loaderhtml-webpack-plugin

     <!-- Para  ejecutar nuestro proyecto, y  poder ver  nuestro trabajo, debemos modificar el  archivo‘package.json’, hacemos lo siguiente:1. Ubicamos en la sección de “scripts”, y la línea “tests”, la eliminamos.2. Reemplazamos esa línea con esta: -->

     "serve": "webpack-dev-server --mode development"

     <!-- 3. Una vez guardado el archivo ‘package.json’, ejecutamos en nuestra terminal -->

     yarn serve
