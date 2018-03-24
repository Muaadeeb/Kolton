/*let items = [["Item Name", "Item Desc", "Min Damage", "Max Damage"], ["Black Fire Bomb", "Firebomb charged with a special block. An uncouth gift for the departed.", 50, 100]];

*/


let inventoryItem = (itemName, itemDesc, minDam, maxDam) => {
    this.itemName = itemName;
    this.itemDesc = itemDesc;
    this.minDam = minDam;
    this.maxDam = maxDam;
}


let addInventoryItem = (item, description) => {
    let inventory;
    if (sessionStorage.getItem("Inventory") !== null) {
        inventory = JSON.parse(sessionStorage.getItem("Inventory"));

						
        if (inventory.length < 10) {
            let newItem = [item, description];
            inventory.push(newItem);
        } else {
            alert("Your inventory is full!");
        }
    } else {
        let newInventory = new Array;
        let newItem = [item, description];
        newInventory.push(newItem);
        sessionStorage.setItem("Inventory", JSON.stringify(newInventory));
    }
	sessionStorage.setItem("Inventory", JSON.stringify(inventory));
}

