var counter=0; //aantal kilometer
var upgrade1 = 0; //aantal upgrades1
var upgrade2 = 0; //aantal upgrades2
var upgrade3 = 0;
var upgrade4 = 0;
var upgrade5 = 0;
var upgrade6 = 0;
var pps = 0;

function saveStorage(){
    localStorage["storage"] = counter;
    

}

function loadStorage(){
    counter = parseInt(localStorage["storage"]);
    pps = parseInt(localStorage["puntenPerSeconde"]);
    document.getElementById("puntenPerSeconde").innerHTML = 1+pps;
    
    
    
}

function loadHighscores() {
    counter = parseInt(localStorage["storage"]);
    document.getElementById("score1").innerHTML = localStorage["HS1"];                                           
    document.getElementById("naamScore1").innerHTML = localStorage["NS1"];
    document.getElementById("score2").innerHTML = localStorage["HS2"];                                            
    document.getElementById("naamScore2").innerHTML = localStorage["NS2"];
    document.getElementById("score3").innerHTML = localStorage["HS3"];                                         
    document.getElementById("naamScore3").innerHTML = localStorage["NS3"];
    document.getElementById("score4").innerHTML = localStorage["HS4"];                                         
    document.getElementById("naamScore4").innerHTML = localStorage["NS4"];
    document.getElementById("score5").innerHTML = localStorage["HS5"];                                         
    document.getElementById("naamScore5").innerHTML = localStorage["NS5"];
    document.getElementById("score6").innerHTML = localStorage["HS6"];                                         
    document.getElementById("naamScore6").innerHTML = localStorage["NS6"];
    document.getElementById("score7").innerHTML = localStorage["HS7"];                                         
    document.getElementById("naamScore7").innerHTML = localStorage["NS7"];
    document.getElementById("score8").innerHTML = localStorage["HS8"];                                         
    document.getElementById("naamScore8").innerHTML = localStorage["NS8"];
    document.getElementById("score9").innerHTML = localStorage["HS9"];                                         
    document.getElementById("naamScore9").innerHTML = localStorage["NS9"];
    document.getElementById("score10").innerHTML = localStorage["HS10"];                                         
    document.getElementById("naamScore10").innerHTML = localStorage["NS10"];
}

function loadUpgrades() {

    
    document.getElementById("motor_aantal").innerHTML = localStorage["motorAantal"];
    document.getElementById("motor_kost").innerHTML = localStorage["prijsMotor"];
    document.getElementById("versnelling_aantal").innerHTML = localStorage["versnellingAantal"];
    document.getElementById("versnelling_kost").innerHTML = localStorage["prijsVersnelling"];
    document.getElementById("turbo_aantal").innerHTML = localStorage["turboAantal"];
    document.getElementById("turbo_kost").innerHTML = localStorage["prijsTurbo"];
    document.getElementById("wiel_aantal").innerHTML = localStorage["wielAantal"];
    document.getElementById("wiel_kost").innerHTML = localStorage["prijsWiel"];
    document.getElementById("spoiler_aantal").innerHTML = localStorage["spoilerAantal"];
    document.getElementById("spoiler_kost").innerHTML = localStorage["prijsSpoiler"];
    document.getElementById("nos_aantal").innerHTML = localStorage["nosAantal"];
    document.getElementById("nos_kost").innerHTML = localStorage["prijsNos"];
    
}


function resetStorage(){
    localStorage.clear();
    counter = 0;
    pps = 0;
    start();

}

//kilometers per second
setInterval(function () {
        counter+= 1 + pps;
        setCounter();
}, 1000);

//geen kommagetallen meer
setCounter = function()
{
    document.getElementById("counter").innerHTML = Math.round(counter);
};

//auto klikken
function clickFunction()
{

	counter += 1 + pps;
	setCounter();
	
}

function upgradeMotor() {
    var prijs = parseInt(localStorage["prijsMotor"]);  //20
    var aantal = parseInt(localStorage["motorAantal"]); //0
    var counter = parseInt(localStorage["storage"]);
    var pps = parseInt(localStorage["puntenPerSeconde"]);
    
    if(prijs > counter) {
        alert("Not enough points");
    }
    else {
        //aantal laten stijgen
        aantal++;
        document.getElementById("motor_aantal").innerHTML = aantal;
        localStorage["motorAantal"] = aantal;
        //kostprijs aftrekken van de counter
        counter -= prijs;
        localStorage["storage"] = counter;
        //prijs berekenen voor volgend exemplaar
        prijs += (prijs*20)/100; //20%
        document.getElementById("motor_kost").innerHTML = Math.round(prijs);
        localStorage["prijsMotor"] = prijs;
        //puntenPerSeconde berekenen
        pps += 1*aantal;
        localStorage["puntenPerSeconde"] = pps;       
        
    }
}

