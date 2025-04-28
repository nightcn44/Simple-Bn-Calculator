const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { readdirSync } = require('fs');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// routes
readdirSync('./routes').map((i) => {
  try {
    console.log(`Loading route: ${i}`);
    app.use('/api', require('./routes/' + i));
  } catch (err) {
    console.error(`Error loading route ${i}:`, err);
  }
});

// server
app.listen(PORT, () => {
  console.log(`Calculator API running at http://localhost:${PORT}`);
});
