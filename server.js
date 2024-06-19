const express = require('express');
const fs = require('fs');
const csv = require('csv-parser');
const app = express();
const PORT = 3000;

// Route to handle CSV data
app.get('/data', (req, res) => {
    const results = [];

    // Modify 'web_challenge.csv' to the path of your CSV file
    fs.createReadStream('src/web_challenge.csv')
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
            res.json(results);
        });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
