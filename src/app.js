const express = require('express');
const cors = require('cors');
const sequelize = require('./config/sequelize');
const app = express();
const authRoutes = require('./routes/authRoutes');

require('dotenv').config();
app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);

// Routes placeholder
app.use('/api/compounds', require('./routes/compoundRoutes'));

// Connect DB and start server
const PORT = process.env.PORT || 5000;
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch((err) => {
  console.error('DB connection failed:', err);
});
