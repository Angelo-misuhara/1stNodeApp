const http = require('http')
const fs = require('fs');


const server = http.createServer((req, res) => {
 const html =fs.readFileSync('./indx.html','utf-8')
 res.writeHead(200, { 'content-type': 'text/plain' })
 res.end('html')
})

const PORT = process.env.PORT || 3000;
server.listen(PORT,()=>console.log('running/live at port 300'))