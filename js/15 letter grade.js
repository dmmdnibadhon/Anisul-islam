var marks = prompt("Enter your marks:");

if(marks >= 90){
    document.write("90 to 100 =" + " A+");
}
else if(marks >= 80){
    document.write("80 to 90 =" + " A-");
}
else if(marks >= 70){
    document.write("70 to 80 =" + " A");
}
else if(marks >= 60){
    document.write("60 to 70 =" + " B");
}
else if(marks >= 50){
    document.write("50 to 60 =" + " C");
}
else if(marks >= 40){
    document.write("40 to 50 =" + " D");
}
else if(marks >= 33){
    document.write("33 to 40 =" + " E");
}
else
    document.write("32 to 0 =" + " Fail");
