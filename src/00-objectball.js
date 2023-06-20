function gameObject(){
return obj = {
        home : {
            teamName : "Brooklyn Nets",
            colors : ['Black', 'White'],
            players : {
                'Alan Anderson' : {"number":0, "shoe":16, "points":22, "rebounds":12, "assists":12, "steals":3, "blocks":1, "slamDunks":1},
                'Reggie Evans' : {"number":30, "shoe":14, "points":12, "rebounds":12, "assists":12, "steals":12, "blocks":12, "slamDunks":7},
                'Brook Lopez' : {"number":11, "shoe":17, "points":17, "rebounds":19, "assists":10, "steals":3, "blocks":1, "slamDunks":15},
                'Mason Plumlee' : {"number":1, "shoe":19, "points":26, "rebounds":12, "assists":6, "steals":3, "blocks":8, "slamDunks":5},
                'Jason Terry' : {"number":31, "shoe":15, "points":19, "rebounds":2, "assists":2, "steals":4, "blocks":11, "slamDunks":1}
            },
        },
        away : {
            teamName : "Charlotte Hornets",
            colors : ['Turquoise','Purple'],
            players : {
                'Jeff Adrien' : {"number":4, "shoe":18, "points":10, "rebounds":1, "assists":1, "steals":2, "blocks":7, "slamDunks":2},
                'Bismark Biyombo' : {"number":0, "shoe":16, "points":12, "rebounds":4, "assists":7, "steals":7, "blocks":15, "slamDunks":10},
                'DeSagna Diop' : {"number":2, "shoe":14, "points":24, "rebounds":12, "assists":12, "steals":4, "blocks":5, "slamDunks":5},
                'Ben Gordon' : {"number":8, "shoe":15, "points":33, "rebounds":3, "assists":2, "steals":1, "blocks":1, "slamDunks":0},
                'Brendan Haywood' : {"number":33, "shoe":15, "points":6, "rebounds":2, "assists":2, "steals":22, "blocks":5, "slamDunks":12}
            },
        }
    }
}
let game;
function numPointsScored(name){
    game = gameObject();
    let nesthome = game["home"]["players"];
    let nestaway = game["away"]["players"];
    for(let key in nesthome){
    if(key === name){
        return game["home"]["players"][name]["points"];
    }}
    for(let key in nestaway){
    if(key === name){
        return game["away"]["players"][name]["points"];
    }}
    return "Player not found"
}
console.log(numPointsScored('Jeff Adrien'));

function shoeSize(name){
    game = gameObject();
    let nesthome = game["home"]["players"];
    let nestaway = game["away"]["players"];
    for(let key in nesthome){
    if(key === name){
        return game["home"]["players"][name]["shoe"];
    }}
    for(let key in nestaway){
        if(key === name){
        return game["away"]["players"][name]["shoe"];
    }}
    return "Player not found."
}
console.log(shoeSize('Jeff Adrien'));

function teamColors(tname){
    game = gameObject();
    let nesthome = game["home"]["teamName"];
    let nestaway = game["away"]["teamName"];
    if(nesthome === tname){
        return game["home"]["colors"]
    }
    else if(nestaway === tname){
        return game["away"]["colors"]
    }else{
        return "Team not found."
    }
}
console.log(teamColors('Brooklyn Nets'));

function teamNames(){
    game = gameObject();
    let arr = [];
    for(let key in game){
        arr.push(game[key]["teamName"]);
    }
    return arr;
}
console.log(teamNames());

function playerNumbers(tname){
    game = gameObject();
    let nesthome = game["home"]["teamName"];
    let nestaway = game["away"]["teamName"];
    let arr = [];
    if(nesthome === tname){
        const arr1 = Object.values(game["home"]["players"]);
        for( let i=0; i < arr1.length ; i++){
           arr.push(arr1[i]["number"])
        }
        return arr;
    }else if(nestaway === tname){
        const arr1 = Object.values(game["away"]["players"]);
        for( let i=0; i < arr1.length ; i++){
           arr.push(arr1[i]["number"])
        }
        return arr;
    }else{
        return "Team not found."
    }
}
console.log(playerNumbers("Charlotte Hornets"))

function playerStats(name){
    game = gameObject();
    let nesthome = game["home"]["players"];
    let nestaway = game["away"]["players"];
    for(let key in nesthome){
    if(key === name){
        return game["home"]["players"][name];
    }}
    for(let key in nestaway){
        if(key === name){
        return game["away"]["players"][name];
    }}
    return "Player not found."
}
console.log(playerStats('Brook Lopez'));

function bigShoeRebounds(){
    game = gameObject();
    let shoes = [];
    let big;
    for(let item in game){
        const arr = Object.values(game[item]["players"]);
        for(let i=0; i < arr.length ; i++){
           shoes.push(arr[i]["shoe"])
        }
    }
    big = Math.max.apply(Math, shoes);
    for(let item in game){
        const arr = Object.values(game[item]["players"]);
        for(let i=0; i < arr.length ; i++){
            if(arr[i]["shoe"] === big){
                return arr[i]["rebounds"];
            }
        }
    }
    
}
console.log(bigShoeRebounds());