let guestList = ["Angela", "Jack", "Paul", "James", "Lara", "James"];

let guestName = prompt("What is your name?");

if ((guestList.includes(guestName))){
    console.log("You may enter");
}

else{
    console.log("You may not enter");
}