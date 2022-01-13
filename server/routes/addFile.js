const File=require("../models/file");
const Project = require("../models/project");

const fileRouter=require("express").Router();

fileRouter
    .route("/:idStudent/myprojects/:idProject/addFile")
    .post(async(req, res) => {
        try{
            const selectetProject= await Project.findByPk(req.params.idProject);
            if(selectetProject){
                const newFile=await File.create({
                    id:req.body.id,
                    fileName:req.body.fileName,
                    file:req.body.file,
                    idProject:selectetProject.id
                })
                return res.status(200).json(newFile);
            }
            
        }
        catch(err){
            return res.status(500).json(err);
        }
    })

    module.exports = fileRouter;

