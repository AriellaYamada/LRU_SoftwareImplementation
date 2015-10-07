//Defining variables
var nest;
var chickens;
var interval;

document.addEventListener("DOMContentLoaded", teste());
//document.addEventListener("DOMContentLoaded", setInterval(interruption(), 3000));
function initializingVariables() {
    nest = new Array(6);
    for (var i = 0; i < 6; i++) {
        nest[i] = {
            bitR: 0,
            chicken: 0,
            access: [0, 0, 0, 0],
            auxAccess: ""
        };
    }
    chickens = ["img/Galinha0.png", "img/Galinha1.png", "img/Galinha2.png", "img/Galinha3.png",
        "img/Galinha4.png", "img/Galinha5.png", "img/Galinha6.png", "img/Galinha7.png",
        "img/Galinha8.png", "img/Galinha9.png", "img/Galinha10.png", "img/Galinha11.png",
        "img/Galinha12.png", "img/Galinha13.png", "img/Galinha14.png", "img/Galinha15.png"];
    //interval = setInterval(interruption(), 300);
    updateScenario();
}

function accessingNest(nNest) {
    nest[nNest].bitR = 1;
    var feeder = "feeder" + nNest;
    document.getElementById(feeder).src = "img/bit1.png";
}

function updateScenario() {
    for(var i = 0; i < 6; i++) {
        var n = "nest" + i;
        var f = "feeder" + i;
        document.getElementById(f).src = "img/bit0.png";
        document.getElementById(n).src = chickens[nest[i].chicken];
        for (var j = 0; j < 4; j++) {
            var bit = "c" + i + "access" + j;
            var image = "img/access" + nest[i].access[j] + ".png";
            document.getElementById(bit).src = image;
        }
    }
}

function interruption() {
    for (var i = 0; i < 6; i++) {
        nest[i].access.pop();
        nest[i].access.unshift(nest[i].bitR);
        nest[i].chicken = getAccess(i);
        if (nest[i].bitR == 0) {
            if(nest[i].chicken > 0)
                nest[i].chicken--;
        } else if(nest[i].chicken < 10) {
            nest[i].chicken++;
        }
        nest[i].bitR = 0;
    }
    updateScenario();
}

function getAccess(nNest) {
    nest[nNest].auxAccess = 0;
    for(var i = 0; i < 4; i++) {
        nest[nNest].auxAccess *= 2;
        nest[nNest].auxAccess += nest[nNest].access[i];
    }
    return nest[nNest].auxAccess;
}
function getLeastAccesses() {
    var leastAccessed = 0, nAccess = getAccess(0);
    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 6; j++) {
            var access = getAccess(j);
            if (access < nAccess) {
                leastAccessed = j;
                nAccess = access;
            }
        }
    }
    return leastAccessed;
}

function changeNest() {
    var newNest = {
        bitR: 0,
        chicken: 0,
        access: [0, 0, 0, 0]
    }
    var aux = getLeastAccesses();
    nest[aux] = newNest;
    interruption();
}

function pauseSimulation(){
    interval.stop();
}

function start(){
    initializingVariables();
    document.getElementById("start-pause").className = 'btn btn-warning btn-md';
    document.getElementById("start-pause").innerHTML = 'Pausar';
    document.getElementById("start-pause").onclick = pauseSimulation();
    document.getElementById('scenario').style.display = 'block';
}

function teste(){
    document.getElementById('interruption').style.display = 'none';
}




