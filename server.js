const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = 7000;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Bank Data',
  password: 'suyog123',
  port: 5432,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use cors middleware with specific configuration
app.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true, // Enable credentials in CORS
  }));
  

  app.post('/validateLogin', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const result = await pool.query('SELECT * FROM logininfo WHERE username = $1 AND password = $2', [username, password]);
  
      if (result.rows.length === 1) {
        res.status(200)
          .header('Access-Control-Allow-Origin', '*')
          .json({ success: true });
      } else {
        res.status(401).json({ success: false, message: 'Invalid username or password' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  });

  app.get('/getAllRecords', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM customerrecords');
      res.status(200).json(result.rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  });

  app.post('/updateDatabase', async (req, res) => {
    const values = req.body.values;
    console.log(values)
    try {
      // Assuming your SQL query follows the structure of your final array
      const result = await pool.query(
        'INSERT INTO customerrecords VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14 , $15 , $16)',
        values
      );
  
      res.status(200).json({ success: true, message: 'Database updated' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  });
  

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
