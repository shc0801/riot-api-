const req = require("request");

let url = "https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/";
let name = "shc0801";
let key = "RGAPI-73c155c1-01a0-4ad9-901d-1178ea4f0ffd";
req.get(`${url}${name}?api_key=${key}`, (err, res, body) => {
    console.log(body);
});
