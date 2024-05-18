const numberInput = document.getElementById("user-input");
const result = document.getElementById("results-div");
const clearBtn = document.getElementById("clear-btn");
const checkBtn = document.getElementById("check-btn");


const checkValidity = () => {
  const entryValue = numberInput.value; 
  const validPattern = /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/gm;
  console.log(entryValue, typeof (entryValue));

  if(entryValue === "") {
    alert("Please provide a phone number");
  } else if (entryValue !=="" && validPattern.test(entryValue)) {
    result.textContent = `Valid US number: ${entryValue}`;
    result.style.color = "green";
  } else {
    result.textContent = `Invalid US number: ${entryValue}`;
    result.style.color = "red";
  }
}

const clear = () => {
  numberInput.value = "";
  result.textContent = "";
}

checkBtn.addEventListener("click", () => checkValidity());

clearBtn.addEventListener("click", () => clear());