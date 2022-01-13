const File=require("../models/file");
const Project=require("../models/project");
const User=require("../models/user");
const UserProject = require("../models/userProject");

const getFilesRouter=require("express").Router();

getFilesRouter
    .route("/:idStudent/myprojects/:idProject/files")
    .get(async(req,res) => {
        try{

             const user = await User.findByPk(req.params.idStudent);


            if(user){

                const projects=await UserProject.findAll({
                    where:{
                        UserId:req.params.idStudent,
                        ProjectId:req.params.idProject
                    }
                })
                if(projects){
                const project=await Project.findAll(
                    {where:{
                        id:req.params.idProject
                             }
                    }
                );
                console.log(project)
                

                
                if(project){

                    const files=await File.findAll({
                        where:{
                            idProject:req.params.idProject
                        }
                    })
                // res.send(project);
                    return res.status(200).json(files);
                }       
              }
            }
            else{
                res.status(405).send({ message: err.message });

            }

            console.log("aiiici")
            
         
        }
        catch(err){
            res.status(405).send({ message: err.message });
        }
    });

    module.exports=getFilesRouter;