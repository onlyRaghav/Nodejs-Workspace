const os=require('os');

console.log(os.EOL);

//Getting the current operating system info
const current_sys={
    name:os.type(),
    architecture:os.arch(),
    platform:os.platform(),
    release:os.release(),
    version:os.version(),
}

console.log(current_sys);

//To get the uptime of the system in secs
console.log(`The server has been up for ${os.uptime()/60} mins`); 

//To get the info abt the current user
console.log(os.userInfo());

//To get the total memory in bytes of the system
console.log("Total mem: ",os.totalmem());

//To get the cpu info of the system
const cpuInfo=os.cpus()[0];
console.log(cpuInfo);

//To get the network interface info of the system
console.log(os.networkInterfaces());
