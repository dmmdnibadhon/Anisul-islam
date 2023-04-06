// $("p").text("Hello");

// Use of html tags
$("#jq").html("<u>Underline with jq</u>");

// Use of append
$("#jq").append(" Append");

// Use of prepend
$("#jq").prepend("Prepend ");

// Making a line
var myPara = $("<p></p>").text("This is before para made by jq");

var myPara1 = $("<p></p>").text("This is after para made by jq");

$("#jq").before(myPara);

$("#jq").after(myPara1);
