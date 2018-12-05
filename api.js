const express = require('express')
const string_square = require('./string_square.js')
const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/api/square', (req, res) => {
	var string=req.query.string;
	var square=string_square(string);

	res.setHeader('Content-Type', 'application/json');
    	res.send(JSON.stringify({ result: square}));
	
})
app.listen(PORT);
