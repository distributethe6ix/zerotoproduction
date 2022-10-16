import express from 'express';
import {Firestore} from '@google-cloud/firestore';


const app = express()
const port = 3000

// Create a new client
const firestore = new Firestore();

app.get('/', async (req, res) => {
  // Obtain a document reference.
  const collections = await firestore.listCollections()
  for (let collection of collections) {
    console.log(`Found collection with id: ${collection.id}`);
  }

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
