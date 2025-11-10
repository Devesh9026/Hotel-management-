document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const checkin = document.getElementById("checkin").value;
  const checkout = document.getElementById("checkout").value;
  const room = document.getElementById("room").value;

  if (!name || !checkin || !checkout || Sroom) {
    alert("Please fill all fields.");
    return;
  }

  const confirmationMessage = `Thank you, ${name}! Your booking for a ${room} from ${checkin} to ${checkout} has been confirmed.`;
  document.getElementById("confirmation").innerText = confirmationMessage;

  // Reset the form
  this.reset();
});
const images = [
  "https://via.placeholder.com/1200x400?text=Welcome+to+Seaside+Hotel",
  "https://via.placeholder.com/1200x400?text=Luxurious+Rooms",
  "https://via.placeholder.com/1200x400?text=Book+Your+Stay+Now"
];
let current = 0;

setInterval(() => {
  current = (current + 1) % images.length;
  document.getElementById("sliderImage").src = images[current];
}, 100000);

