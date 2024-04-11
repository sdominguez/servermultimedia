const express = require('express')
var cors = require('cors')

const app = express()
const port = 8084

app.use(express.static('public'));

app.use('/audio', cors(), express.static(__dirname+'/public/audio'));

app.get('*', (req, res)=>{
  res.sendFile(__dirname+'/public/404.html');
})


app.listen(port, ()=>{
  console.log(`app listening in http://localhost:${port}`)
})
