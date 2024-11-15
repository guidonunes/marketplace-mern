const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { dbConnect } = require('./utils/db');

app.use(cors({
  origin: ['http://localhost:3000'],
  credentials: true
}));

app.use(bodyParser.json());
app.use(cookieParser());

// Add the correct path for the route
app.use('/api', require('./routes/authRoutes'));

app.get('/', (req, res) => res.send('Hello World!'));

const port = process.env.PORT;
dbConnect()
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
