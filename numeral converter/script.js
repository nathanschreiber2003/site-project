let number = document.getElementById("number");

let convertBtn = document.getElementById("convert-btn");

let output = document.getElementById("output")

function convertToRoman() {
  if (number.value == "") {
    output.innerHTML = "Please enter a valid number";
    return

  } else if (number.value < 1) {
    output.innerHTML = "Please enter a number greater than or equal to 1";
    return
  }

  if (number.value > 3999) {
    output.innerHTML = "Please enter a number less than or equal to 3999";
    return
  }


const numerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV" , "I"];

const arabicNumerals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

let romanNumeral = "";

for (let i = 0; i < arabicNumerals.length; i++) {
  while (number.value >= arabicNumerals[i]) {
    romanNumeral += numerals[i];
    number.value -= arabicNumerals[i];
  }
}
output.innerHTML = romanNumeral
}
convertBtn.addEventListener("click", convertToRoman);