function upgradeVersnelling() {
    var prijs = parseInt(localStorage["prijsVersnelling"]);  //150
    var aantal = parseInt(localStorage["versnellingAantal"]); //0
    var counter = parseInt(localStorage["storage"]);
    var pps = parseInt(localStorage["puntenPerSeconde"]);
    
    if(prijs > counter) {
        alert("Not enough points");
    }
    else {
        //aantal laten stijgen
        aantal++;
        document.getElementById("versnelling_aantal").innerHTML = aantal;
        localStorage["versnellingAantal"] = aantal;
        //kostprijs aftrekken van de counter
        counter -= prijs;
        localStorage["storage"] = counter;
        //prijs berekenen voor volgend exemplaar
        prijs += (prijs*20)/100; //20%
        document.getElementById("versnelling_kost").innerHTML = Math.round(prijs);
        localStorage["prijsVersnelling"] = prijs;
        //puntenPerSeconde berekenen
        pps += 4*aantal;
        localStorage["puntenPerSeconde"] = pps;       
        
    }
}

function upgradeTurbo() {
    var prijs = parseInt(localStorage["prijsTurbo"]);  //900
    var aantal = parseInt(localStorage["turboAantal"]); //0
    var counter = parseInt(localStorage["storage"]);
    var pps = parseInt(localStorage["puntenPerSeconde"]);
    
    if(prijs > counter) {
        alert("Not enough points");
    }
    else {
        //aantal laten stijgen
        aantal++;
        document.getElementById("turbo_aantal").innerHTML = aantal;
        localStorage["turboAantal"] = aantal;
        //kostprijs aftrekken van de counter
        counter -= prijs;
        localStorage["storage"] = counter;
        //prijs berekenen voor volgend exemplaar
        prijs += (prijs*30)/100; //20%
        document.getElementById("trubo_kost").innerHTML = Math.round(prijs);
        localStorage["prijsTurbo"] = prijs;
        //puntenPerSeconde berekenen
        pps += 8*aantal;
        localStorage["puntenPerSeconde"] = pps;       
        
    }
}

function upgradeWiel() {
    var prijs = parseInt(localStorage["prijsWiel"]);  //4.000
    var aantal = parseInt(localStorage["wielAantal"]); //0
    var counter = parseInt(localStorage["storage"]);
    var pps = parseInt(localStorage["puntenPerSeconde"]);
    
    if(prijs > counter) {
        alert("Not enough points");
    }
    else {
        //aantal laten stijgen
        aantal++;
        document.getElementById("wiel_aantal").innerHTML = aantal;
        localStorage["wielAantal"] = aantal;
        //kostprijs aftrekken van de counter
        counter -= prijs;
        localStorage["storage"] = counter;
        //prijs berekenen voor volgend exemplaar
        prijs += (prijs*40)/100; //20%
        document.getElementById("wiel_kost").innerHTML = Math.round(prijs);
        localStorage["prijsWiel"] = prijs;
        //puntenPerSeconde berekenen
        pps += 16*aantal;
        localStorage["puntenPerSeconde"] = pps;       
        
    }
}

function upgradeSpoiler() {
    var prijs = parseInt(localStorage["prijsSpoiler"]);  //20.000
    var aantal = parseInt(localStorage["spoilerAantal"]); //0
    var counter = parseInt(localStorage["storage"]);
    var pps = parseInt(localStorage["puntenPerSeconde"]);
    
    if(prijs > counter) {
        alert("Not enough points");
    }
    else {
        //aantal laten stijgen
        aantal++;
        document.getElementById("spoiler_aantal").innerHTML = aantal;
        localStorage["spoilerAantal"] = aantal;
        //kostprijs aftrekken van de counter
        counter -= prijs;
        localStorage["storage"] = counter;
        //prijs berekenen voor volgend exemplaar
        prijs += (prijs*50)/100; //20%
        document.getElementById("spoiler_kost").innerHTML = Math.round(prijs);
        localStorage["prijsSpoiler"] = prijs;
        //puntenPerSeconde berekenen
        pps += 50*aantal;
        localStorage["puntenPerSeconde"] = pps;       
        
    }
}

