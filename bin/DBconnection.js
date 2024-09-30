require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Database successfully connected");
  })
  .catch((error) => {
    console.log("Failed to connect", error);
  });
module.exports = sequelize;
