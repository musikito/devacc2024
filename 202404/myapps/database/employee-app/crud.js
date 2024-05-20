const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise'); // For MySQL
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'humanresources'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database');
});

// Display all employees
app.get('/', (req, res) => {
    connection.query('SELECT * FROM employees', (err, rows) => {
        if (err) throw err;
        res.render('index', { employees: rows });
    });
});

// Insert a new employee
app.post('/add', (req, res) => {
    const { firstname, lastname, phone, salary, department, hiredate } = req.body;
    const employee = { firstname, lastname, phone, salary, department, hiredate };
    connection.query('INSERT INTO employees SET ?', employee, (err, result) => {
        if (err) throw err;
        res.redirect('/');
    });
});

// Delete an employee
app.get('/delete/:id', (req, res) => {
    const { id } = req.params;
    connection.query('DELETE FROM employees WHERE id = ?', id, (err, result) => {
        if (err) throw err;
        res.redirect('/');
    });
});

// Update an employee
app.post('/update/:id', (req, res) => {
    const { id } = req.params;
    const { firstname, lastname, phone, salary, department, hiredate, enddate } = req.body;
    connection.query('UPDATE employees SET firstname = ?, lastname = ?, phone = ?, salary = ?, department = ?, hiredate = ?, enddate = ? WHERE id = ?', 
        [firstname, lastname, phone, salary, department, hiredate, enddate, id], 
        (err, result) => {
            if (err) throw err;
            res.redirect('/');
        }
    );
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
