//alert("Welkom");
function setup(){
    veranderingen();
    startTime();
}

//datum                                     
var today = new Date();

var maanden = new Array('januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december');
document.getElementById('datum').innerHTML = today.getDate() + ' ' + maanden[today.getMonth()];



//klok
function startTime(){
    var today =new Date();
    var h =today.getHours();
    var m =today.getMinutes();
    var s =today.getSeconds();
    
    m =checkTime(m);
    s =checkTime(s);
    document.getElementById('clock').innerHTML = 
        h + ":" + m + ":" + s;
    
    var t =setTimeout(startTime, 500);
}

function checkTime(i){
    if(i<10) {i = "0" + i};
    return i;
}



function veranderingen(){
    var d = new Date();
    var uren = d.getHours();
    var text;
    var dom = document.getElementById('grid-container');
//    uren = 0;                                                          //om aan tepassen tijdens het maken
    
    if (uren >= 18){
        text = "Lekker ontspannen avondje!";
        document.body.style.background = "linear-gradient(#00005C, #FFD54F)";
        document.getElementById('plaatje').src = "afbeeldingen/radio.png";              
        document.getElementById('plaatje').className = "radio";
        document.getElementById('zon').src = "afbeeldingen/zonsondergang.png";   
             
    }

    else if (uren >= 12){
        text = "Heb een leuke middag!";
        document.body.style.background = "linear-gradient(#59A1FF, #FFFFFF)";
        document.getElementById('plaatje').src = "afbeeldingen/astronaut.png";
        document.getElementById('plaatje').className = "astronaut";
        document.getElementById('zon').src = "afbeeldingen/zon.png";   
    }

    else if (uren >= 6){
        text = "Ochtend, tijd om op te staan!";
        document.body.style.background = "linear-gradient(#59A1FF, #FFE373)";
        document.getElementById('plaatje').src = "afbeeldingen/wekker.png";
        document.getElementById('plaatje').className = "wekker";
        document.getElementById('zon').src = "afbeeldingen/zon.png";  
    }

    else{
        text = "Tijd om lekker te slapen!";
        document.body.style.background = "#000000";
        document.getElementById('plaatje').src = "afbeeldingen/sterren.png";                         
        document.getElementById('plaatje').className = "sterren";
        document.getElementById('zon').src = "afbeeldingen/maan.png";  
    }


    document.getElementById("tekst").innerHTML = text;
}