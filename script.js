function appendValue(value) {
  document.getElementById("result").value += value;
}

function clearResult() {
  document.getElementById("result").value = "";
}

function deleteLastChar() {
  var result = document.getElementById("result").value;
  document.getElementById("result").value = result.slice(0, -1);
}

function calculateResult() {
  var result = document.getElementById("result").value;

  try {
    var calculatedResult = eval(result);
    document.getElementById("result").value = calculatedResult;
  } catch (error) {
    alert("Erreur de calcul !");
  }
}

document.getElementById("submit-button").addEventListener("click", function () {
  var code = document.getElementById("result").value;

  // Vérifier le code
  if (code === "2432") {
    window.location.href = "index copy.html"; // Redirection vers une autre page
  }
});
