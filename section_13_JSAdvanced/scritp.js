let obj = {
  username: "Rony",
  type: "Human",
  ability: {
    air: 100,
    earth: 200,
  },
};
let makingSuperCopy = JSON.parse(JSON.stringify(obj)); // making copy of reference (obj) in deep level
makingSuperCopy.ability.air = 150;

console.log(obj.ability);
console.log(makingSuperCopy.ability);
