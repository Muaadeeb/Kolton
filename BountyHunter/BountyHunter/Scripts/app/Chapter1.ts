/// <reference path="inventory.ts" />

let getPath = function (path) {
    sessionStorage.setItem("userPath", path);
    window.location.href = "Decision5.html";
}

let getDecision5 = function (item, description) {
    addInventoryItem(item, description);
}