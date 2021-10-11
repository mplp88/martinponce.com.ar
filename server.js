let express = require('express');

let port = 8080;

let app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`)
})