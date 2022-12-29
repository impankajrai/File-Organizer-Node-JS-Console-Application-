const filetype = require("./filetype")
const fs=require('fs')
const path=require('path')

//get file category
exports.checkFileCategory=(fileWithDir)=>{
const extention=path.extname(fileWithDir).split('.')[1]; //remove [Dot] from extension name
for(fileCategory in filetype){
  if(filetype[fileCategory].includes(extention)){
    return fileCategory
  }
}
  return "Other"
}

exports.CategrizeFile=(fileWithDirectory,inputPath,fileCategory)=>{
    const newPath=path.join(inputPath,"Categorize",fileCategory)
    const fileName=path.basename(fileWithDirectory)
    
    if (fs.existsSync(newPath)){
      if(!fs.existsSync(path.join(newPath,fileName))){
        fs.copyFile(fileWithDirectory,path.join(newPath,fileName),()=>{
          console.log("File Categorize successfully")
        })
      }else{
        console.log("File already categorized")
      }
    }else{
      //if folder is not created
      fs.mkdirSync(newPath,{ recursive: true }) 
      fs.copyFile(fileWithDirectory,path.join(newPath,fileName),(err)=>{
        console.log("File Categorize successfully")
        err&&console.log(err)
      })
    }
}