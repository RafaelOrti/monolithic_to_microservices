const express = require('express');
const cors = require('cors');
const proxy = require('express-http-proxy');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/customer', proxy('http://127.0.0.1:8001'))
app.use('/shopping', proxy('http://127.0.0.1:8003'))
app.use('/', proxy('http://127.0.0.1:8002'))

app.listen(8000, () => {
    console.log('Gateway is listenning to port 8000')
})
