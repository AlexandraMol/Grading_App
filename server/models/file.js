const { DataTypes } = require("sequelize/dist");
const sequelize = require("../sequelize");

const File = sequelize.define("File", {
  fileName: {
    type: DataTypes.STRING,
  },

  file: {
    type: DataTypes.TEXT,
  },

  idProject: {
    type: DataTypes.INTEGER,
  },
});

module.exports = File;
