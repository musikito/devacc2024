require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');

// Create a connection to the database
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME, 
    port: process.env.DB_PORT,
  });

  // Connect to the database
  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:', err.stack);
      return;
    }
    console.log('Connected to the database.');
  });

  // Middleware to parse request
  app.use(bodyParser.urlencoded({ extended: true }));
  // Serve static files
  app.use(express.static(path.join(__dirname, 'public')));

// Display all employees
app.get('/', (req, res) => {
    connection.query('SELECT * FROM employees', (err, rows) => {
        if (err) throw err;
        res.render('index', { employees: rows });
    });
}); 
  


  // run the server
  app.listen(3000, () => {
    console.log(`Server is running`);
});