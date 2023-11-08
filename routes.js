const fs = require('fs');

const requestHandler = (req, res)=>{
    if (req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`
            <html>
            <head>
                <title>Node.js Server</title>
            </head>
            <body>
                <form action="/" method="POST">
                    <input type='text' name='inputText'>
                    <button type="submit">Send</button>
                </form>
            </body>
            </html>
        `);
        res.end();
    } else if (req.method === 'POST' && req.url === '/') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const message = body.split('=')[1];
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(`
                <html>
                <head>
                    <title>Node.js Server</title>
                </head>
                <body>
                    <h2>${decodeURIComponent(message)}</h2>
                    <form action="/" method="POST">
                        <input type='text' name='inputText'>
                        <button type="submit">Send</button>
                    </form>
                </body>
                </html>
            `);
            res.end();
        });
    }
}

exports= requestHandler;
