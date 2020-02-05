let n = prompt('Введите число страниц Вашей книги: ','');

function sum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  }
  
  alert('Сумма всех страниц равна: ' + sum(n) );