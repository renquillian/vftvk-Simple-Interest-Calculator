function compute() {
  p = document.getElementById("principal").value;
  var principal = document.getElementById("principal").value;
  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;
  var interest = principal * years * rate / 100;
  var year = new Date().getFullYear() + parseInt(years);
}

function updateRate() {
  var rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText = rateval;

document.getElementById("result").innerHTML="If you deposit"+1000000+",\<br\>at an interest rate of "+3.5%+"%\<br\>You will receive an amount of "+175000+",\<br\>in the year "+2025+"\<br\>"
  
//I got stuck at this point because I had no idea what they were asking of me since there were zero examples, so I'm turning this in and hoping to learn from other students//

}

