//variables
let billAmt = document.getElementById("bill");
let gratuity = document.getElementById("gratuity");
let attendees = document.getElementById("attendees");

//calculate tip
function calculateTip() {
  console.log(billAmt.value);
  let total = (billAmt.value * gratuity.value) / attendees.value;
  total = Math.round(total * 100) / 100;
  total = total.toFixed(2);
  //print
  document.getElementById("totalTip").style.display = "flex";
  document.getElementById("tip").innerHTML = `$${total}`;
}

document.getElementById("calculate").addEventListener("click", calculateTip);
