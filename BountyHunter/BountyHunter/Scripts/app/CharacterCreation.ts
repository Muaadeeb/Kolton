﻿/// <reference path="inventory.ts" />

let getName = function () {
    let name = document.getElementById("username")["value"];
    if (name.length > 0) {
        sessionStorage.setItem("userName", document.getElementById("username")["value"]);
        window.location.href = "Decision2.html";
    } else {
        alert("Please insert a name");
    }
}

let getClass = function (charClass) {
    sessionStorage.setItem("userClass", charClass);
    switch (charClass) {
        case "knight":
            sessionStorage.setItem("userHP", "682");
            break;
        case "sorcerer":
            sessionStorage.setItem("userHP", "511");
            break;
        case "pyromancer":
            sessionStorage.setItem("userHP", "530");
            break;
        case "deprived":
            sessionStorage.setItem("userHP", "572");
            break;
    }
    window.location.href = "Decision3.html";
}

let getBurialGift = function (userGift, description) {
    if (userGift === "life ring") {
        let currHp = JSON.parse(sessionStorage.getItem("userHP"));
        let intHp = parseInt(currHp);
        intHp += 100;
        currHp = intHp.toString();
        sessionStorage.setItem("userHP", currHp);
    }
    createInventory()
    addInventoryItem(userGift, description)


    window.location.href = "Decision4.html";
}