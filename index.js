let n = prompt('введите число страниц','');

function sum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  }
  
  alert( sum(n) );