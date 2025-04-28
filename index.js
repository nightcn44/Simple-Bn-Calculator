const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { readdirSync } = require('fs');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

readdirSync('./routes').map((i) => {
  try {
    console.log(`Loading route: ${i}`);
    app.use('/api', require('./routes/' + i));
  } catch (err) {
    console.error(`Error loading route ${i}:`, err);
  }
});

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});