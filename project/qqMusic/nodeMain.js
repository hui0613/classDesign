var http = require('http')

http.createServer((req,res)=>{
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.setHeader("Access-Control-Allow-Methods", "*");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type,Access-Token");
    console.log("dmeo")
    res.end('demo')
}).listen(9813,function(){
    console.log("running")
})