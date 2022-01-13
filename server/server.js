const express = require("express");
const sequelize = require("./sequelize");

//HOW TO START
//npm install
//npm run server

// Import created models

const User = require("./models/user");
const Project = require("./models/project");
const File = require("./models/file");
const Grade = require("./models/grade");
const UserProject = require("./models/userProject");
// Define entities relationship

Project.hasMany(File, { foreignKey: "idProject", sourceKey: "id" });
File.belongsTo(Project, { foreignKey: "idProject", targetKey: "id" });

Project.hasMany(Grade, { foreignKey: "idProject", sourceKey: "id" });
Grade.belongsTo(Project, { foreignKey: "idProject", targetKey: "id" });

Project.belongsToMany(User, { through: { model: UserProject, unique: false } });
User.belongsToMany(Project, { through: { model: UserProject, unique: false } });

const app = express();

const port = 8080;

// Express middleware
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

const cors = require("cors");
app.use(cors());

app.use("/api", require("./routes/users"));
app.use("/api", require("./routes/professors"));
app.use("/api", require("./routes/projects"));
app.use("/api", require("./routes/otherprojects"));
app.use("/api", require("./routes/auth"));
app.use("/api", require("./routes/selectedProject"));
app.use("/api", require("./routes/addFile"));
app.use("/api", require("./routes/getFiles"));
app.use("/api", require("./routes/deleteFile"));

app.listen(port, async () => {
  console.log("Server started on http://localhost:8080");
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully");
  } catch (err) {
    console.error("Unable to connect to the database:", error);
  }
});
