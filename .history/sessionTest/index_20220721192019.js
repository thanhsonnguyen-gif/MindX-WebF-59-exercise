const food = {
  breakfast: ["sandwich", "egg"],
  lunch: ["hamburger", "French fries", "pizza"],
};
const foodAndDrinks = {
  ...food,
  drinks: ["🍷", "🍹", "🍺", "🥃"],
};

console.log(foodAndDrinks);
