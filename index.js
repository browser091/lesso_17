//=======первый способ====//
function fibonacciA (n){
    if (n < 2){
      return n;
    } else {
      return fibonacciA(n-1) + fibonacciA(n-2);
    }
  }
console.log(fibonacciA(3));

//=======второй способ====//
function fibonacciB(n) {
    
    const  arrF = [0, 1]
    for(let i = 2; i <= n; i++) {
    const arr1 = arrF[i - 1]
    const arr2 = arrF[i - 2]
    arrF.push(arr1 + arr2)
    }
    
    return arrF[n]
}
console.log(fibonacciB(3));