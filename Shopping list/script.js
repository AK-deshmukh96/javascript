const addButton = document.getElementById("addItemButton");

const addItem = (inputValue) => {
  if (inputValue.trim() !== "") {
    const newItem = document.createElement("div");
    newItem.classList.add("groceryItem");

    // created span element for text
    const itemtext = document.createElement("span");
    itemtext.classList.add("itemText");
    itemtext.innerText = inputValue;
    newItem.appendChild(itemtext);

    // create delete element for delete button
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.classList.add("deleteButton");
    deleteButton.addEventListener("click", function () {
      newItem.remove();
    });
    newItem.appendChild(deleteButton);

    document.getElementById("groceryList").appendChild(newItem);
    document.getElementById("addItemInput").value = "";
  } else {
    alert("Please enter an item.");
  }
};

const isItemExist = (listItems, value) => {
  let isItemExist = false;
  listItems.forEach((item) => {
    const itemTextContent = item.querySelector(".itemText").innerText;

    if (itemTextContent.toLowerCase() === value.toLowerCase()) {
      isItemExist = true;
    }
  });

  return isItemExist;
};

addButton.addEventListener("click", function () {
  const inputValue = document.getElementById("addItemInput").value;
  const groceryListItems = document.querySelectorAll(".groceryItem");

  if (isItemExist(groceryListItems, inputValue)) {
    alert("Item already exists");
  } else {
    addItem(inputValue);
  }
});
