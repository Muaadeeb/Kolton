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
    // initialize the inventory.
    //let inventoryItem = { item: '', description: '' };
    let inventoryItem = [ { item: '1', description: '1_1' }, {item: '2', description: '2_2'}];
    sessionStorage.setItem("Inventory", JSON.stringify(inventoryItem));
}

let addInventoryItem = (item, description) => {
    let inventory = JSON.parse(sessionStorage.getItem("Inventory"));

    if (inventory.length < 10) {
        let newInventory = new Array;
        let newItem = [item, description];
        newInventory.push(newItem, inventory);
        if (inventory === "temp") {
            newInventory.pop();
        }
        sessionStorage.setItem("Inventory", JSON.stringify(newInventory));
    } else {
        alert("Your inventory is full!");
    }

}