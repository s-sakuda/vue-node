const express = require('express')
const serveStatic = require('serve-static')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000

app.use(serveStatic(__dirname + '/dist'))
app.use(cors())

app.get('/api/hello', (req, res) => {
	res.send('hello i am express')
})

app.listen(port, () => console.log(`Example app listening on port ${port}`))
