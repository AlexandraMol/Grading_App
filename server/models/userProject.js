const { DataTypes } = require("sequelize/dist");
const sequelize = require("../sequelize");

const UserProject = sequelize.define("UserProject", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  status: DataTypes.STRING,
});

module.exports = UserProject;
