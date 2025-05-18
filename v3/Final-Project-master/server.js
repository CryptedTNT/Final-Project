import express from 'express'

import cors from 'cors'
import db from './database.js'

const app = express();
app.use(express.json());
app.use(cors());



// Connect to DB
db.connect(err => {
    if (err) throw err;
    console.log('MySQL Connected!');
});

// POST: Save history
app.post('/api/history', (req, res) => {
    const { tweet, emotion } = req.body;
    const sql = 'INSERT INTO historyList (tweet, emotion) VALUES (?, ?)';
    db.query(sql, [tweet, emotion], (err, result) => {
        if (err) return res.status(500).send(err);
        res.json({ success: true, id: result.insertId });
    });
});

// GET: Retrieve all history
app.get('/api/history', (req, res) => {
    db.query('SELECT * FROM historyList ORDER BY id DESC', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

// Start server
app.listen(63342, () => console.log('Server running on http://localhost:63342'));
