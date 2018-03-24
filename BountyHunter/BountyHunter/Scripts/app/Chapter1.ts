/// <reference path="inventory.ts" />
window.onload = function () {

    let choice = sessionStorage.getItem("userPath");
    let choiceText;
    if (choice === "left") {
        choiceText = "You hear some rustling in the bushes near you. You hear some noises that sound like inhuman screams. You run faster. The noises are getting louder, and louder, and louder, and louder... And you've reached the end of the forest. You're safe, for now...";
    } else {
        choiceText = "You continue walking for awhile. Everything seems peaceful; the breeze is whistling through the forest, and everythig is peaceful. Just as you start to calm down, something huge and monsterous with 8 foot wings lands 10 feet in front of you...";
    }
    document.getElementById("d5p1").innerHTML = "You chose to take the " + choice + " path. " + choiceText;

    let getPath = (path) => {
        sessionStorage.setItem("userPath", path);
        window.location.href = "../Ch1/C1P1.html";
    }

    let getDecision5 = (item, description) => {
        addInventoryItem(item, description);
    }
}
