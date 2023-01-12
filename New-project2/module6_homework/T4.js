function printNumbers(from, to) {
  let Num = from;

  let timerId = setInterval(function() {
    console.log(Num);
    if (Num == to) {
      clearInterval(timerId);
    }
    Num++;
  }, 1000);
}
printNumbers(5, 15);