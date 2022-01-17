const { DataTypes } = require("sequelize/dist");
const sequelize = require("../sequelize");

const Grade = sequelize.define("Grade", {
  idProject: {
    type: DataTypes.INTEGER,
  },

  grade: {
    type: DataTypes.FLOAT,
  },

  idUser: {
    type: DataTypes.INTEGER,
  },
});

module.exports = Grade;
