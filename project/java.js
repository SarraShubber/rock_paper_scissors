const item = ["rock", "paper", "scissors"];
const random = Math.floor(Math.random() * item.length);
computer_Choice = item[random];
console.log(computer_Choice);
// return computer_Choice
function setPlayChoice(choice) {
  console.log(choice);
  return choice;
}
