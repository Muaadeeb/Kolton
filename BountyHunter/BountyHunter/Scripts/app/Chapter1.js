/// <reference path="inventory.ts" />
var getPath = function (path) {
    sessionStorage.setItem("userPath", path);
    window.location.href = "Decision5.html";
};
var getDecision5 = function (item, description) {
    addInventoryItem(item, description);
};
//# sourceMappingURL=Chapter1.js.map