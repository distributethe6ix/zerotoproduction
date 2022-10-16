import express from 'express';
import { DynamoDBClient, BatchGetItemCommand } from "@aws-sdk/client-dynamodb";

const app = express()
const port = 3000

const client = new DynamoDBClient({ region: "eu-central-1" });
app.get('/', async (req, res) => {
  const input = { requestItems: []}
  const command = new BatchGetItemCommand(input);
  const response = await client.send(command);
  console.log(response)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
