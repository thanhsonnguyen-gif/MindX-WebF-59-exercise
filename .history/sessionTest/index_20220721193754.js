const cleanFoodIncluded = (...food) =>
  food.findIndex((f) => f === "cauliflower") !== -1;
console.log(cleanFoodIncluded("pizza", "sandwich", "cake", "hamburger")); // true
