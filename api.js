const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const square = require('./str_squ')
const PORT = process.env.PORT || 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/square', (req, res) => {
    const sq = square.string_square(req.query.string);
    const sq2 = square.string_square(req.query.string2);
    res.json({result1: sq,result2: sq2})
})

app.listen(PORT, () => console.log('Example app listening on port'+
PORT))
