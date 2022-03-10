const express = require ('express');

const app = express();
const port = 5000;

app.get ('/', function(request, response) {
    response.send('halo')
});

app.listen(port, function() {
    console.log(`server starting on port:${port} `)
})