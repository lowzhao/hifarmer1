const express = require("express");
const app = express();
const path = require("path");



app.use(express.static(path.join(__dirname,'hifarmingfe')));
app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.listen(8080);