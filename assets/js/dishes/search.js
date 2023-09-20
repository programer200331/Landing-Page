// Handle search when the user clicks the search button or presses Enter
document.getElementById("search-button").addEventListener("click", searchMenu);
document
  .getElementById("search-input")
  .addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      searchMenu();
    }
  });

function searchMenu() {
  const searchTerm = document
    .getElementById("search-input")
    .value.toLowerCase();
  const menuItems = document.querySelectorAll(".menu-item");

  menuItems.forEach((item) => {
    const itemName = item
      .querySelector(".menu-item-name")
      .textContent.toLowerCase();
    const itemPrice = item
      .querySelector(".menu-item-price")
      .textContent.toLowerCase();
    const itemDescription = item
      .querySelector(".menu-item-ingredients")
      .textContent.toLowerCase();

    if (
      itemName.includes(searchTerm) ||
      itemDescription.includes(searchTerm) ||
      itemPrice.includes(searchTerm)
    ) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

// Initially display all menu items
displayAllMenuItems();
