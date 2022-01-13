const { DataTypes } = require("sequelize/dist");
const sequelize = require("../sequelize");

const Project = sequelize.define("Project", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  teamName: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  videoLink: {
    type: DataTypes.STRING,
  },
});

module.exports = Project;
