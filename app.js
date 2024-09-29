let openShopping = document.querySelector(".shopping");
let closeShopping = document.querySelector(".closeShopping");
let list = document.querySelector(".list");
let listcard = document.querySelector(".listCard");
let body = document.querySelector("body");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");

openShopping.addEventListener("click", () => {
  body.classList.toggle("active");
});

closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
});

let products = [
  {
    id: 1,
    name: "PRODUCT NAME 1",
    image: "./images/Product1.jpeg",
    price: 120,
  },
  {
    id: 2,
    name: "PRODUCT NAME 2",
    image: "./images/Product3.jpeg",
    price: 200,
  },
  {
    id: 3,
    name: "PRODUCT NAME 3",
    image: "./images/Product3.jpeg",
    price: 200,
  },
  {
    id: 4,
    name: "PRODUCT NAME 4",
    image: "./images/Product4.jpeg",
    price: 100,
  },
  {
    id: 5,
    name: "PRODUCT NAME 5",
    image: "./images/Product5.jpeg",
    price: 100,
  },
  {
    id: 6,
    name: "PRODUCT NAME 6",
    image: "./images/Product6.jpeg",
    price: 100,
  },

  {
    id: 7,
    name: "PRODUCT NAME 7",
    image:
      "https://www.inspiredtaste.net/wp-content/uploads/2017/10/Roasted-Chicken-with-Lemon-Recipe-1-1200.jpg",
    price: 120,
  },
];

let listCard = [];

function initApp() {
  products.forEach((item, index) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.innerHTML = `
        <img src="${item.image}" alt=""/>
        <div class="title">${item.name}</div>
        <div class="price">${item.price.toLocaleString()}</div>
        <button onclick="addToCard(${index})">Add To Card</button>
    `;
    list.appendChild(newDiv);
  });
}
initApp();

function addToCard(key) {
  if (listCard[key] == null) {
    listCard[key] = { ...products[key], quantity: 1 };
  } else {
    listCard[key].quantity += 1;
  }
  reloadCard();
}

function reloadCard() {
  listcard.innerHTML = "";
  let count = 0;
  let totalPrice = 0;
  listCard.forEach((value, key) => {
    if (value != null) {
      totalPrice += value.price * value.quantity;
      count += value.quantity;

      let newLi = document.createElement("li");
      newLi.innerHTML = `
        <div class=""><img src="${value.image}" alt="#"/></div>
        <div>${value.name}</div>
        <div>${value.price.toLocaleString()}</div>
       
      <div >
      <button onclick="changeQuantity(${key},${value.quantity - 1})">-</button>
      <div class="count">${value.quantity}</div>
        </div>
          <button onclick="changeQuantity(${key},${
        value.quantity + 1
      })">+</button>
      </div>
      `;
      listcard.appendChild(newLi);
    }
  });
  total.innerHTML = "$" + totalPrice.toLocaleString();
  quantity.innerHTML = count;
}

function changeQuantity(key, quantity) {
  if (quantity === 0) {
    delete listCard[key];
  } else {
    listCard[key].quantity = quantity; // Assign the updated quantity
  }
  reloadCard(); // Call reloadCard to update the UI
}
