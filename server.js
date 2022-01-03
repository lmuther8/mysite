const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/public/" + "home.html");
})

app.post('/mail', (req, res) => {
  console.log('Data:', req.body);
  res.json({message: 'Message received!'})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
