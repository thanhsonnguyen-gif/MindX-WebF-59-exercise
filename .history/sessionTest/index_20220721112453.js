const name = "pa st";
const getRandomIndex = max =>  Math.floor(Math.random() * Math.floor(max))
const food = ["fish", "sandwich", "hamburger", "pizza", "cakes"];
const getFood = index => food[index]
console.log(`Hello, my name is ${name} 
and I'm hungry for ${getFood(getRandomIndex(food.length))}`);