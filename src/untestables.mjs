import { sum } from "./example.mjs";
import fs from "fs";

var globalVariable;

export class Untestables {
  constructor() {
    globalVariable = 0;
  }

  getGlobalVariable() {
    return globalVariable;
  }

  addToGlobal() {
    globalVariable = sum(globalVariable, 1);
  }

  createTextFile(fileName, content) {
    fs.appendFile(fileName, content, function (err) {
      if (err) throw err;
      console.log("Saved!");
    });
  }

  createJsonFile(fileName, content) {
    const data = JSON.stringify(content);
    fs.writeFileSync(fileName, data);
  }

  readJsonFile(fileName) {
    const rawdata = fs.readFileSync(fileName);
    const json = JSON.parse(rawdata);
    return json;
  }

  readFileContent(fileName) {
    fs.readFile(fileName, 'utf8', (err, data)=>{
      if(err){
          console.log(err)
          throw err
      }else{
          return data;
      }
    })
  };

  deleteFile(fileName) {
    fs.unlink(fileName, function (err) {
      if (err) throw err;
      console.log("File deleted!");
    });
  }
}
