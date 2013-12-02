var counter=0; //aantal kilometer
var upgrade1 = 0; //aantal upgrades1
var upgrade2 = 0; //aantal upgrades2
var upgrade3 = 0;
var upgrade4 = 0;
var upgrade5 = 0;
var upgrade6 = 0;

function saveStorage(){
    localStorage["storage"] = counter;
    localStorage["HS1"] = highScore1;localStorage["NS1"] = naamScore1;localStorage["HS2"] = highScore1;localStorage["NS2"] = naamScore1;localStorage["HS3"] = highScore1;localStorage["NS3"] = naamScore1;localStorage["HS4"] = highScore1;localStorage["NS4"] = naamScore1;localStorage["HS5"] = highScore1;localStorage["NS5"] = naamScore1;localStorage["HS6"] = highScore1;localStorage["NS6"] = naamScore1;localStorage["HS7"] = highScore1;localStorage["NS7"] = naamScore1;localStorage["HS8"] = highScore1;localStorage["NS8"] = naamScore1;localStorage["HS9"] = highScore1;localStorage["NS9"] = naamScore1;localStorage["HS10"] = highScore1;localStorage["NS10"] = naamScore1;
}

function loadStorage(){
    counter = parseInt(localStorage.getItem("storage"));
    highScore1 = localStorage["HS1"];naamScore1 = localStorage["NS1"];highScore1 = localStorage["HS2"];naamScore1 = localStorage["NS2"];highScore1 = localStorage["HS3"];naamScore1 = localStorage["NS3"];highScore1 = localStorage["HS4"];naamScore1 = localStorage["NS4"];highScore1 = localStorage["HS5"];naamScore1 = localStorage["NS5"];highScore1 = localStorage["HS6"];naamScore1 = localStorage["NS6"];highScore1 = localStorage["HS7"];naamScore1 = localStorage["NS7"];highScore1 = localStorage["HS8"];naamScore1 = localStorage["NS8"];highScore1 = localStorage["HS9"];naamScore1 = localStorage["NS9"];highScore1 = localStorage["HS10"];naamScore1 = localStorage["NS10"];
    document.getElementById("score1").innerHTML = localStorage["HS1"];                                            
    document.getElementById("naamScore1").innerHTML = localStorage["NS1"];
    document.getElementById("score1").innerHTML = localStorage["HS2"];                                            
    document.getElementById("naamScore1").innerHTML = localStorage["NS2"];
    document.getElementById("score1").innerHTML = localStorage["HS3"];                                            
    document.getElementById("naamScore1").innerHTML = localStorage["NS3"];
    document.getElementById("score1").innerHTML = localStorage["HS4"];                                            
    document.getElementById("naamScore1").innerHTML = localStorage["NS4"];
    document.getElementById("score1").innerHTML = localStorage["HS5"];                                            
    document.getElementById("naamScore1").innerHTML = localStorage["NS5"];
    document.getElementById("score1").innerHTML = localStorage["HS6"];                                            
    document.getElementById("naamScore1").innerHTML = localStorage["NS6"];
    document.getElementById("score1").innerHTML = localStorage["HS7"];                                            
    document.getElementById("naamScore1").innerHTML = localStorage["NS7"];
    document.getElementById("score1").innerHTML = localStorage["HS8"];                                            
    document.getElementById("naamScore1").innerHTML = localStorage["NS8"];
    document.getElementById("score1").innerHTML = localStorage["HS9"];                                            
    document.getElementById("naamScore1").innerHTML = localStorage["NS9"];
    document.getElementById("score1").innerHTML = localStorage["HS10"];                                            
    document.getElementById("naamScore1").innerHTML = localStorage["NS10"];
}

function resetStorage(){
    localStorage["storage"] = 0;
    localStorage["HS1"] = "";localStorage["NS1"] = "";    localStorage["HS2"] = "";localStorage["NS2"] = "";    localStorage["HS3"] = "";localStorage["NS3"] = "";    localStorage["HS4"] = "";localStorage["NS4"] = "";    localStorage["HS5"] = "";localStorage["NS5"] = "";    localStorage["HS6"] = "";localStorage["NS6"] = "";    localStorage["HS7"] = "";localStorage["NS7"] = "";    localStorage["HS8"] = "";localStorage["NS8"] = "";    localStorage["HS9"] = "";localStorage["NS9"] = "";    localStorage["HS10"] = "";localStorage["NS10"] = "";
}

//kilometers per second
setInterval(function () {
        counter+=1;
        setCounter();
}, 1000);

//geen kommagetallen meer
setCounter = function()
{
    document.getElementById("counter").innerHTML = counter;
};

//auto klikken
function clickFunction()
{

	counter += 1;
	setCounter();
	
}

