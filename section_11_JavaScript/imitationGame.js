function imitaitonGame(arr) {
  let word = arr.shift().split("");
  // console.log(word);
  let command = arr.shift();
  while (command !== "Decode") {
    let tokens = command.split("|");

    switch (tokens[0]) {
      case "ChangeAll":
        let lettterForChange = tokens[1];
        let letterToInsert = tokens[2];

        while (word.includes(lettterForChange)) {
          let index = word.indexOf(lettterForChange);
          word.splice(index, 1, letterToInsert);
        }
        break;
      case "Insert":
        let index = +tokens[1];
        let letter = tokens[2];
        word.splice(index, 0, letter);
        break;
      case "Move":
        let indexForMoves = Number(tokens[1]);

        word = word.join("");
        let lettersForMove = word.substring(indexForMoves);
        let letterWichStays = word.substring(0, indexForMoves);
        function imitaitonGame(arr) {
          let word = arr.shift().split("");
          // console.log(word);
          let command = arr.shift();
          while (command !== "Decode") {
            let tokens = command.split("|");

            switch (tokens[0]) {
              case "ChangeAll":
                let lettterForChange = tokens[1];
                let letterToInsert = tokens[2];

                while (word.includes(lettterForChange)) {
                  let index = word.indexOf(lettterForChange);
                  word.splice(index, 1, letterToInsert);
                }
                break;
              case "Insert":
                let index = +tokens[1];
                let letter = tokens[2];
                word.splice(index, 0, letter);
                break;
              case "Move":
                let indexForMoves = Number(tokens[1]);

                word = word.join("");
                let lettersForMove = word.substring(indexForMoves);
                let letterWichStays = word.substring(0, indexForMoves);

                word = lettersForMove + letterWichStays;
                word = word.split("");
                break;
            }

            command = arr.shift();
          }
          console.log(word.join(""));
        }
        word = lettersForMove + letterWichStays;
        word = word.split("");
        break;
    }

    command = arr.shift();
  }
  console.log("The decrypted message is: " + word.join(""));
}
imitaitonGame(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
