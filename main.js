//When the button is clicked, do code between brackets
document.querySelector('button').onclick = function () {
  // declaring input variables
  var number1 = document.querySelector('.number1').value;
  var number2 = document.querySelector('.number2').value;

  // if the user inputs a value that is NaN, open window with alert
  if (isNaN(number1) === true || isNaN(number2) === true) {
    confirm('Please enter only numbers');
  }

  // otherwise, sum the two values and print answer to console and in output class
  else {
    var answer = Number(number1) + Number(number2);
    document.querySelector('.output').innerText = answer;
    console.log(answer);
  }
};
