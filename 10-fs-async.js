
 //fs
 console.log("start")

const { readFile, writeFile}=require('fs')
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return;
    }
    const first=result
    readFile('./content/second.txt','utf-8',
    (err,result)=>{
        if(err){
            console.log(err)
            return;
        }
        const second=result
        writeFile('./content/result-async.txt','here is the result  '+ second + " "+ first,{flag:'a'},
        (err,result)=>{
            if(err){
                console.log(err)
                return 
            }
            console.log("first task done")
        }
        )
    })
})
console.log("second is done")