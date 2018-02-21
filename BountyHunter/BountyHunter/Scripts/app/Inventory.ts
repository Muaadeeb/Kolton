/*let items = [["Item Name", "Item Desc", "Min Damage", "Max Damage"], ["Black Fire Bomb", "Firebomb charged with a special block. An uncouth gift for the departed.", 50, 100]];

*/


let inventoryItem = (itemName, itemDesc, minDam, maxDam) => {
    this.itemName = itemName;
    this.itemDesc = itemDesc;
    this.minDam = minDam;
    this.maxDam = maxDam;
}


let addInventoryItem = (item, description) => {
    if (sessionStorage.getItem("Inventory") !== null) {
        let inventory = sessionStorage.getItem("Inventory");

        if (inventory.length < 10) {
            let newInventory = new Array;
            let newItem = [item, description];
            newInventory.push(newItem, inventory);
        } else {
            alert("Your inventory is full!");
        }
    } else {
        let newInventory = new Array;
        let newItem = [item, description];
        newInventory.push(newItem);
        sessionStorage.setItem("Inventory", JSON.stringify(newInventory));
    }
}