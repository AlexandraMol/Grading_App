const User = require("../models/user");
const Project = require("../models/project");
const UserProject = require("../models/userProject");
const File = require("../models/file");
const Grade = require("../models/grade");
const otherProjectRouter = require("express").Router();
const { Op } = require("sequelize");

otherProjectRouter.route("/:idStudent/otherprojects").get(async (req, res) => {
  try {
    const userProject = await UserProject.findAll({
      where: {
        UserId: req.params.idStudent,
      },
    });
    listOtherProjectId = [];
    for (let i = 0; i < userProject.length; i++) {
      listOtherProjectId.push(userProject[i].ProjectId);
    }

    const otherProject = await Project.findAll({
      where: {
        id: {
          [Op.notIn]: listOtherProjectId,
        },
      },
    });
    res.send(otherProject);
  } catch (err) {
    res.status(404).send({ message: err.message });
  }
});

otherProjectRouter
  .route("/:idStudent/otherprojects/:idProject")
  .get(async (req, res) => {
    try {
      const userProject = await UserProject.findAll({
        where: {
          UserId: req.params.idStudent,
        },
      });
      listOtherProjectId = [];
      for (let i = 0; i < userProject.length; i++) {
        listOtherProjectId.push(userProject[i].ProjectId);
      }

      const otherProjectSelected = await Project.findAll({
        where: {
          id: {
            [Op.notIn]: listOtherProjectId,
            [Op.is]: req.params.idProject,
          },
        },
      });
      res.send(otherProjectSelected);
    } catch (err) {
      res.send({ message: err.message });
    }
  });

otherProjectRouter
  .route("/:idStudent/otherprojects/:idProject/files")
  .get(async (req, res) => {
    try {
      const userProject = await UserProject.findAll({
        where: {
          UserId: req.params.idStudent,
        },
      });
      listOtherProjectId = [];
      for (let i = 0; i < userProject.length; i++) {
        listOtherProjectId.push(userProject[i].ProjectId);
      }

      const files = await File.findAll({
        where: {
          idProject: {
            [Op.notIn]: listOtherProjectId,
            [Op.is]: req.params.idProject,
          },
        },
      });

      res.send(files);
    } catch (err) {
      res.send({ message: err.message });
    }
  });

otherProjectRouter
  .route("/:idStudent/otherprojects/:idProject/files/:idFile")
  .get(async (req, res) => {
    try {
      const userProject = await UserProject.findAll({
        where: {
          UserId: req.params.idStudent,
        },
      });
      listOtherProjectId = [];
      for (let i = 0; i < userProject.length; i++) {
        listOtherProjectId.push(userProject[i].ProjectId);
      }

      const files = await File.findAll({
        where: {
          id: req.params.idFile,
          idProject: {
            [Op.notIn]: listOtherProjectId,
            [Op.is]: req.params.idProject,
          },
        },
      });

      res.send(files);
    } catch (err) {
      res.send({ message: err.message });
    }
  });

otherProjectRouter
  .route("/:idStudent/otherprojects/:idProject/grade")
  .get(async (req, res) => {
    try {
      const userProject = await UserProject.findAll({
        where: {
          UserId: req.params.idStudent,
        },
      });
      listOtherProjectId = [];
      for (let i = 0; i < userProject.length; i++) {
        listOtherProjectId.push(userProject[i].ProjectId);
      }

      const projectGrade = await Grade.findAll({
        where: {
          idProject: {
            [Op.notIn]: listOtherProjectId,
            [Op.is]: req.params.idProject,
          },
        },
      });

      res.send(projectGrade);
    } catch (err) {
      res.send({ message: err.message });
    }
  })
  .post(async (req, res) => {
    try {
      const project = await Project.findByPk(req.params.idProject);

      if (project) {
        const projectGrade = await Grade.create(req.body);
        return res.status(200).json(projectGrade);
      } else {
        return res.status(404).json({ message: "project not found" });
      }
    } catch (err) {
      return res.status(500).json(err);
    }
  })
  .put(async (req, res) => {
    const userProject = await UserProject.findAll({
      where: {
        UserId: req.params.idStudent,
      },
    });
    listOtherProjectId = [];
    for (let i = 0; i < userProject.length; i++) {
      listOtherProjectId.push(userProject[i].ProjectId);
    }

    const projectGrade = await Grade.findAll({
      where: {
        idProject: {
          [Op.notIn]: listOtherProjectId,
          [Op.is]: req.params.idProject,
        },
      },
    });

    if (projectGrade) {
      const updatedprojectGrade = await Grade.update(
        {
          grade: req.body.grade,
        },
        {
          where: {
            idProject: {
              [Op.notIn]: listOtherProjectId,
              [Op.is]: req.params.idProject,
            },
          },
        }
      );
      return res.status(200).json(updatedprojectGrade);
    }
  });

module.exports = otherProjectRouter;
