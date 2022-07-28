const getFood = () => ["berry", "cauliflower"];
const [fruit, veggie, junkFood = "pizza"] = getFood();
console.log(fruit); // berry
console.log(veggie); // cauliflower
console.log(junkFood);
