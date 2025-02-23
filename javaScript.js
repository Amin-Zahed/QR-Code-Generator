const btn = document.querySelector("button");
const input = document.querySelector("input");
const qrCodeBox = document.querySelector(".qr-code");
const qrCode = document.querySelector("img");

const audio = new Audio("./files/mouse_click.mp3");

btn.addEventListener("mouseenter", () => {
  btn.style.backgroundColor = "rgb(97, 97, 250)";
});
btn.addEventListener("mouseleave", () => {
  btn.style.backgroundColor = "";
});
btn.addEventListener("mousedown", () => {
  btn.style.boxShadow = "0px 8px 0px 0px rgb(0, 0, 112)";
  btn.style.transform = "translateY(10px)";
});
btn.addEventListener("mouseup", () => {
  btn.style.boxShadow = "";
  btn.style.transform = "";
});
btn.addEventListener("click", () => {
  audio.play();
  if (!input.value) {
    return alert("please full field");
  }
  btn.innerText = "processing...";
  qrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
  qrCode.addEventListener("load", () => {
    qrCodeBox.classList.remove("hidden");
    btn.innerText = "create QR code";
  });
});
input.addEventListener("input", () => {
  if (!input.value) {
    qrCodeBox.classList.add("hidden");
  }
});
input.addEventListener("keydown", (event) => {
  if (event.code == "Enter") {
    event.preventDefault();
    btn.click();
  }
});
