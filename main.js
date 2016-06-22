document.querySelector('button').onclick = function () {
  var number1 = document.querySelector('.number1').value;
  var number2 = document.querySelector('.number2').value;

  if (typeof number1 != 'number' || typeof number2 != 'number') {
    window.alert(Please type only numbers);
  }

  else {
  var answer = Number(number1) + Number(number2);
  document.querySelector('.output').innerHTML = answer;
  console.log(answer);
}
}
