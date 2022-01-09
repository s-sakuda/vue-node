const express = require('express')
const serveStatic = require('serve-static')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000

if (process.env.NODE_ENV !== 'production') {
	app.use(cors())
}

app.use(serveStatic(__dirname + '/dist'))

app.get('/api/hello', (req, res) => {
	res.send('hello i am express')
})

app.listen(port, () => console.log(`Example app listening on port ${port}`))
