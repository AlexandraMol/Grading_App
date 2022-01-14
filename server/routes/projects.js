const User = require("../models/user");
const Project = require("../models/project");
const UserProject = require("../models/userProject");
const projectRouter = require("express").Router();

projectRouter
  .route("/:idStudent/myprojects")
  .get(async (req, res) => {
    try {
      const user = await User.findByPk(req.params.idStudent);
      if (user) {
        let userProjects = await UserProject.findAll({
          where: { UserId: user.id },
        });

        let projects = [];

        for (let i = 0; i < userProjects.length; i++) {
          const project = await Project.findByPk(userProjects[i].ProjectId);
          projects.push(project);
        }
        return res.status(200).json(projects);
      }
    } catch (err) {
      return res.status(500).json(err);
    }
  })
  .post(async (req, res) => {
    try {
      const newProject = await Project.findByPk(req.body.id);
      if (newProject) {
        const newUserProject = await UserProject.create({
          status: "test",
          createdAt: newProject.createdAt,
          updatedAt: newProject.updatedAt,
          ProjectId: newProject.id,
          UserId: req.params.idStudent,
        });
        return res.status(200).json(newUserProject);
      } else {
        const newCreatedProject = await Project.create(req.body);
        const newUserProject = await UserProject.create({
          status: "test",
          createdAt: newCreatedProject.createdAt,
          updatedAt: newCreatedProject.updatedAt,
          ProjectId: newCreatedProject.id,
          UserId: req.params.idStudent,
        });
        return res.status(200).json(newUserProject);
      }
    } catch (err) {
      return res.status(500).json(err);
    }
  });

module.exports = projectRouter;
