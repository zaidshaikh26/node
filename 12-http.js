const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to our home');
    }
    if(req.url === '/about'){
        res.end('About');
    }
    res.end(`
        <h1>Ooops!</h1>
        <p>Nooooooooooooo</p>
        <a href="/" >back </a>
    `)
})

server.listen(5000)