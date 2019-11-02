const req = require("request");

let url = "https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/";
let name = "shc0801";
let key = "RGAPI-73c155c1-01a0-4ad9-901d-1178ea4f0ffd";

req.get(`${url}${name}?api_key=${key}`, (err, res, body)=>{
    let json = JSON.parse(body);
    let accId = json.accountId;

    let matchUrl = `https://kr.api.riotgames.com/lol/match/v4/matchlists/by-account/${accId}?api_key=${key}`;

    req.get(matchUrl, (err, res, body)=>{
        console.log(body);
    })
});

//10.114.52.99.9090
//gmsgondr.net