//upgradesFunction
function upgradeFunction(upgrade)
{
	if(prijs > counter){
		alert("Not enough points");
	}
	else{
		aantal++;
		document.getElementById("upgrade_aantal").innerHTML = aantal;
		counter -= prijs;
		setCounter();
		prijs += (prijs*multiplier)/100;
		document.getElementById("upgrade_kost").innerHTML = prijs;
		puntenPerSeconde += puntenMultiplier;
		document.getElementById("puntenPerSeconde").innerHTML = MOTOR.punten+VERSNELLINGSBAK.punten+TURBO.punten+WIEL.punten+SPOILER.punten+NOS.punten;
		
				
		
	}
}

//enums van upgrades
var UPGRADE = {
    MOTOR: {
        prijs: 20,
        puntenMultiplier: 1,
        puntenPerSeconde: 0,
        aantal: 0,
        multiplier: 50
    },
    VERSNELLINGSBAK: {
        prijs: 2,
        punten: 2,
        aantal: 0,
        multiplier: 3
    },
	TURBO: {
        prijs: 2,
		puntenMultiplier: 3,
        puntenPerSeconde: 0,
        aantal: 0,
        multiplier: 7
    },
    WIEL: {
        prijs: 2,
        punten: 3,
        aantal: 0,
        multiplier: 4 
    },
    SPOILER: {
        prijs: 2,
        punten: 4,
        aantal: 0,
        multiplier: 5
    },
    NOS: {
        prijs: 2,
        punten: 5,
        aantal: 0,
        multiplier: 6
    }

};

//resetKnop
function resetKnop(){
    
    counter = 0;
    document.getElementById("counter").innerHTML = counter;
    upgrade1 = 0;
    document.getElementById("upgrade1").innerHTML = upgrade1;
    document.getElementById("upgradekost1").innerHTML = 0;
    upgrade2 = 0;
    document.getElementById("upgrade2").innerHTML = upgrade2;
    document.getElementById("upgradekost2").innerHTML = 0;
    document.getElementById("puntenPerSeconde").innerHTML = 0;
}

/*
//achievement nummer 1
var achievement1Occured = 0;
var achievementTimer = setInterval(function () {
        if(achievement1Occured === 0){
            if(counter > 100){
                alert("Achievement unlocked, 100 kilometer: +20 kilometer");
                counter+=20;
                document.getElementById("counter").innerHTML = counter;
                achievement1Occured = 1;
                clearInterval(achievementTimer);
                
        }
        
        }
}, 100);
*/

//highscores
var highScore1 = 0;
var naamScore1 = "";
var highScore2 = 0;
var naamScore2 = "";
var highScore3 = 0;
var naamScore3 = "";
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


