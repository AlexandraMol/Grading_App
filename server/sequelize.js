const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./sqlite/gradingApp.db",
});

sequelize.sync({ force: false }).then(() => {
  console.log("All models were synchronized succesfully");
});

module.exports = sequelize;
