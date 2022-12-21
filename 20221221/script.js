// Naudodami NodeJS parodykite procesoriaus pavadinimą ir jame esančių branduolių skaičių
const os = require('os');
const systemCpuCores = os.cpus();
const cpuName = os.cpus()[0].model;
const numOfCpus = os.cpus().length
console.log(`${cpuName} Branduoliu: ${numOfCpus}`);


