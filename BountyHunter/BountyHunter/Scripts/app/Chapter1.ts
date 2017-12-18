/// <reference path="inventory.ts" />

let getPath = path => {
    sessionStorage.setItem("userPath", path);
    window.location.href = "Decision5.html";
}

let getDecision5 = (item, description) => {
    addInventoryItem(item, description);
}