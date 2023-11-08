const http = require('http')

const server = https.createServer((req, res) => {
 
 res.writeHead(200, { 'content-type': 'text/plain' })
 res.end('TETE')
})

const PORT = process.env.PORT || 300;
server.listen(PORT,()=>console.log('running/live at port 300'))