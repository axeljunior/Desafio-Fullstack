const cjson = require("csvtojson");
const fs = require('fs');
const path = require('path');

async function load(){
    let finalResult = {
        "currentPage": 1,
        "perPage": 21,
        "movies": []
    }
    let objectList = []
    let ratingResult = await cjson({delimiter: "\t",
    }).fromFile(path.join(__dirname,'title.ratings.teste.tsv'));
    let basicsResult = await cjson({delimiter: "\t",
    }).fromFile(path.join(__dirname,'title.basics.teste.tsv'));
    
    basicsResult.forEach((element,index) => {
        objectList.push({
            ...element,
            rating: {...ratingResult[index]}
        })
    })
    finalResult.movies = objectList
    fs.writeFileSync(path.join(__dirname,'movieData.json'), JSON.stringify(finalResult, null, 4));
}

load()