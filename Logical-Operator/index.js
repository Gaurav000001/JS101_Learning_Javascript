var subject = "english";
var marks = 19;
var pass_marks = 70;

//Nested if

if(subject=="english"){
  if(marks>=pass_marks){
    console.log("passed");
  }
}
else{
  console.log("failed");
}

//if else with logical AND

if(subject == "english" && marks >= pass_marks){
  console.log("passed");
}
else{
  console.log("failed");
}

//Ternary Operator

subject == "english" && marks >= pass_marks?console.log("passed") : console.log("failed");