function upgradeNos() {
    var prijs = parseInt(localStorage["prijsNos"]);  //100.000
    var aantal = parseInt(localStorage["nosAantal"]); //0
    var counter = parseInt(localStorage["storage"]);
    var pps = parseInt(localStorage["puntenPerSeconde"]);
    
    if(prijs > counter) {
        alert("Not enough points");
    }
    else {
        //aantal laten stijgen
        aantal++;
        document.getElementById("nos_aantal").innerHTML = aantal;
        localStorage["nosAantal"] = aantal;
        //kostprijs aftrekken van de counter
        counter -= prijs;
        localStorage["storage"] = counter;
        //prijs berekenen voor volgend exemplaar
        prijs += (prijs*20)/100; //20%
        document.getElementById("nos_kost").innerHTML = Math.round(prijs);
        localStorage["prijsNos"] = prijs;
        //puntenPerSeconde berekenen
        pps += 1*aantal;
        localStorage["puntenPerSeconde"] = pps;       
        
    }
}



//achievement nummer 1
var achievement1Occured = 0;
var achievement1Timer = setInterval(function () {
        if(achievement1Occured === 0){
            if(counter > 200){
                alert("Achievement unlocked: +100 points");
                counter+=100;
                document.getElementById("counter").innerHTML = counter;
                achievement1Occured = 1;
                clearInterval(achievement1Timer);
                
        }
        
        }
}, 100);





