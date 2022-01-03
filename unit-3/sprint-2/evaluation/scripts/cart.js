let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
document.querySelector(".cartBar>div>h3").textContent = "Total : ";
totalVal();
displayDishes(cartItems);
function displayDishes(arr) {
  document.querySelector(".cards").innerHTML = "";
  arr.map(function (elem, ind) {
    let innerDiv = document.createElement("div");
    innerDiv.setAttribute("class", "card");
    let dishImg = document.createElement("img");
    dishImg.src = elem.strMealThumb;
    let heading = document.createElement("h3");
    heading.textContent = elem.strMeal;
    let innerDiv2 = document.createElement("div");
    let h3 = document.createElement("h3");
    h3.textContent = "Price : " + elem.price;
    let cartBtn = document.createElement("button");
    cartBtn.setAttribute("id", "cartBtn");
    cartBtn.textContent = "Remove From Cart";
    cartBtn.addEventListener("click", function () {
      deleteDish(ind);
    });
    innerDiv2.append(h3, cartBtn);
    innerDiv.append(dishImg, heading, innerDiv2);
    document.querySelector(".cards").append(innerDiv);
  });
}

function deleteDish(ind) {
  let arr = JSON.parse(localStorage.getItem("cartItems")) || [];
  arr.splice(ind, 1);
  localStorage.setItem("cartItems", JSON.stringify(arr));
  arr = JSON.parse(localStorage.getItem("cartItems"));
  totalVal();
  displayDishes(arr);
}

function totalVal() {
  let arr = JSON.parse(localStorage.getItem("cartItems"));
  let total;
  if (arr.length === 0) {
    total = 0;
  } else {
    total = arr
      .map(function (elem) {
        return Number(elem.price);
      })
      .reduce(function (ac, cv) {
        return ac + cv;
      });
  }
  document.querySelector(".cartBar>div>h3").textContent = "Total : " + total;
  return total;
}
totalVal();

function checkout() {
  let val = totalVal();
  if (val == 0) {
    alert("Add items in a cart to checkout!!!");
  } else {
    window.location.href = "checkout.html";
  }
}
