function checkEven() {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, null];
  let even = 0;
  let odd = 0;
for (let key of arr){
  if (key % 2 == 0){
    console.log('Четное:', key);
    even++;
    } else if (key % 2 == 1){
      console.log('Нечетное:', key);
      odd++;
    }
}
console.log('Количество четных чисел:', even);
console.log('Количество нечетных чисел:', odd);
}
checkEven();