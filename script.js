let bill = document.getElementById('bill');
let gratuity = document.getElementById('gratuity');
let attendees = document.getElementById('attendees');


function calculateTip() {
  let total = (bill.value  * gratuity.value)/ attendees.value;
  totatl = Math.round(total * 100)/ 100;
  total = total.toFixed(2);

  document.getElementById('totalTip').style.display = "flex";
  document.getElementById('tip').innerHTML = `$${total}`;
}

//Event Listner
document.getElementById('calculate').addEventListener("click", calculateTip);