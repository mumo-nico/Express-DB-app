const express = require('express');
const dotenv = require('dotenv');
const db = require('./config/db');
const router = require('./routes/studentRoute');

const app = express();
app.use(express.json())
const port = process.env.port || 3000;

dotenv.config();

app.post('/login', (req, res) => {
    res.json({
        success: true
    })
})

try {
    db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  app.use('/api', router);

  app.use('/api/students/:id', router);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})