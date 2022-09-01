const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html')
    res.send(`
    <html>
        <head></head>
        <body>
            <h1>Super Awesome Karaoke Playlist</h1>
            <div>
                <ul>
                    <li>Journey - Don't Stop Believin</li>
                    <li>Aerosmith - I Don't Wanna Miss A Thing</li>
                    <li>Leonard Cohen - Hallelujah</li>
                    <li>Tears for Fears - Everybody wants to rule the world</li>
                </ul>
            </div>
        </body>
    </html>
    `)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
