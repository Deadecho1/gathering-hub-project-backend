const express = require("express");
const dotenv = require('dotenv');
const { dbSync } = require('./config/database');
const userRoutes = require('./routes/user.route');
const bodyParser = require("body-parser");
const cors = require('cors');
dotenv.config();

const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser.json());
app.use('/api/users', userRoutes);

const main = async () => {
  await dbSync();

  app.listen(port, async () => {
    try {
      console.log(`Server is running on port ${port}`);
    } catch (error) {
      console.error('Failed to initialize Sequelize:', error);
      process.exit(1);
    }
  });
};

main();