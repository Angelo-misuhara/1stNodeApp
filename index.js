const https = require('node:https')

const server = https.createServer((req, res) => {
 
 res.writeHead(200, { 'content-type': 'text/plain' })
 res.end('TETE')
})

server.listen(300,()=>console.log('running/live at port 300'))