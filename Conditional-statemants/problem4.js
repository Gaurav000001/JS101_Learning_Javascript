var reg_email = "abc@gmail.com";
var reg_pass = "123456789";

var ent_email = "abc@gmail.com";
var ent_pass = "123456789";

if(reg_email==ent_email){
  if(reg_pass==ent_pass){
    console.log("you can login");
  }
  else{
    console.log("you have entered wrong password");
  }
}
else{
  console.log("you have entered wrong email");
}