const express = require('express');
const mysql = require('mysql2/promise');
const ejs = require('ejs');
const path = require('path');

const app = express();
const port = 3000;

// Database connection details (replace with your actual credentials)
const pool = mysql.createPool({
  host: 'localhost',
  user: 'yourusername',
  password: 'yourpassword',
  database: 'humanresources',
});

app.set('views', path.join(__dirname,'views')); // Set the views directory
app.set('view engine', 'ejs'); // Set EJS as the view engine

app.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM employees');
    res.render('index', { employees: rows }); // Pass data to the template
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching employee data');
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
