let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
document.querySelector(".cartBar>h3").textContent =
  "Cart Items : " + cartItems.length;
async function showDishes() {
  try {
    let res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?s=chicken"
    );
    let data = await res.json();
    console.log(data);
    displayDishes(data);
  } catch (err) {
    console.log(err);
  }
}
showDishes();

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function displayDishes(arr) {
  let dishes = ``;
  arr.meals.map(function (elem, ind) {
    let price = getRandomInt(100, 500);
    let innerDiv = document.createElement("div");
    innerDiv.setAttribute("class", "card");
    let dishImg = document.createElement("img");
    dishImg.src = elem.strMealThumb;
    let heading = document.createElement("h3");
    heading.textContent = elem.strMeal;
    let innerDiv2 = document.createElement("div");
    let h3 = document.createElement("h3");
    h3.textContent = "Price : " + price;
    let cartBtn = document.createElement("button");
    cartBtn.setAttribute("id", "cartBtn");
    cartBtn.textContent = "Add to Cart";
    cartBtn.addEventListener("click", function () {
      elem.price = price;
      cartItems.push(elem);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      document.querySelector(".cartBar>h3").textContent =
        "Cart Items : " + cartItems.length;
    });
    innerDiv2.append(h3, cartBtn);
    innerDiv.append(dishImg, heading, innerDiv2);
    document.querySelector(".cards").append(innerDiv);
  });
}
