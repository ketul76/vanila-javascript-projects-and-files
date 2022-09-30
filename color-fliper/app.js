const colors = ["green" , "red" , "rgba(133,122,200)" , "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click',function(){
  // random numbers between 0 -3 
  const randomnumber = getRandomznumber();
  console.log(randomnumber);
  document.body.style.backgroundColor = colors[randomnumber];
  color.textContent = colors[randomnumber];
  console.log(color);
})
function getRandomznumber(){
  return Math.floor(Math.random()*colors.length);
}