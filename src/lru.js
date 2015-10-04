//Defining variables
var nest;
var chickens;



function initializingVariables() {
    nest = new Array(6);
    for (var i = 0; i < 6; i++) {
        nest[i] = {
            bitR: 0,
            chicken: 0,
            access: [0, 0, 0, 0, 0, 0]
        };
    }
    chickens = ["galinha1.png", "galinha3.png", "galinha3.png", "galinha4.png", "galinha5.png", "galinha6.png"];
}

function accessingNest(nNest) {
    console.log(nNest);
    nest[nNest].bitR = 1;
}

function interruption() {
    for (var i = 0; i < 6; i++) {
        nest[i].chicken += Number(bitR);
        nest[i].access.pop();
        nest[i].access.unshift(nest[i].access);
        if(nest[i].bitR == 1) {

        }
    }
}

function changeNest() {
    function getLeastAccesses() {
        var leastAccessed, nAccess = 0;
        for (var i = 0; i < 6; i++) {
            for (var j = 0; j < 6; j++) {
                if (nest[j].access < nAccess) {
                    leastAccessed = j;
                    nAccess = nest[j].access;
                }
            }
        }
        return leastAccessed;
    };

    var newNest = {
        bitR: 0,
        chicken: 0,
        access: [0, 0, 0, 0, 0, 0]
    }
    nest[getLeastAccesses()] = newNest;
}





