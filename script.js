var enemies = [
    {
        "Name": "Cypher",
        "HP" : 25,
    },
    {
        "Name": "Breach",
        "HP" : 55,
    },
    {
        "Name": "Yoru",
        "HP" : 100,
    },
    {
        "Name": "KillJoy",
        "HP" : 125,
    },
    {
        "Name": "Jett",
        "HP" : 150,
    }
];
enemy = []

var hero = [
    {
        "Name": "Phoenix",
        "Ability": "Hot Hands",
        "HP" : 150,
    },
    {
        "Name": "Sage",
        "Ability": "Healing Sphere",
        "HP" : 150,
    }
];


function Combat(){
    headDammage = 100;
    bodyDammage = 50;
    limbDammage = 25;
    miss = 0;
    hitArray = [headDammage, bodyDammage, bodyDammage, bodyDammage, limbDammage, limbDammage, limbDammage, limbDammage, miss, miss];
    random = Math.floor(Math.random() * hitArray + 1)

    function battleCalls(){
        switch(hitArray[random]){
            case headDammage:
                console.log("Head shot!");
                break;
            case bodyDammage:
                console.log("Body shot!");
                break;
            case limbDammage:
                console.log("Limb shot!");
                break;
                case miss:
                console.log("Miss!");
                break;
            default:
                console.log("????");
                break;
        }    
    }

    if(hero.HP > 0 && enemy.HP > 0){
        //hero Attack
        random = Math.floor(Math.random() * 10 + 1)
        enemy.HP -= hitArray[random];
        battleCalls()
        console.log(enemy.Name,"lost", hitArray[random], "HP")
        console.log(enemy.Name, "has", enemy.HP, "HP")
        //enemy Attack
        random = Math.floor(Math.random() * 10 + 1);
        hero.HP -= hitArray[random];
        battleCalls();
        console.log(hero.Name,"lost", hitArray[random], "HP")
        console.log(hero.Name,"has", hero.HP, "HP")
        Combat();
    }else{
        if(enemy.HP <= 0){
            console.log(enemy.Name, "was defeated");
        }
        else if(hero.HP <= 0){
            console.log("GAME OVER")
        }
    }
}
document.getElementById("Phoenix").style.display = "none";
document.getElementById("Sage").style.display = "none";
document.getElementById("Cypher").style.display = "none";
document.getElementById("PhoenixBtn").style.display = "none";
document.getElementById("SageBtn").style.display = "none";
document.getElementById("MidBtn").style.display = "none";
document.getElementById("C linkBtn").style.display = "none";
document.getElementById("C siteBtn").style.display = "none";
document.getElementById("LobbyBtn").style.display = "none";
document.getElementById("AbilityBtn").style.display = "none";
let userName = document.getElementById("txt").value

function start(){
    document.getElementById("PhoenixBtn").style.display = "inline"
    document.getElementById("SageBtn").style.display = "inline"
    document.getElementById("Valorant").style.display = "none"
    document.getElementById("txt").style.display = "none"
    document.getElementById("startBtn").style.display = "none"
    document.getElementById("text1").innerHTML = `Who will ${userName} choose?`
}

function phoenix(){
    hero = hero[0]
    document.getElementById("AbilityBtn").style.display = "inline"
    document.getElementById("PhoenixBtn").style.display = "none";
    document.getElementById("SageBtn").style.display = "none";
    document.getElementById("Phoenix").style.display = "inline";
    document.getElementById("text1").innerHTML = `${userName} chose Phoenix, he can kill anyone instantly with his ability`  ;
    document.getElementById("text2").innerHTML = `where will ${hero.Name} go?`
    document.getElementById("MidBtn").style.display = "inline"
    document.getElementById("C linkBtn").style.display = "inline"
}

function sage(){
    hero = hero[1]
    document.getElementById("AbilityBtn").style.display = "inline"
    document.getElementById("PhoenixBtn").style.display = "none";
    document.getElementById("SageBtn").style.display = "none";
    document.getElementById("Sage").style.display = "inline";
    document.getElementById("text1").innerHTML = `${userName} chose Sage, she can heal herself to full HP`
    document.getElementById("text2").innerHTML = `Where will ${hero.Name} go?`;
    document.getElementById("MidBtn").style.display = "inline"
    document.getElementById("C linkBtn").style.display = "inline"
}

function mid(){
    document.getElementById("Sage").style.display = "none";
    document.getElementById("Phoenix").style.display = "none";
    document.getElementById("MidBtn").style.display = "none";
    document.getElementById("C linkBtn").style.display = "none";
    document.getElementById("LobbyBtn").style.display = "inline"
    document.getElementById("text1").innerHTML = "No one seems to be here"
    document.getElementById("text2").innerHTML = "Where will you go?"
}

function lobby(){
    document.getElementById("LobbyBtn").style.display = "none";
    document.getElementById("text2").style.display = "none";
    document.getElementById("text1").innerHTML = "Mabey something more interesting wouldve happened if you whent to C link";
}

function cLink(){
    document.getElementById("Sage").style.display = "none";
    document.getElementById("Phoenix").style.display = "none";
    document.getElementById("MidBtn").style.display = "none";
    document.getElementById("C linkBtn").style.display = "none";
    document.getElementById("Cypher").style.display = "inline";
    
    enemy = enemies[0]
    document.getElementById("text1").innerHTML = `${enemy.Name} Supprised you?`
    Combat();
    if(hero.HP > 0){
        document.getElementById("C siteBtn").style.display = "inline"
        document.getElementById("text1").innerHTML = `${hero.Name} beat ${enemy.Name} with ${hero.HP} HP left`
    }
}

function cSite(){
    document.getElementById("text2").style.display = "none"
    document.getElementById("C siteBtn").style.display = "none"
    document.getElementById("Cypher").style.display = "none"
    document.getElementById("text1").innerHTML = "Where will your actions take you? will you make it to golorious victory, or will you suffer terrible defeat. Only time will tell!"

}