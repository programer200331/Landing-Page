const dishes = [
  {
    name: "Pizza",
    category: "Fast Meals",
    image: "assets/img/pizza.jpg",
    price: "5",
    ingredients: "Tomato,Carots,Fluer",
  },
  {
    name: "Pasta",
    category: "Fast Meals",
    image: "assets/img/pasta.jpg",
    price: "15",
    ingredients: "Tomato,Carots,Fluer",
  },
  {
    name: "Burger",
    category: "Fast Meals",
    image: "assets/img/burger.jpg",
    price: "5",
    ingredients: "Tomato,Carots,Fluer",
  },
];

// console.log("I am not in add new dish function");
function addNewDish() {
  // Get a reference to the form element
  const formData = document.getElementById("form-data");

  // Add an event listener to the form's submit event
  // formData.addEventListener("submit", function (event) {
  //   // Prevent the default form submission
  //   event.preventDefault();

  // Get form input values
  const name = document.getElementById("name").value;
  const category = document.getElementById("category").value;
  const image = document.getElementById("image").value;
  const price = document.getElementById("price").value;
  const ingredients = document.getElementById("ingredients").value;

  if (
    name.trim() !== "" &&
    category.trim() !== "" &&
    image.trim() !== "" &&
    price.trim() !== "" &&
    ingredients.trim() !== ""
  ) {
    // Create a new dish object
    const newDish = {
      name: name,
      category: category,
      image: image,
      price: price,
      ingredients: ingredients,
    };

    // Add the new dish to the dishes array
    dishes.push(newDish);

    console.log(dishes);

    // Clear the form inputs
    document.getElementById("name").value = "";
    document.getElementById("category").value = "";
    document.getElementById("image").value = "";
    document.getElementById("price").value = "";
    document.getElementById("ingredients").value = "";

    // Close the modal (you can use Bootstrap's modal close method)
    $("#addDishModal").modal("hide");
    // formData.submit();
  } else {
    alert("Enter requeired data :)");
  }
  // });
  // Update the displayed menu
  displayAllMenuItems();
}

// Attach the event listener to the form's submit event
const addDishForm = document.querySelector("form");
addDishForm.addEventListener("submit", addNewDish);

// Display all menu items initially
function displayAllMenuItems() {
  const menuContainer = document.getElementById("wrapper-grid");
  menuContainer.innerHTML = "";

  dishes.forEach((dish) => {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
    menuItem.innerHTML = `
        <img class="menu-item-image" src="${dish.image}" alt="${dish.name}" />
        <div class="menu-item-text">
            <h3 class="menu-item-heading">
                <span class="menu-item-name">${dish.name}</span>
                <span class="menu-item-category">${dish.category}</span>
                <span class="menu-item-price">${dish.price}</span>
            </h3>
            <p class="menu-item-ingredients">${dish.ingredients}</p>
        </div>
    `;

    menuContainer.appendChild(menuItem);
  });
}
