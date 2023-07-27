const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const koalaRouter = require('./routes/koala.router')

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));

let koalas = [ {  name: 'abdulahi', age: 31, gender: 'male', readyForTransfer: 'yes',
notes: 'vacation'}];
// ROUTES
app.use('/koalas', koalaRouter)

app.get('/koalas', (req, res) => {
  res.send(koalas)
})

// Start listening for requests on a specific port
app.listen(PORT, () => {
  console.log('listening on port', PORT);
});
