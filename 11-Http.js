

const http = require('http')
const server= http.createServer((req,res)=>{
    if (req.url==='/'){
        res.end('wellcome to our home page')
    }
    if (req.url==='/about'){
        res.end("wellcome to our about page")
    }
    res.end(
    '<h2> Oops! </h2>'
    // '<p> we can,t find the page you want </p>',
    // '<a href='/'> back to home </a>'
    )
})
 server.listen(5000)