const { DataTypes } = require("sequelize/dist");
const sequelize = require("../sequelize");

const User = sequelize.define("User", {
  email: {
    type: DataTypes.STRING,
  },

  password: {
    type: DataTypes.STRING,
  },

  userType: {
    type: DataTypes.INTEGER,
  },
});

module.exports = User;
