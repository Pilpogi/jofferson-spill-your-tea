const express = require('express');
const mysql = require('mysql2');
const multer = require('multer');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'your_mysql_password',
  database: 'spill_your_tea'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database!');
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const filePath = file.mimetype.startsWith('image') ? './uploads/images/' : './uploads/videos/';
    cb(null, filePath);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });


app.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) return res.status(500).json({ error: 'Hashing failed' });
    const query = 'INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)';
    db.query(query, [username, email, hashedPassword], (err, result) => {
      if (err) return res.status(500).json({ error: 'Database error' });
      res.status(200).json({ message: 'User registered successfully' });
    });
  });
});


app.post('/post', (req, res) => {
  const { user_id, content } = req.body;
  const query = 'INSERT INTO posts (user_id, content) VALUES (?, ?)';
  db.query(query, [user_id, content], (err, result) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    res.status(200).json({ message: 'Post created successfully' });
  });
});


app.post('/upload', upload.single('media'), (req, res) => {
  const { post_id, media_type } = req.body;
  const filePath = req.file.path;
  
  const query = 'INSERT INTO media (post_id, media_type, file_path) VALUES (?, ?, ?)';
  db.query(query, [post_id, media_type, filePath], (err, result) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    res.status(200).json({ message: 'Media uploaded successfully', filePath });
  });
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

