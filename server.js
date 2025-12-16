const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Kết nối Database Cloud (Sử dụng MongoDB Atlas miễn phí)
mongoose.connect('mongodb+srv://user:pass@cluster.mongodb.net/test');

app.get('/', (req, res) => {
    res.send('Project 2: Node.js + MongoDB đang chạy!');
});

app.listen(3000);