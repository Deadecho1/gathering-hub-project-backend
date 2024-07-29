const express = require("express");
const dotenv = require('dotenv');
const { dbSync } = require('./config/database');
const userRoutes = require('./routes/user.route');
const hubRoutes = require('./routes/hub.route');
const coordinateRoutes = require('./routes/coordinate.route');
const stationRoutes = require('./routes/station.route');
const badgeRoutes = require('./routes/badge.route');
const authRoutes = require('./routes/auth.route');
const chatsRoutes = require('./routes/chat.route');
const bodyParser = require("body-parser");
const cors = require('cors');
dotenv.config();

const app = express();
app.use(cors());
const port = 3000;
app.use(bodyParser.json());
app.use('/api/users', userRoutes);
app.use('/api/hubs', hubRoutes);
app.use('/api/coordinates', coordinateRoutes);
app.use('/api/stations', stationRoutes);
app.use('/api/badges', badgeRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/chats', chatsRoutes);

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