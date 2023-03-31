

const { readFileSync, writeFileSync}=require('fs')
console.log("start")
const first=readFileSync('./content/first.txt','utf-8')
const second=readFileSync('./content/second.txt','utf-8')
// console.log(first,second)

writeFileSync('./content/result-sync.txt','hello guys this is text file'+first+ " " +second,{flag:'a'})


console.log("first is done")
console.log("second is done")