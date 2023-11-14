const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

document.getElementById(
  "greeting"
).innerText = `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`;

function handleOrder() {
  // let orderName = prompt("Enter the name of the pizza you want to order today.");
  let orderName = document.getElementById("pizzaType").value;

  if (checkOrderName(orderName)) {
    // let orderQuantity = prompt(`How many of ${orderName} do you want?`);
    let orderQuantity = document.getElementById("pizzaQuantity").value;

    if (orderQuantity > 0) {
      let orderTotal = totalCost(orderQuantity);

      let orderTime = cookingTime(orderQuantity);

      // alert(
      //   `Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The pizzas will take ${orderTime} minutes.`
      // );
      document.getElementById(
        "result"
      ).innerText = `Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The pizzas will take ${orderTime} minutes.`;
    } else {
      document.getElementById("result").innerText =
        "The number of pizzas must be a number greater than zero";
    }
  } else {
    // alert("No such pizza");
    document.getElementById("result").innerText = "No such pizza";
  }
}

function checkOrderName(orderName) {
  return (
    orderName.toUpperCase() == vegetarian.toUpperCase() ||
    orderName.toUpperCase() == hawaiian.toUpperCase() ||
    orderName.toUpperCase() == pepperoni.toUpperCase()
  );
}

function totalCost(orderQuantity) {
  return orderQuantity * pizzaPrice;
}

function cookingTime(orderQuantity) {
  if (orderQuantity >= 1 && orderQuantity <= 2) {
    return 10;
  } else if (orderQuantity >= 3 && orderQuantity <= 5) {
    return 15;
  } else if (orderQuantity >= 6) {
    return 20;
  }
}
