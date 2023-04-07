// var number1 = prompt("Enter number1 :");
// var number2 = prompt("Enter number2 :");
// var number3 = prompt("Enter number3 :");

// if(number1 > number2 && number1 > number3){
//     console.log("Larg number 1 = " + number1);
// }
// else if(number2 > number1 && number2 > number3){
//     console.log("Larg number 2 = " + number2);
// }
// else
//     console.log("Larg number 3 = " + number3);




var letter = prompt("Enter a letter :");

letter = letter.toLocaleLowerCase();

if(letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u"){
    console.log("Vowel");
}
else
    console.log("Consonant");
