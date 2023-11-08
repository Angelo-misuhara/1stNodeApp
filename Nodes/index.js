const http = require('http')

const server = http.createServer((req, res) => {
 
 res.writeHead(200, { 'content-type': 'text/plain' })
 res.end('I LOVE COED')
})

const PORT = process.env.PORT || 3000;
server.listen(PORT,()=>console.log('running/live at port 300'))