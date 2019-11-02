const {ipcRenderer} = require("electron");

window.addEventListener("keydown", (e)=>{
    if(e.ctrlkey && e.key.toLowerCase() == "q"){
        ipcRenderer.send("openDev");
    }
})

window.addEventListener("load", ()=>{
    let name = document.querySelector("#name");
    let searchBtn = document.querySelector("#search");

    searchBtn.addEventListener("click", (e)=>{
        let str = name.nodeValue;
        ipcRenderer.send("summoner", {name:str});
    })
})