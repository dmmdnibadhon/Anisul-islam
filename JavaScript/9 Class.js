var num1 = prompt("Enter first number : ");
var num2 = prompt("Enter second number : ");

num1 = parseInt(num1, 10);
num2 = parseInt(num2, 10);

var sum, sub, gun, divided, dividedRasult;

sum = num1 + num2;
document.write("Sum = " + sum + "<br/>"); 

sub = num1 - num2;
document.write("Sub = " + sub + "<br/>");

gun = num1 * num2;
document.write("gun = " + gun + "<br/>");

divided = num1 / num2;
document.write("divided = " + divided + "<br/>");

dividedRasult = num1 % num2;
document.write("dividedRasult = " + dividedRasult); 