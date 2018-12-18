window.onload = function() {
  function displayResult() {
    document.getElementById("myHeader").innerHTML = "Have a nice day!";
  }

  let btnEvent = document.getElementById("btn");
  btnEvent.onclick = displayResult();
};
