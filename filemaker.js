// import { fstat } from "fs";

const fs = require('fs'); //노드js의 파일 시스템

// fs.readFile("champ.json", "utf8", (err, data)=>{
//     console.log(data);
// });

let json = fs.readFileSync("champ.json", "utf8");

json = JSON.parse(json);

let champList = json.data;
// console.log(champList['Zyra']);

let keyList = Object.keys(champList);
// console.log(keyList);

let myjson = [];

for(let i = 0; i < keyList.length; i++){
    let item = champList[keyList[i]];
    let myitem = {name:item.name, id:item.id, img:item.image.full};
    myjson[item.key] = myitem;
}

fs.writeFileSync("mychamp.json", JSON.stringify(myjson), "utf8");