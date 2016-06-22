function add () {
  var number1 = document.querySelector('.number1').value;
  var number2 = document.querySelector('.number2').value;
  var answer = Number(number1) + Number(number2);
  return answer;
}

document.querySelector('button').onclick = add();
