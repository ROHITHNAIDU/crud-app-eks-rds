//Database Connection
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'microcrud.ckqmwxexes0e.ap-south-1.rds.amazonaws.com',
  user: 'admin',
  password: 'mysql2023',
  database: 'crudapp',
});

connection.connect((error) => {
  if (error) {
    console.error('Error connecting to the database: ', error);
  } else {
    console.log('Connected to the database');
  }
});

module.exports = connection;
