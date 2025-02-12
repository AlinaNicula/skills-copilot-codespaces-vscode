//Create web server
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/comments', (req, res) => {
    fs.readFile('./comments.json', 'utf8', (err, data) => {
        res.json(JSON.parse(data));
    });
});

app.post('/comments', (req, res) => {
    fs.readFile('./comments.json', 'utf8', (err, data) => {
        const comments = JSON.parse(data);
        comments.push(req.body);
        fs.writeFile('./comments.json', JSON.stringify(comments, null, 4), (err) => {
            res.json(req.body);
        });
    });
});

// app.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000');
// });