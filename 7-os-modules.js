// //os
const os = require('os')
const user = os.userInfo()
console.log(user)
console.log("The systenm uptime is:  "+os.uptime+"   seconds")

const currentos={
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    fremem:os.freemem()
}
console.log(currentos)