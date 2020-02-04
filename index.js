function fizzBuzz(n) {
    if (n % 3 === 0 && n % 5 === 0) {
        console.log("FizzBuzz");
    } else if (n % 3 === 0) {
        console.log("Fizz");
    } else if (n % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(n);
    }

    if (n < 15) {
        let newNumber = n + 1;
        fizzBuzz(newNumber);
    }
};

fizzBuzz(1);