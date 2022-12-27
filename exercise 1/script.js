// var firstName = prompt("What is your First Name?");
// var lastName = prompt("What is your Last Name?");
// var age = prompt("What is your Age?");

// var fullName = firstName + " " + lastName;

// ageDays = age * (  365 + 1 / 4 ) ;

// console.log("Your full name is " + fullName + ".");
// console.log("You are " + age + " years old.");
// console.log("You are " + ageDays + " days old.");

var age = Number(prompt("What is your Age?"));
if (age < 0) {
  console.log("Age can't be negative");
} else if (age % 2 === 1) {
  if (age === 21) {
    console.log("Happy 21st Birthday");
  }
  console.log("Age is Odd ");
} else {
  console.log("Age is Even ");
}

if (age > 0) {
  var i, chk;
  for (i = 1; i < age; i++) {
    if (i * i == age) {
      console.log("Age is a Perfect Square");
      chk = i;
    }
  }

  if (chk == undefined) {
    console.log("Age is Not a Perfect Square");
  }
}
