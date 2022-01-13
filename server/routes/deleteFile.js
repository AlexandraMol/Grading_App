const File=require("../models/file");
const Project=require("../models/project");
const User=require("../models/user");

const getFileRouter=require("express").Router();

getFileRouter
    .route("/:idStudent/myprojects/:idProject/files/:idFile")
    .get(async (req, res) =>{
        try{
            const user = await User.findByPk(req.params.idStudent);
            if(user){
                const project=await Project.findByPk(req.params.idProject);
                console.log(project)
                if(project){
                    
                    const file=await File.findAll({
                        where:{
                            idProject:project.id,
                            id:req.params.idFile
                        }
                    })

                
                
                    return res.status(200).json(file);
                }         
            }
            else{
                res.status(405).send({ message: err.message });

            }


        }
        catch(err){
            return res.status(500).json(err);
        }
    })
    .delete(async (req, res) => {
        try{
            const user = await User.findByPk(req.params.idStudent);
            if(user){
                const project=await Project.findByPk(req.params.idProject);
                console.log(project)
                if(project){
                    
                    const file=await File.destroy({
                        where:{
                            idProject:project.id,
                            id:req.params.idFile
                        }
                    })

                
                
                    return res.status(200).json({ error: `File with id ${req.params.idFile} has been deleted` });
                }         
            }
            else{
                res.status(404).send({ message: err.message });

            }

            
        }
        catch(err){
            res.status(404).send({ message: err.message });

        }
    })
    .put(async(req, res)=>{
        try{
            const user = await User.findByPk(req.params.idStudent);
            if(user){
                const project=await Project.findByPk(req.params.idProject);
                console.log(project)
                if(project){
                    
                    const file=await File.findAll({
                        where:{
                            idProject:project.id,
                            id:req.params.idFile
                        }
                    })

                    const updatedFile=await File.update({
                        fileName:req.body.fileName,
                        file:req.body.file
                    },{
                        where: {
                            id:req.params.idFile
                        }
                    })

                
                    return res.status(200).json({error:`The file with id ${req.params.idFile} has been updated`});
                }         
            }
            else{
                res.status(405).send({ message: err.message });

            }

        }
        catch(err){
            res.status(405).send({ message: err.message });
        }
    })

    module.exports=getFileRouter;