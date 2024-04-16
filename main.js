let clickedSeat = 0;
const totalSeats = document.getElementById("total-seats");
const priceContainer = document.getElementById("price-container");
const totalPrice = document.getElementById("total-price");
const selectedSeat = document.getElementById("selected-seat");
const buttons = document.querySelectorAll(".btn-click");
const grandTotalPrice = document.getElementById("grand-total");
const check = document.getElementById("check");
for (const button of buttons) {
  button.addEventListener("click", function (event) {
    const buttonElement = event.target;
    clickedSeat += 1;
    if (clickedSeat <= 4) {
      totalSeats.innerText = 50 - clickedSeat;
      buttonElement.style.backgroundColor = "#1DD100";
      const buttonElementText = buttonElement.innerHTML;
      priceContainer.innerHTML += `  <div class="p-5">
                                        <div class="flex justify-between">
                                          <p>${buttonElement.innerText}</p>
                                          <p>Economy</p>
                                          <p>550</p>
                                        </div>
                                     </div>`;
      selectedSeat.innerText = clickedSeat;
      totalPrice.innerText = 550 * clickedSeat;
      buttonElement.disabled = true;
    } else {
      alert("You can not buy more than 4 tickets");
    }
  });
}
function handleGrandTotal() {
  const totalPriceElement = document.getElementById("total-price");
  const subTotalPrice = parseInt(totalPriceElement.innerText);
  console.log("Grand Total");
  if (check.value == "NEW15") {
    grandTotalPrice.innerText = subTotalPrice - (subTotalPrice * 15) / 100;
  } else if (check.value == "Couple 20") {
    grandTotalPrice.innerText = subTotalPrice - (subTotalPrice * 20) / 100;
  }
}

function missionSuccess() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  if (
    typeof name == "string" ||
    typeof phone == Number ||
    typeof email == email
  ) {
    document.getElementById("btnDisabled").disabled = false;
  }
}
