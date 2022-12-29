//input-path(Directory)
const process = require('process');
const fs=require('fs')
const path=require('path');
const { checkFileCategory, CategrizeFile } = require('./ImportantFunctions');


const inputPath=process.argv[2];
const fileList=fs.readdirSync(inputPath)

fileList.forEach((filename)=>{
  const fileWithDir=path.join(inputPath,filename)
  const isFile=fs.lstatSync(fileWithDir).isFile();

  if(isFile){
    const fileCategory= checkFileCategory(fileWithDir)
    CategrizeFile(fileWithDir,inputPath,fileCategory)
  }
})


