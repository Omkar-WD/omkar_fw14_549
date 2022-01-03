function myForm(event) {
  event.preventDefault();
  alert("Your order is accepted");
  console.log("Your order is accepted");
  setTimeout(function () {
    alert("Your order is being cooked");
    console.log("Your order is being cooked");
    setTimeout(function () {
      alert("Your order is ready");
      console.log("Your order is ready");
      setTimeout(function () {
        alert("Order out for delivery");
        console.log("Order out for delivery");
        setTimeout(function () {
          alert("Order delivered");
          console.log("Order delivered");
          let arr = [];
          localStorage.setItem("cartItems", JSON.stringify(arr));
          window.location.href = "menu.html";
        }, 12000);
      }, 10000);
    }, 8000);
  }, 3000);
}

function goBack() {
  window.location.href = "cart.html";
}
