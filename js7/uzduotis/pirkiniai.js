// Sukurkime WEB aplikaciją kuri būtų skirta išsisaugoti pirkinių sąrašą(tokį kokį susidarome prieš išeidami į parduotuvę).Įvedimo formoje turėtų būti įvedimo laukai: prekė, kiekis ir mygtukas pridėti.Kiekviena prekė turėtų būti pridedama į masyvą, o masyvas atvaizduojamas puslapyje.

// Patobulinkime aplikaciją taip, kad prekių sąrašas būtų išsaugomas į localstorage, o užsikraunant aplikacijai išsaugotas(jei toks egzistuoja) sąrašas būtų užkraunamas iš localstorage.

// Aplikacijoje padarykite mygtuką visų prekių ištrynimui, taip pat padarykite prie kiekvienos prekės mygtuką "ištrinti" kurį paspaudus būtų panaikinama tik ta prekė.

const itemInput = document.getElementById("item-input");
const amountInput = document.getElementById("amount-input");
const addBtn = document.getElementById("add-btn");
const clearListBtn = document.getElementById("clear-list");
const itemList = document.getElementById("item-list");

let items = [];

const saveItems = () => {
    localStorage.setItem("items", JSON.stringify(items));
}

const loadItems = () => {
    const lsItems = localStorage.getItem("items");

    if (lsItems != null) {
        items = JSON.parse(lsItems);
        showItems();
    }
}

const showItems = () => {
    itemList.innerHTML = "";

    items.forEach((item, index) => {
        const newItem = document.createElement("li");
        const removeButton = document.createElement("button");
        removeButton.className = "remove-button";
        removeButton.textContent = "Ištrinti";
        // removeButton.id = index;
        newItem.className = "list-group-item d-flex justify-content-between align-items-center";
        newItem.textContent = `${item.name} (${item.amount})`;
        itemList.appendChild(newItem);
        newItem.appendChild(removeButton)
        removeButton.onclick = () => {
            console.log(removeButton.id);
            items.splice(index, 1);
            showItems();
            saveItems();
        };
    });
};

const addItem = () => {
    const item = itemInput.value;
    const amount = amountInput.value;

    if (item != "" && amount != "") {
        items.push({
            name: item,
            amount: amount,
        });
        itemInput.value = "";
        amountInput.value = "";
        showItems();
        saveItems();
    }
};

const clearList = () => {
    items = [];
    localStorage.removeItem("items");
    showItems();
}

loadItems();

addBtn.onclick = addItem;
clearListBtn.onclick = clearList;



