const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");
input.addEventListener("input", (event) => {
  const value = event.target.value.trim();

  if (value.length === 0) {
    span.textContent = "Anonymous";
  } else {
    span.textContent = value;
  }
});
