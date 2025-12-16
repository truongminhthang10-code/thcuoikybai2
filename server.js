const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Kết nối Database Cloud (Sử dụng MongoDB Atlas miễn phí)
mongoose.connect('mongodb+srv://truongminhthang10_db_user:Password123@cluster0.afyfp3v.mongodb.net/?appName=Cluster0');

app.get('/', (req, res) => {
    res.send('Project 2: Node.js + MongoDB đang chạy!');
});

app.listen(3000);