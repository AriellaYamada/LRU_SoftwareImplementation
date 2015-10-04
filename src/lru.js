//Defining variables
var nest;
var chickens;
var interval;

document.addEventListener("DOMContentLoaded", initializingVariables());
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
    chickens = ["images/Galinha1.png", "images/Galinha3.png", "images/Galinha3.png", "images/Galinha4.png", "galinha5.png", "galinha6.png"];
    //interval = setInterval(interruption(), 300);
}

function accessingNest(nNest) {
    nest[nNest].bitR = 1;
    console.log(nest[nNest].bitR);
    var feeder = "feeder" + nNest;
    document.getElementById(feeder).src = "images/bit1.png";
}

function updateScenario() {
    for(var i = 0; i < 6; i++) {
        var n = "nest" + i;
        var f = "feeder" + i;
        document.getElementById(f).src = "images/bit0.png";
        console.log("imagem: " + nest[i].chicken);
        document.getElementById(n).src = chickens[nest[i].chicken];
    }
}

function interruption() {
    console.log("interruption");
    for (var i = 0; i < 6; i++) {
        nest[i].access.pop();
        nest[i].access.unshift(nest[i].bitR);
        nest[i].chicken += nest[i].bitR;
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
    for(var i = 0; i < 4; i++)
        nest[nNest].auxAccess += nest[nNest].access[i];
    return nest[nNest].auxAccess;
}

function changeNest() {
    interruption();
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
    };

    var newNest = {
        bitR: 0,
        chicken: 0,
        access: [0, 0, 0, 0]
    }
    var aux = getLeastAccesses();
    nest[aux] = newNest;
}





