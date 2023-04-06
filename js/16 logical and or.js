var marks = prompt("Enter your marks: ");

if( marks > 100 || marks < 0){
    document.write("Invalid marks");
}
else if(marks >= 90 && marks <= 100){
    document.write("90 to 100 =" + " A+");
}
else if(marks >= 80 && marks <= 99){
    document.write("80 to 90 =" + " A-");
}
else if(marks >= 70 && marks <= 89){
    document.write("70 to 80 =" + " B");
}
else if(marks >= 60 && marks <= 79){
    document.write("60 to 70 =" + " B-");
}
else if(marks >= 50 && marks <= 69){
    document.write("50 to 60 =" + " C");
}
else if(marks >= 40 && marks <= 59){
    document.write("40 to 50 =" + " D");
}
else if(marks >= 33 && marks <= 49){
    document.write("33 to 40 =" + " E");
}
else if(marks >= 32 && marks <= 33){
    Document.write("1 to 32 =" + " Fail");
}

    