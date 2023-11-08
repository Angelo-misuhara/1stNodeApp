const http = require('http')
const fs = require('fs');


const server = http.createServer((req, res) => {
 res.writeHead(200, { 'content-type': 'text/html' })
  res.writeHead(200, { 'Content-Type': 'image/jpeg' });
 fs.createReadStream('./indx.html').pipe(res)
})

const PORT = process.env.PORT || 3000;
server.listen(PORT,()=>console.log('running/live at port 300'))