const express = require('express');
const mysql = require('mysql2/promise');
const ejs = require('ejs');
const validator = require('validator'); // Added for data validation
const path = require('path');

const app = express();
const port = 3000;

// Database connection details (replace with your actual credentials)
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Papiton#1',
  database: 'humanresources',
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Function to validate employee data
const validateEmployeeData = (data) => {
  const errors = [];
  if (!validator.trim(data.firstname)) {
    errors.push('First Name is required');
  }
  if (!validator.trim(data.lastname)) {
    errors.push('Last Name is required');
  }
  // Add validation checks for other fields (phone, salary, department)
  return errors;
};

// Get all employees
app.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM employees');
    res.render('index', { employees: rows });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching employee data');
  }
});

// Create new employee
app.post('/employees', async (req, res) => {
  const { firstname, lastname, phone, salary, department } = req.body;
  const errors = validateEmployeeData({ firstname, lastname });

  if (errors.length > 0) {
    return res.render('index', { employees: [], errors }); // Render with errors
  }

  try {
    const [result] = await pool.query('INSERT INTO employees (firstname, lastname, phone, salary, department) VALUES (?, ?, ?, ?, ?)', [firstname, lastname, phone, salary, department]);
    res.redirect('/'); // Redirect to employee list after successful creation
  } catch (error) {
    console.error(error);
    res.status(500).send('Error creating employee');
  }
});

// Get employee by ID (for editing)
app.get('/employees/:id/edit', async (req, res) => {
  const id = req.params.id;
  try {
    const [rows] = await pool.query('SELECT * FROM employees WHERE id = ?', [id]);
    if (rows.length === 0) {
      return res.status(404).send('Employee not found');
    }
    res.render('edit', { employee: rows[0] });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching employee data');
  }
});

// Update employee
app.put('/employees/:id', async (req, res) => {
  const id = req.params.id;
  const { firstname, lastname, phone, salary, department } = req.body;
  const errors = validateEmployeeData({ firstname, lastname });

  if (errors.length > 0) {
    return res.render('edit', { employee: { id }, errors }); // Render edit form with errors
  }

  try {
    await pool.query('UPDATE employees SET firstname = ?, lastname = ?, phone = ?, salary = ?, department = ? WHERE id = ?', [firstname, lastname, phone, salary, department, id]);
    res.redirect('/'); // Redirect to employee list after successful update
  } catch (error) {
    console.error(error);
    res.status(500).send('Error updating employee');
  }
});

// Delete employee
app.delete('/employees/:id', async (req, res) => {
    const id = req.params.id;
    try {
      await pool.query('DELETE FROM employees WHERE id = ?', [id]);
      res.redirect('/'); // Redirect to employee list after successful deletion
    } catch (error) {
      console.error(error);
      res.status(500).send('Error deleting employee');
    }
  });
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });  