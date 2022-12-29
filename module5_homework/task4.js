function randomNumber(min, max) { 
  return Math.floor(Math.random() * (max - min) + min);
  } 
  document.write("Random Number between 0 and 100: ") 
  document.write( randomNumber(0, 100) ); 