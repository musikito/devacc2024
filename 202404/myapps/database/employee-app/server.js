require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const session = require('express-session');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
// Create the session for the login
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true
}));

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

  // Middleware to check if user is authenticated
function isAuthenticated(req, res, next) {
  if (req.session.user) {
      next();
  } else {
      res.redirect('/login');
  }
}
 
  // Middleware to parse request
  app.use(bodyParser.urlencoded({ extended: true }));
  // Serve static files
  app.use(express.static(path.join(__dirname, 'public')));

  // Login page
app.get('/login', (req, res) => {
  res.render('login');
});
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  

  connection.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
      if (err) throw err;
      if (results.length > 0) {
        
          const user = results[0];
          // res.send(user);
          if (user.username === username)  {
            req.session.user = user;
            res.redirect('/');
          }
          // bcrypt.compare(password, user.password, (err, match) => {
          //     if (match) {
               
          //         req.session.user = user;
          //         res.redirect('/');
          //     } else {
          //         res.send('Incorrect username or password1 ' + err);
          //     }
          // });
      } else {
          res.send('Incorrect username or password');
      }
  });
});

// Logout
app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
      if (err) throw err;
      res.redirect('/login');
  });
});

// Display all employees
app.get('/', isAuthenticated, (req, res) => {
    connection.query('SELECT * FROM employees', (err, rows) => {
        if (err) throw err;
        res.render('index', { employees: rows });
    });
}); 

// Render the add employee form
app.get('/add-employee', isAuthenticated, (req, res) => {
  res.render('add-employee');
});

// Handle form submission to add a new employee
app.post('/add-employee', isAuthenticated, (req, res) => {
  const { firstname, lastname, phone, salary, department, hiredate } = req.body;
  const employee = { firstname, lastname, phone, salary, department, hiredate };
  connection.query('INSERT INTO employees SET ?', employee, (err, result) => {
      if (err) throw err;
      res.redirect('/');
  });
});

// Delete an employee
app.get('/delete/:id', isAuthenticated, (req, res) => {
  const { id } = req.params;
  connection.query('DELETE FROM employees WHERE id = ?', id, (err, result) => {
      if (err) throw err;
      res.redirect('/');
  });
});

// Render the edit employee form
app.get('/edit-employee/:id', isAuthenticated, (req, res) => {
  const { id } = req.params;
  connection.query('SELECT * FROM employees WHERE id = ?', [id], (err, results) => {
      if (err) throw err;
      if (results.length > 0) {
          res.render('edit-employee', { employee: results[0] });
      } else {
          res.redirect('/');
      }
  });
});

// Handle form submission to update an employee
app.post('/edit-employee/:id', isAuthenticated, (req, res) => {
  const { id } = req.params;
  const { firstname, lastname, phone, salary, department, hiredate, enddate } = req.body;
  const employee = { firstname, lastname, phone, salary, department, hiredate, enddate };
  connection.query('UPDATE employees SET ? WHERE id = ?', [employee, id], (err, result) => {
      if (err) throw err;
      res.redirect('/');
  });
});
  // run the server
  app.listen(3000, () => {
    console.log(`Server is running`);
});