const input = document.getElementById("input");
const btn = document.getElementById("btn");
const msg2 = document.getElementById("msg2");
const modal = document.querySelector(".modal");
const btn2 = document.querySelector(".btn2");
const value = document.getElementById("value");

btn.addEventListener("click", () => {
  const val = input.value;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isValid = emailPattern.test(val);

  if (val == "" || isValid == false) {
    input.classList.add("error");
    msg2.innerText = "valid email required";

    setTimeout(() => {
      msg2.innerText = "";
      input.classList.remove("error");
    }, 5000);
  } else {
    modal.style.display = "flex";
    value.innerText = val;
  }
});

btn2.addEventListener("click", () => {
  modal.style.display = "none";
});
