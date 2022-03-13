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

  createJsonFile(fileName, content) {
    const data = JSON.stringify(content);
    fs.writeFileSync(fileName, data);
  }

  readJsonFile(fileName) {
    const rawdata = fs.readFileSync(fileName);
    const json = JSON.parse(rawdata);
    return json;
  }

  deleteFile(fileName) {
    fs.unlink(fileName, function (err) {
      if (err) throw err;
      console.log("File deleted!");
    });
  }

  giveTenRandomNumbersBetween0And100() {
    var numbers = []
    for (var i=0; i<10; i++) {
      const position = Math.floor(Math.random() * 100)+1;
      numbers.push(position);
    }
    return numbers;
  }

}