function save(){
    var score = counter;
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
                                            document.getElementById("score1").innerHTML = localStorage["HS1"];
                                            document.getElementById("naamScore1").innerHTML = localStorage["NS1"];
                                            document.getElementById("score2").innerHTML = localStorage["HS2"];
                                            document.getElementById("naamScore2").innerHTML = localStorage["HS2"];
                                            document.getElementById("score3").innerHTML = localStorage["HS3"];
                                            document.getElementById("naamScore3").innerHTML = localStorage["HS3"];
                                            document.getElementById("score4").innerHTML = localStorage["HS4"];
                                            document.getElementById("naamScore4").innerHTML = localStorage["HS4"];
                                            document.getElementById("score5").innerHTML = localStorage["HS5"];
                                            document.getElementById("naamScore5").innerHTML = localStorage["HS5"];
                                            document.getElementById("score6").innerHTML = highScore6;
                                            document.getElementById("naamScore6").innerHTML = naamScore6;
                                            document.getElementById("score7").innerHTML = highScore7;
                                            document.getElementById("naamScore7").innerHTML = naamScore7;
                                            document.getElementById("score8").innerHTML = highScore8;
                                            document.getElementById("naamScore8").innerHTML = naamScore8;
                                            document.getElementById("score9").innerHTML = highScore9;
                                            document.getElementById("naamScore9").innerHTML = naamScore9;
                                            document.getElementById("score10").innerHTML = highScore10;
                                            document.getElementById("naamScore10").innerHTML = naamScore10;
                                            
                                        }
                                        else {
                                            //tweede
                                            highScore10 = highScore9; highScore9 = highScore8; highScore8 = highScore7; highScore7 = highScore6; highScore6 = highScore5; highScore5 = highScore4; highScore4 = highScore3; highScore3 = highScore2; highScore2 = score;
                                            naamScore10 = naamScore9; naamScore9 = naamScore8; naamScore8 = naamScore7; naamScore7 = naamScore6; naamScore6 = naamScore5; naamScore5 = naamScore4; naamScore4 = naamScore3; naamScore3 = naamScore2; naamScore2 = prompt("Proficiat, u hebt de tweede plaats behaald! Geef uw naam op:");
                                            document.getElementById("score2").innerHTML = highScore2;
                                            document.getElementById("naamScore2").innerHTML = naamScore2;
                                            document.getElementById("score3").innerHTML = highScore3;
                                            document.getElementById("naamScore3").innerHTML = naamScore3;
                                            document.getElementById("score4").innerHTML = highScore4;
                                            document.getElementById("naamScore4").innerHTML = naamScore4;
                                            document.getElementById("score5").innerHTML = highScore5;
                                            document.getElementById("naamScore5").innerHTML = naamScore5;
                                            document.getElementById("score6").innerHTML = highScore6;
                                            document.getElementById("naamScore6").innerHTML = naamScore6;
                                            document.getElementById("score7").innerHTML = highScore7;
                                            document.getElementById("naamScore7").innerHTML = naamScore7;
                                            document.getElementById("score8").innerHTML = highScore8;
                                            document.getElementById("naamScore8").innerHTML = naamScore8;
                                            document.getElementById("score9").innerHTML = highScore9;
                                            document.getElementById("naamScore9").innerHTML = naamScore9;
                                            document.getElementById("score10").innerHTML = highScore10;
                                            document.getElementById("naamScore10").innerHTML = naamScore10;
                                        }
                                    }
                                    else {
                                        //derde
                                        highScore10 = highScore9; highScore9 = highScore8; highScore8 = highScore7; highScore7 = highScore6; highScore6 = highScore5; highScore5 = highScore4; highScore4 = highScore3; highScore3 = score;
                                        naamScore10 = naamScore9; naamScore9 = naamScore8; naamScore8 = naamScore7; naamScore7 = naamScore6; naamScore6 = naamScore5; naamScore5 = naamScore4; naamScore4 = naamScore3; naamScore3 = prompt("Proficiat, u hebt de derde plaats behaald! Geef uw naam op:");
                                            document.getElementById("score3").innerHTML = highScore3;
                                            document.getElementById("naamScore3").innerHTML = naamScore3;
                                            document.getElementById("score4").innerHTML = highScore4;
                                            document.getElementById("naamScore4").innerHTML = naamScore4;
                                            document.getElementById("score5").innerHTML = highScore5;
                                            document.getElementById("naamScore5").innerHTML = naamScore5;
                                            document.getElementById("score6").innerHTML = highScore6;
                                            document.getElementById("naamScore6").innerHTML = naamScore6;
                                            document.getElementById("score7").innerHTML = highScore7;
                                            document.getElementById("naamScore7").innerHTML = naamScore7;
                                            document.getElementById("score8").innerHTML = highScore8;
                                            document.getElementById("naamScore8").innerHTML = naamScore8;
                                            document.getElementById("score9").innerHTML = highScore9;
                                            document.getElementById("naamScore9").innerHTML = naamScore9;
                                            document.getElementById("score10").innerHTML = highScore10;
                                            document.getElementById("naamScore10").innerHTML = naamScore10;
                                    }
                                }
                                else {
                                    //vierde
                                    highScore10 = highScore9; highScore9 = highScore8; highScore8 = highScore7; highScore7 = highScore6; highScore6 = highScore5; highScore5 = highScore4; highScore4 = score;
                                    naamScore10 = naamScore9; naamScore9 = naamScore8; naamScore8 = naamScore7; naamScore7 = naamScore6; naamScore6 = naamScore5; naamScore5 = naamScore4; naamScore4 = prompt("Proficiat, u hebt de vierde plaats behaald! Geef uw naam op:");
                                            document.getElementById("score4").innerHTML = highScore4;
                                            document.getElementById("naamScore4").innerHTML = naamScore4;
                                            document.getElementById("score5").innerHTML = highScore5;
                                            document.getElementById("naamScore5").innerHTML = naamScore5;
                                            document.getElementById("score6").innerHTML = highScore6;
                                            document.getElementById("naamScore6").innerHTML = naamScore6;
                                            document.getElementById("score7").innerHTML = highScore7;
                                            document.getElementById("naamScore7").innerHTML = naamScore7;
                                            document.getElementById("score8").innerHTML = highScore8;
                                            document.getElementById("naamScore8").innerHTML = naamScore8;
                                            document.getElementById("score9").innerHTML = highScore9;
                                            document.getElementById("naamScore9").innerHTML = naamScore9;
                                            document.getElementById("score10").innerHTML = highScore10;
                                            document.getElementById("naamScore10").innerHTML = naamScore10;
                                }
                            }
                            else {
                                //vijfde
                                highScore10 = highScore9; highScore9 = highScore8; highScore8 = highScore7; highScore7 = highScore6; highScore6 = highScore5; highScore5 = score;
                                naamScore10 = naamScore9; naamScore9 = naamScore8; naamScore8 = naamScore7; naamScore7 = naamScore6; naamScore6 = naamScore5; naamScore5 = prompt("Proficiat, u hebt de vijfde plaats behaald! Geef uw naam op:");
                                            document.getElementById("score5").innerHTML = highScore5;
                                            document.getElementById("naamScore5").innerHTML = naamScore5;
                                            document.getElementById("score6").innerHTML = highScore6;
                                            document.getElementById("naamScore6").innerHTML = naamScore6;
                                            document.getElementById("score7").innerHTML = highScore7;
                                            document.getElementById("naamScore7").innerHTML = naamScore7;
                                            document.getElementById("score8").innerHTML = highScore8;
                                            document.getElementById("naamScore8").innerHTML = naamScore8;
                                            document.getElementById("score9").innerHTML = highScore9;
                                            document.getElementById("naamScore9").innerHTML = naamScore9;
                                            document.getElementById("score10").innerHTML = highScore10;
                                            document.getElementById("naamScore10").innerHTML = naamScore10;
                            }
                        }
                        else {
                            //zesde
                            highScore10 = highScore9; highScore9 = highScore8; highScore8 = highScore7; highScore7 = highScore6; highScore6 = score;
                            naamScore10 = naamScore9; naamScore9 = naamScore8; naamScore8 = naamScore7; naamScore7 = naamScore6; naamScore6 = prompt("Proficiat, u hebt de zesde plaats behaald! Geef uw naam op:");
                                            document.getElementById("score6").innerHTML = highScore6;
                                            document.getElementById("naamScore6").innerHTML = naamScore6;
                                            document.getElementById("score7").innerHTML = highScore7;
                                            document.getElementById("naamScore7").innerHTML = naamScore7;
                                            document.getElementById("score8").innerHTML = highScore8;
                                            document.getElementById("naamScore8").innerHTML = naamScore8;
                                            document.getElementById("score9").innerHTML = highScore9;
                                            document.getElementById("naamScore9").innerHTML = naamScore9;
                                            document.getElementById("score10").innerHTML = highScore10;
                                            document.getElementById("naamScore10").innerHTML = naamScore10;
                        }
                    }
                    else {
                        //zevende
                        highScore10 = highScore9; highScore9 = highScore8; highScore8 = highScore7; highScore7 = score;                       
                        naamScore10 = naamScore9; naamScore9 = naamScore8; naamScore8 = naamScore7; naamScore7 = prompt("Proficiat, u hebt de zevende plaats behaald! Geef uw naam op:");
                                            document.getElementById("score7").innerHTML = highScore7;
                                            document.getElementById("naamScore7").innerHTML = naamScore7;
                                            document.getElementById("score8").innerHTML = highScore8;
                                            document.getElementById("naamScore8").innerHTML = naamScore8;
                                            document.getElementById("score9").innerHTML = highScore9;
                                            document.getElementById("naamScore9").innerHTML = naamScore9;
                                            document.getElementById("score10").innerHTML = highScore10;
                                            document.getElementById("naamScore10").innerHTML = naamScore10;
                    }
                }
                else {
                    //achtste
                    highScore10 = highScore9; highScore9 = highScore8; highScore8 = score;
                    naamScore10 = naamScore9; naamScore9 = naamScore8; naamScore8 = prompt("Proficiat, u hebt de achtste plaats behaald! Geef uw naam op:");
                                            document.getElementById("score8").innerHTML = highScore8;
                                            document.getElementById("naamScore8").innerHTML = naamScore8;
                                            document.getElementById("score9").innerHTML = highScore9;
                                            document.getElementById("naamScore9").innerHTML = naamScore9;
                                            document.getElementById("score10").innerHTML = highScore10;
                                            document.getElementById("naamScore10").innerHTML = naamScore10;
                }
            }
            else {
                //negende
                highScore10 = highScore9; highScore9 = score;
                naamScore10 = naamScore9; naamScore9 = prompt("Proficiat, u hebt de negende plaats behaald! Geef uw naam op:");
                                            document.getElementById("score9").innerHTML = highScore9;
                                            document.getElementById("naamScore9").innerHTML = naamScore9;
                                            document.getElementById("score10").innerHTML = highScore10;
                                            document.getElementById("naamScore10").innerHTML = naamScore10;
            }
            
        }
        else {
            //tiende
            highScore10 = score;
            naamScore10 = prompt("Proficiat, u hebt de tiende plaats behaald! Geef uw naam op:");
                                            document.getElementById("score10").innerHTML = highScore10;
                                            document.getElementById("naamScore10").innerHTML = naamScore10;
        }
        
        
    }
    else alert("Game saved. Geen highscore behaald.");      
}

