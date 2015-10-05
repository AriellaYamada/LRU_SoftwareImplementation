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
    chickens = ["images/Galinha1.png", "images/Galinha3.png", "images/Galinha3.png",
        "images/Galinha4.png", "imagesGalinha5.png", "galinha6.png", "imagesGalinha7.png",
        "imagesGalinha8.png", "imagesGalinha9.png", "imagesGalinha10.png", "imagesGalinha11.png",
        "imagesGalinha12.png", "imagesGalinha12.png", "imagesGalinha13.png", "imagesGalinha14.png",
        "imagesGalinha15.png", "imagesGalinha16.png"];
    //interval = setInterval(interruption(), 300);
    updateScenario();
}

function accessingNest(nNest) {
    nest[nNest].bitR = 1;
    var feeder = "feeder" + nNest;
    document.getElementById(feeder).src = "images/bit1.png";
}

function updateScenario() {
    for(var i = 0; i < 6; i++) {
        var n = "nest" + i;
        var f = "feeder" + i;
        document.getElementById(f).src = "images/bit0.png";
        document.getElementById(n).src = chickens[nest[i].chicken];
        for (var j = 0; j < 4; j++) {
            var image = "images/access" + nest[i].access[j] + ".png";
            var bit = "c" + i + "access" + j;
            console.log("\nteste3 acesso: " + bit + " imagem: "+ image);
            document.getElementById(bit).src = image;
        }
    }
    console.log("teste4");
}

function interruption() {
    for (var i = 0; i < 6; i++) {
        nest[i].access.pop();
        nest[i].access.unshift(nest[i].bitR);
        nest[i].chicken += getAccess(i);
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





