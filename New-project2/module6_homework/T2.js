function isPrimeNumber(num){
  if ((num < 2) || (num > 1000)) {
      return "is not correct!";
  } else {
      for (let i = 2; i < num; i++){
          if (num % i === 0) {
              return false;
          }
      }
      return true;
  }
}

let randNum = Math.floor(Math.random() * 2000);
let p = isPrimeNumber(randNum);
console.log("Number " + randNum + ' is Prime = ' + p);








function isPrime(num) {
    let _true = 'число простое', _false = 'ответ неверный';
    if (num <= 1 && num > 1000) return _false;
    if (num == 2) return _true;
    for (let i = 2; i <= num / 2; i++) {
    if (num % i == 0) {
      return _false;
    }
    }
    return _true;
    }
console.log(isPrime(1001));
console.log(isPrime(53));
