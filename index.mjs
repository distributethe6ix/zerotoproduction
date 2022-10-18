import express from 'express';
import {Firestore} from '@google-cloud/firestore';


const app = express()
const port = 3000

// Create a new client
const firestore = new Firestore();

app.get('/', async (req, res) => {
  // Obtain a document reference.
  const collection = await firestore.collection('karaoke-me-dev')
  const docRefs = await collection.listDocuments()
  let songs = "";
  const docs = await Promise.all(docRefs.map(d => d.get()))
  docs.forEach(doc => {
    songs += `
    <li>
      <img src="${doc.get('img-url')}" />
      <p>${doc.get('title')}</p>
    </li>
    `
    console.log(doc.get('title'))
  })
  console.log(songs)

  res.set('Content-Type', 'text/html')
  res.send(`
  <html>
    <head></head>
    <body>
      <h1>Super Awesome Karaoke Playlist</h1>
      <div>
        <ul>
          ${songs}
        </ul>
      </div>
    </body>
  </html>
  `)

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
