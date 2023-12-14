<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Simple Calculator</title>
  <style>
    input {
      width: 50px;
    }
  </style>
</head>
<body>

  <h2>Simple Calculator</h2>

  <label for="num1">Number 1:</label>
  <input type="text" id="num1">

  <label for="operator">Operator:</label>
  <select id="operator">
    <option value="+">+</option>
    <option value="-">-</option>
    <option value="*">*</option>
    <option value="/">/</option>
  </select>

  <label for="num2">Number 2:</label>
  <input type="text" id="num2">

  <button onclick="calculate()">Calculate</button>

  <p>Result: <span id="result"></span></p>

  <script>
    function calculate() {
      var num1 = parseFloat(document.getElementById("num1").value);
      var operator = document.getElementById("operator").value;
      var num2 = parseFloat(document.getElementById("num2").value);
      var resultElement = document.getElementById("result");

      var result;

      switch (operator) {
        case "+":
          result = num1 + num2;
          break;
        case "-":
          result = num1 - num2;
          break;
        case "*":
          result = num1 * num2;
          break;
        case "/":
          result = num1 / num2;
          break;
        default:
          result = "Invalid operator";
      }

      resultElement.textContent = result;
    }
  </script>

</body>
</html>