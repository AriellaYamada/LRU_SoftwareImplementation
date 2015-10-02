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



