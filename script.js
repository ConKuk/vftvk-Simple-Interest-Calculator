function compute() {
  // values
  const principal = parseInt(document.getElementById("principal").value);
  const rate = parseFloat(document.getElementById("rate").value);
  const years = parseInt(document.getElementById("years").value);

  // Result DOM element
  const result = document.getElementById("result");
  const principalElm = document.getElementById("principal");
  const principalError = document.getElementById("principalError")

  // Resets
  principalError.style.display = 'none';
  result.innerHTML = '';

  // Validation
  if (isNaN(principal) || principal <= 0){
    principalError.style.display = 'inline';
    return principalElm.focus();
  }



  // Calculations
  const currentYear = new Date().getFullYear();
  const calculatedYear = currentYear + years;
  const calculatedAmount = principal*(rate/100)*years;

  result.innerHTML = `
    <p>
        If you deposit <mark>${principal}$</mark>,<br/>
        at an iterest rate of <mark>${rate}%</mark>.<br/>
        You will receive an amount of <mark>${calculatedAmount.toFixed(2)}$</mark>.<br/>
        in the year <mark>${calculatedYear}</mark>
    </p>
`;

}


window.onload = function () {
  updateRateValue();
}

function updateRateValue() {
  const rate = document.getElementById("rate").value;
  document.getElementById("interestRate").innerHTML = rate + "%";
}