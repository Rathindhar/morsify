const textToMorse = {
  A: ".-", B: "-...", C: "-.-.", D: "-..",
  E: ".", F: "..-.", G: "--.", H: "....",
  I: "..", J: ".---", K: "-.-", L: ".-..",
  M: "--", N: "-.", O: "---", P: ".--.",
  Q: "--.-", R: ".-.", S: "...", T: "-",
  U: "..-", V: "...-", W: ".--", X: "-..-",
  Y: "-.--", Z: "--..",
  0: "-----", 1: ".----", 2: "..---",
  3: "...--", 4: "....-", 5: ".....",
  6: "-....", 7: "--...", 8: "---..",
  9: "----."
};

const morseToText = Object.fromEntries(
  Object.entries(textToMorse).map(([k, v]) => [v, k])
);

function textToMorseConvert() {
  const input = document.getElementById("input").value.toUpperCase();
  let result = "";

  for (let ch of input) {
    if (ch === " ") result += " / ";
    else if (textToMorse[ch]) result += textToMorse[ch] + " ";
  }

  document.getElementById("output").value = result.trim();
}

function morseToTextConvert() {
  const input = document.getElementById("input").value.trim();
  const words = input.split(" / ");
  let result = "";

  for (let word of words) {
    const letters = word.split(" ");
    for (let letter of letters) {
      if (morseToText[letter]) result += morseToText[letter];
    }
    result += " ";
  }

  document.getElementById("output").value = result.trim();
}