function save(){
    var score = counter;
    var highScore1 = localStorage["HS1"];
    var naamScore1 = localStorage["NS1"];
    var highScore2 = localStorage["HS2"];
    var naamScore2 = localStorage["NS2"];
    var highScore3 = localStorage["HS3"];
    var naamScore3 = localStorage["NS3"];
    var highScore4 = 0;
    var naamScore4 = "";
    var highScore5 = 0;
    var naamScore5 = "";
    var highScore6 = 0;
    var naamScore6 = "";
    var highScore7 = 0;
    var naamScore7 = "";
    var highScore8 = 0;
    var naamScore8 = "";
    var highScore9 = 0;
    var naamScore9 = "";
    var highScore10 = 0;
    var naamScore10 = "";
    if (score > highScore10){
        if ( score > highScore9){
            if (score > highScore8){
                if (score > highScore7){
                    if (score > highScore6){
                        if (score > highScore5){
                            if (score > highScore4){
                                if(score > highScore3){
                                    if (score > highScore2){
                                        if (score > highScore1){
                                            //eerste
                                            highScore10 = highScore9; highScore9 = highScore8; highScore8 = highScore7; highScore7 = highScore6; highScore6 = highScore5; highScore5 = highScore4; highScore4 = highScore3; highScore3 = highScore2; highScore2 = highScore1; highScore1 = score;
                                            naamScore10 = naamScore9; naamScore9 = naamScore8; naamScore8 = naamScore7; naamScore7 = naamScore6; naamScore6 = naamScore5; naamScore5 = naamScore4; naamScore4 = naamScore3; naamScore3 = naamScore2; naamScore2 = naamScore1; naamScore1 = prompt("Proficiat, u hebt de hoogste score verbroken! Geef uw naam op:");
                                            localStorage["HS1"] = highScore1;
                                            localStorage["NS1"] = naamScore1;
                                            localStorage["HS2"] = highScore2;
                                            localStorage["NS2"] = naamScore2;
                                            localStorage["HS3"] = highScore3;
                                            localStorage["NS3"] = naamScore3;
                                            localStorage["HS4"] = highScore4;
                                            localStorage["NS4"] = naamScore4;
                                            localStorage["HS5"] = highScore5;
                                            localStorage["NS5"] = naamScore5;
                                            localStorage["HS6"] = highScore6;
                                            localStorage["NS6"] = naamScore6;
                                            localStorage["HS7"] = highScore7;
                                            localStorage["NS7"] = naamScore7;
                                            localStorage["HS8"] = highScore8;
                                            localStorage["NS8"] = naamScore8;
                                            localStorage["HS9"] = highScore9;
                                            localStorage["NS9"] = naamScore9;
                                            localStorage["HS10"] = highScore10;
                                            localStorage["NS10"] = naamScore10;
                                            
                                        }
                                        else {
                                            //tweede
                                            highScore10 = highScore9; highScore9 = highScore8; highScore8 = highScore7; highScore7 = highScore6; highScore6 = highScore5; highScore5 = highScore4; highScore4 = highScore3; highScore3 = highScore2; highScore2 = score;
                                            naamScore10 = naamScore9; naamScore9 = naamScore8; naamScore8 = naamScore7; naamScore7 = naamScore6; naamScore6 = naamScore5; naamScore5 = naamScore4; naamScore4 = naamScore3; naamScore3 = naamScore2; naamScore2 = prompt("Proficiat, u hebt de tweede plaats behaald! Geef uw naam op:");
                                            localStorage["HS2"] = highScore2;
                                            localStorage["NS2"] = naamScore2;
                                            localStorage["HS3"] = highScore3;
                                            localStorage["NS3"] = naamScore3;
                                            localStorage["HS4"] = highScore4;
                                            localStorage["NS4"] = naamScore4;
                                            localStorage["HS5"] = highScore5;
                                            localStorage["NS5"] = naamScore5;
                                            localStorage["HS6"] = highScore6;
                                            localStorage["NS6"] = naamScore6;
                                            localStorage["HS7"] = highScore7;
                                            localStorage["NS7"] = naamScore7;
                                            localStorage["HS8"] = highScore8;
                                            localStorage["NS8"] = naamScore8;
                                            localStorage["HS9"] = highScore9;
                                            localStorage["NS9"] = naamScore9;
                                            localStorage["HS10"] = highScore10;
                                            localStorage["NS10"] = naamScore10;
                                        }
                                    }
                                    else {
                                        //derde
                                        highScore10 = highScore9; highScore9 = highScore8; highScore8 = highScore7; highScore7 = highScore6; highScore6 = highScore5; highScore5 = highScore4; highScore4 = highScore3; highScore3 = score;
                                        naamScore10 = naamScore9; naamScore9 = naamScore8; naamScore8 = naamScore7; naamScore7 = naamScore6; naamScore6 = naamScore5; naamScore5 = naamScore4; naamScore4 = naamScore3; naamScore3 = prompt("Proficiat, u hebt de derde plaats behaald! Geef uw naam op:");
                                        document.getElementById("score3").innerHTML = highScore3;                                            
                                        document.getElementById("naamScore3").innerHTML = naamScore3; 
                                        localStorage["HS3"] = highScore3;
                                        localStorage["NS3"] = naamScore3;
                                        localStorage["HS4"] = highScore4;
                                        localStorage["NS4"] = naamScore4;
                                        localStorage["HS5"] = highScore5;
                                        localStorage["NS5"] = naamScore5;
                                        localStorage["HS6"] = highScore6;
                                        localStorage["NS6"] = naamScore6;
                                        localStorage["HS7"] = highScore7;
                                        localStorage["NS7"] = naamScore7;
                                        localStorage["HS8"] = highScore8;
                                        localStorage["NS8"] = naamScore8;
                                        localStorage["HS9"] = highScore9;
                                        localStorage["NS9"] = naamScore9;
                                        localStorage["HS10"] = highScore10;
                                        localStorage["NS10"] = naamScore10;
                                    }
                                }
                                else {
                                    //vierde
                                    highScore10 = highScore9; highScore9 = highScore8; highScore8 = highScore7; highScore7 = highScore6; highScore6 = highScore5; highScore5 = highScore4; highScore4 = score;
                                    naamScore10 = naamScore9; naamScore9 = naamScore8; naamScore8 = naamScore7; naamScore7 = naamScore6; naamScore6 = naamScore5; naamScore5 = naamScore4; naamScore4 = prompt("Proficiat, u hebt de vierde plaats behaald! Geef uw naam op:");
                                    localStorage["HS4"] = highScore4;
                                    localStorage["NS4"] = naamScore4;
                                    localStorage["HS5"] = highScore5;
                                    localStorage["NS5"] = naamScore5;
                                    localStorage["HS6"] = highScore6;
                                    localStorage["NS6"] = naamScore6;
                                    localStorage["HS7"] = highScore7;
                                    localStorage["NS7"] = naamScore7;
                                    localStorage["HS8"] = highScore8;
                                    localStorage["NS8"] = naamScore8;
                                    localStorage["HS9"] = highScore9;
                                    localStorage["NS9"] = naamScore9;
                                    localStorage["HS10"] = highScore10;
                                    localStorage["NS10"] = naamScore10;                                            
                                }
                            }
                            else {
                                //vijfde
                                highScore10 = highScore9; highScore9 = highScore8; highScore8 = highScore7; highScore7 = highScore6; highScore6 = highScore5; highScore5 = score;
                                naamScore10 = naamScore9; naamScore9 = naamScore8; naamScore8 = naamScore7; naamScore7 = naamScore6; naamScore6 = naamScore5; naamScore5 = prompt("Proficiat, u hebt de vijfde plaats behaald! Geef uw naam op:");
                                localStorage["HS5"] = highScore5;
                                localStorage["NS5"] = naamScore5;
                                localStorage["HS6"] = highScore6;
                                localStorage["NS6"] = naamScore6;
                                localStorage["HS7"] = highScore7;
                                localStorage["NS7"] = naamScore7;
                                localStorage["HS8"] = highScore8;
                                localStorage["NS8"] = naamScore8;
                                localStorage["HS9"] = highScore9;
                                localStorage["NS9"] = naamScore9;
                                localStorage["HS10"] = highScore10;
                                localStorage["NS10"] = naamScore10;                                                
                            }
                        }
                        else {
                            //zesde
                            highScore10 = highScore9; highScore9 = highScore8; highScore8 = highScore7; highScore7 = highScore6; highScore6 = score;
                            naamScore10 = naamScore9; naamScore9 = naamScore8; naamScore8 = naamScore7; naamScore7 = naamScore6; naamScore6 = prompt("Proficiat, u hebt de zesde plaats behaald! Geef uw naam op:");
                            localStorage["HS6"] = highScore6;
                            localStorage["NS6"] = naamScore6;
                            localStorage["HS7"] = highScore7;
                            localStorage["NS7"] = naamScore7;
                            localStorage["HS8"] = highScore8;
                            localStorage["NS8"] = naamScore8;
                            localStorage["HS9"] = highScore9;
                            localStorage["NS9"] = naamScore9;
                            localStorage["HS10"] = highScore10;
                            localStorage["NS10"] = naamScore10;                                              
                        }
                    }
                    else {
                        //zevende
                        highScore10 = highScore9; highScore9 = highScore8; highScore8 = highScore7; highScore7 = score;                       
                        naamScore10 = naamScore9; naamScore9 = naamScore8; naamScore8 = naamScore7; naamScore7 = prompt("Proficiat, u hebt de zevende plaats behaald! Geef uw naam op:");
                        localStorage["HS7"] = highScore7;
                        localStorage["NS7"] = naamScore7;
                        localStorage["HS8"] = highScore8;
                        localStorage["NS8"] = naamScore8;
                        localStorage["HS9"] = highScore9;
                        localStorage["NS9"] = naamScore9;
                        localStorage["HS10"] = highScore10;
                        localStorage["NS10"] = naamScore10;                                               
                    }
                }
                else {
                    //achtste
                    highScore10 = highScore9; highScore9 = highScore8; highScore8 = score;
                    naamScore10 = naamScore9; naamScore9 = naamScore8; naamScore8 = prompt("Proficiat, u hebt de achtste plaats behaald! Geef uw naam op:");
                    localStorage["HS8"] = highScore8;
                    localStorage["NS8"] = naamScore8;
                    localStorage["HS9"] = highScore9;
                    localStorage["NS9"] = naamScore9;
                    localStorage["HS10"] = highScore10;
                    localStorage["NS10"] = naamScore10;                                              
                }
            }
            else {
                //negende
                highScore10 = highScore9; highScore9 = score;
                naamScore10 = naamScore9; naamScore9 = prompt("Proficiat, u hebt de negende plaats behaald! Geef uw naam op:");
                localStorage["HS9"] = highScore9;
                localStorage["NS9"] = naamScore9;
                localStorage["HS10"] = highScore10;
                localStorage["NS10"] = naamScore10;                                               
            }
            
        }
        else {
            //tiende
            highScore10 = score;
            naamScore10 = prompt("Proficiat, u hebt de tiende plaats behaald! Geef uw naam op:");
            localStorage["HS10"] = highScore10;
            localStorage["NS10"] = naamScore10;                                               
        }
        
        
    }
    else alert("Game saved. Geen highscore behaald.");  

}

function start() {
    localStorage["storage"] = 0;
    //upgrades
    localStorage["puntenPerSeconde"] = 0;
    //motor
    localStorage["prijsMotor"] = 20;
    localStorage["motorAantal"] = 0;
    
    //versnellingsbak
    localStorage["prijsVersnelling"] = 150;
    localStorage["versnellingAantal"] = 0;
    
    //turbo
    localStorage["prijsTurbo"] = 900;
    localStorage["turboAantal"] = 0;
    
    //wiel
    localStorage["prijsWiel"] = 4000;
    localStorage["wielAantal"] = 0;
   
    //spoiler
    localStorage["prijsSpoiler"] = 20000;
    localStorage["spoilerAantal"] = 0;
    
    //nos
    localStorage["prijsNos"] = 100000;
    localStorage["nosAantal"] = 0;
    
    //highscores
    localStorage["HS1"] = 0;
    localStorage["NS1"] = "";
    localStorage["HS2"] = 0;
    localStorage["NS2"] = "";
    localStorage["HS3"] = 0;
    localStorage["NS3"] = "";
    
}

function playSound(soundfile) {
 document.getElementById("dummy").innerHTML=
 "<embed src=\""+soundfile+"\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
 }