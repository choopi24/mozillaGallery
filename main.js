var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
for(var i = 1;i<6;i++){
  var newImage = document.createElement('img');
  newImage.setAttribute('src', "images/pic"+ i +".jpg");
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click',imageLoop,false)
}
function imageLoop(){
  var displayMe = this.getAttribute("src");
  console.log(displayMe);
  displayedImage.setAttribute("src",displayMe);
}
/* Wiring up the Darken/Lighten button */

btn.addEventListener('click',darkenFunc,false);
function darkenFunc(){
  var btnClass = this.getAttribute('class');
  console.log(btnClass);
  if(btnClass == 'dark'){
    this.setAttribute('class','light');
    this.textContent="Lighten";
    document.getElementsByClassName('overlay')[0].style.backgroundColor = "rgba(0,0,0,0.5)";
  }
  else{
    this.setAttribute('class','dark');
    this.textContent="Darken"
    document.getElementsByClassName('overlay')[0].style.backgroundColor = "rgba(0,0,0,0)";    
  }
}