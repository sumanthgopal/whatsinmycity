const express = require('express');
const path = require('path');

const root = './dist';
const app = express();

app.use(express.static(root));
console.log('server ${root}');
app.get('*', (req, res) => {
    res.sendFile("src/index.html", {"root": __dirname});
});

const port = process.env.PORT || '3000';
app.listen(port, () => console.log(`API running on localhost:${port}`));