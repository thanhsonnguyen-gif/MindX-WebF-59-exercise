const creatures = {
  animals: {
    wildlife: ["lobster", "snake"],
    pet: ["dog", "cat"],
  },
  human: ["men", "women", "children"],
};
const {
  animals: { wildlife },
} = creatures;
console.log(wildlife);
