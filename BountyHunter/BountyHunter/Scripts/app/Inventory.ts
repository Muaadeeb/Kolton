/*let items = [["Item Name", "Item Desc", "Min Damage", "Max Damage"], ["Black Fire Bomb", "Firebomb charged with a special block. An uncouth gift for the departed.", 50, 100]];

let item = (itemName, itemDesc, minDam, maxDam) => {
    this.itemName = itemName;
    this.itemDesc = itemDesc;
    this.minDam = minDam;
    this.maxDam = maxDam;
}

let Inventory = (item) => {

}

let inventory = new Inventory(null);


let createInventory = () => {
    sessionStorage.setItem("Inventory", "");
    // code below is Temp Only.
    sessionStorage.setItem("Inventory", "1,2,3");


}

let addItem = (item) => {
    let testme = item;

    let inventory = sessionStorage.getItem("Inventory");
}
    //{ "1", "2", "3"}



    // count objects in inventory.
    // add new item to inventory if space allows (10 items only)
    // push changed intentory to storage or
    // send to many items in inventory message.

}
*/


let item = (itemName, itemDesc, minDam, maxDam) => {
    this.itemName = itemName;
    this.itemDesc = itemDesc;
    this.minDam = minDam;
    this.maxDam = maxDam;
}


let createInventory = () => {
    sessionStorage.setItem("Inventory", "temp")
}

let addInventoryItem = (newItem, description) => {
    let tempInventory = sessionStorage.getItem("Inventory")

    if (tempInventory !== "temp") {
        tempInventory = JSON.parse(sessionStorage.getItem("Inventory"))
    }

    if (tempInventory.length < 10) {
        let newInventory = new Array
        let newItemDescription = [newItem, description]
        newInventory.push(newItemDescription, tempInventory)
        if (tempInventory === "temp") {
            newInventory.pop()
        }
        sessionStorage.setItem("Inventory", JSON.stringify(newInventory))
    } else {
        alert("Your inventory is full!")
    }

}