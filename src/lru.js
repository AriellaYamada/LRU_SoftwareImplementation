//Defining variables
var nest;
var chickens;
var interval;

document.onload(initializingVariables());
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
    chickens = ["galinha1.png", "galinha3.png", "galinha3.png", "galinha4.png", "galinha5.png", "galinha6.png"];
    interval = setInterval(interruption(), 300);
}

function accessingNest(nNest) {
    nest[nNest].bitR = 1;
    var feeder = "feeder" + nNest;
    document.getElementById(feeder).src = "images/bit1.png";
}


function interruption() {
    console.log("interruption");
    for (var i = 0; i < 6; i++) {
        nest[i].chicken += Number(nest[i].bitR);
        nest[i].access.pop();
        nest[i].access.unshift(nest[i].bitR);
        console.log(nest[i].access[3]);
    }
    console.log("finish");
}

function getAccess(nNest) {
    for(var i = 0; i < 4; i++)
        nest[nNest].auxAccess += nest[nNest].access[i];
    return nest[nNest].auxAccess;
}

function changeNest() {
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





