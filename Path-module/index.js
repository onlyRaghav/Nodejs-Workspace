const path=require('path');
console.log(path.sep);// return / bcoz os is linux

console.log(path.delimiter); //return : as os is linux

console.log(path.basename("https://github.com/onlyRaghav/Nodejs-Workspace.git")); // return Nodejs-Workspace.git as it returns last portion of the given path

console.log(path.basename("https://github.com/onlyRaghav/Nodejs-Workspace.git",'.git')); // return Nodejs-Workspace bcoz we provide an ext parameter(i.e. git in this expression) 

console.log(path.dirname("https://github.com/onlyRaghav/Nodejs-Workspace.git")); //returns https://github.com/onlyRaghav bcoz it is the directory name where Nodejs-Workspace is stored

console.log(path.extname("Nodejs-workspace.git")); //returns .git bcoz it is the ext of the given file

const pathToFile=path.format({
    dir:"https://github.com/onlyRaghav",
    base:"Nodejs-Workspace.git"
})
console.log(pathToFile); // returns the path string by providing the path object containing dir and base attr (https://github.com/onlyRaghav/Nodejs-Workspace.git)

console.log(path.isAbsolute("https://github.com/onlyRaghav/Nodejs-Workspace.git")); // returns true if the given path is an absolute path (here false)

const pathObj=path.parse("https://github.com/onlyRaghav/Nodejs-Workspace.git")
console.log(pathObj); // returns a path obj which contains the root,dir,base,ext,name of the given path

let pathToDir = path.normalize('//node.js/module/js//dist');
console.log(pathToDir); //return a normalize path string deals with '//','.','..'

let relativePath = path.relative('/home/user/config/', '/home/user/js/');
console.log(relativePath); // accepts two arguments and returns the relative path between them(here ../js)
