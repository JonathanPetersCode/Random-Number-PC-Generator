function randomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}
var upper= 10000;
var randomNumber = getRandomNumer(upper);
var guess;
var attempts = 0; 

randomNumber = 0;

while(guess !== randomNumber){
guess = getRandomNumber(upper);
  attempts += 1; 
}
