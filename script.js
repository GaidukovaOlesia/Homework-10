// debugger;

let season = prompt("Please, enter season: winter or summer");

while (!(season === "winter" || season === "summer")) {
    if(season === null){
        alert("Enter season: winter or summer");
    }
    season = prompt("Please, enter season: winter or summer").toLowerCase().replaceAll(" ","");
}
// console.log(season);

let category = prompt("Please, choose category in which you want to buy products: vegetables or fruits!").toLowerCase().replaceAll(" ","");
while (!(category === "vegetables" || category === "fruits")) {
    alert("Enter category: vegetables or fruits");
    category = prompt("Please, choose category in which you want to buy products: vegetables or fruits!").toLowerCase().replaceAll(" ","");
}
// console.log(category);

let product;
if(category === "vegetables") {
    product = prompt("Choose product from category vegetables: cabbage, avocado or tomato").toLowerCase().replaceAll(" ","");
    while(!(product === "cabbage" || product === "avocado" || product ==="tomato")) {
        alert("Enter product: cabbage, avocado or tomato");
        product = prompt("Choose product from category vegetables: cabbage, avocado or tomato").toLowerCase().replaceAll(" ","");
    }
} else if(category === "fruits") {
    product = prompt("Choose product from category fruits: grapes, raspberry or coconut").toLowerCase().replaceAll(" ","");
    while(!(product === "grapes" || product === "raspberry" || product === "coconut")) {
        alert("Enter product: grapes, raspberry or coconut");
        product = prompt("Choose product from category fruits: grapes, raspberry or coconut").toLowerCase().replaceAll(" ","");
    }
}

let count = parseInt(prompt(`Enter count of ${product}`));
while (count <= 0) {
    alert("Enter value > 0")
    count = parseInt(prompt(`Enter count of ${product}`));
}

let finalSum

switch (product) {
    case "cabbage":
        finalSum = 8 * count;
        break;
    case "avocado":
        finalSum = 30 * count;
        break;
    case "tomato":
        finalSum = 10 * count;
        break;
    case "grapes":
        finalSum = 20 * count;
        break;
    case "raspberry":
        finalSum = 25 * count;
        break;
    case "coconut":
        finalSum = 50 * count;
}

if(season === "winter") {
    finalSum *= 2;
} else if(season === "summer") {
    finalSum *= 0.8;
}
// alert(`Final Sum is ${finalSum}`);
document.write(`
<div class="product">
  <img src="images/${product}.svg" alt="photo" width="100" height="100">
  <p>Selected product: <b>${product}</b></p>
  <p>Count of ${product}: <b>${count}</b></p>
  <p>Selected period: <b>${season}</b></p>
  <p>Selected category: <b>${category}</b></p>
  <p>Final sum: <b>${finalSum}</b></p>
</div>
`)