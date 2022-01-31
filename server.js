const express = require('express')
const app = express()
const mail = require('./mail.js')
const port = process.env.PORT || 3000

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/public/" + "home.html");
})

app.get('/fundraisers', (req, res) => {
  res.sendFile(__dirname + "/public/" + "fundraisers.html")
})

app.post('/mail', (req, res) => {
  const { name, subj, email, message } = req.body;
  mail.sendMail(name, subj, email, message)
  res.json({message: 'Message received!'})
})

app.get('/resume', (req, res) => {
  res.sendFile(__dirname + "/public/resume/" + "LukeMutherResume.pdf");
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
