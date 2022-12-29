// Exercise 1: what do you think the MIN_SAFE_INTEGER is?
console.log(Number.MAX_SAFE_INTEGER); //9007199254740991
console.log(Number.MIN_SAFE_INTEGER); //-9007199254740991

// Exercise 2: why does this throw an error? How can you fix it?
let result = 3n + 4n + 1n;
console.log(typeof result, ":", result);

// Exercise 3: Clean up this code using optional chaining
let will_pokemon = {
  pikachu: {
    species: "Mouse Pokemon",
    height: 0.4,
    weight: 6,
    power: "lightning",
    friend: {
      charizard: {
        species: "Dragon Pokemon",
        height: 1.7,
        weight: 90.5,
        power: "fire",
      },
    },
  },
};

let andrei_pokemon = {
  raichu: {
    species: "Mouse Pokemon",
    height: 0.8,
    weight: 30,
    power: "",
  },
};

// if (
//   andrei_pokemon &&
//   andrei_pokemon.raichu &&
//   will_pokemon &&
//   will_pokemon.pikachu &&
//   will_pokemon.pikachu.friend &&
//   will_pokemon.pikachu.friend.charizard
// ) {
//   console.log("fight!");
// } else {
//   console.log("walk away...");
// }
let checking =
  andrei_pokemon?.raichu && will_pokemon?.pikachu?.friend?.charizard // optional chaning operator ?.📝
    ? "fight!"
    : "walk away...";
console.log(checking);

// Exercise 4: What do these each output?
console.log(false ?? "hellooo1"); // flase               // nulish operator ?? 📝
console.log(null ?? "hellooo2"); // hellpoo
console.log(null || "hellooo3"); // hellooo
console.log((false || null) ?? "hellooo4"); // hellooo4
console.log(null ?? (false || "hellooo5")); // hellooo5
console.log(undefined ?? "hello"); // hello
