//array of introductions
const titles = [
  "Hi! I'm Jamal. I'm a VFX Artist.",
  "Hi! I'm Jamal. I'm a Graphic Designer.",
  "Hi! I'm Jamal. I'm an Illustrator.",
  "Hi! I'm Jamal. I'm a Technical Artist.",
  "Hi! I'm Jamal. I'm a Graffiti Artist."
]

//array of images 
const images = [
  "images/light.png",
  "images/process 5.2.png",
  "images/process 3.6.jpg",
  "images/process 2.1.PNG",
  "images/process 1.0.png"
]

//array of titles
const subtitles = [
  "This is my 2nd year lighting project",
  "I designed this for ... company",
  "I love to design backgrounds yas ",
  "Coding and problem solving a cool af",
  "graffiti is cool as heck !!!!!"
]

//array of descriptions
const descriptions = [
  "asdassad",
  "asfasfafaf",
  "noor ur a loser HAHA",
  "safasfasfs",
  "fsafasf"
]

//preload images so they are less laggy

//set index = 0
var index = 0;

//set the current image + text to be set on index = 0;
var preloadImg1 = new Image();
var preloadImg2 = new Image();
function nextImage(){
  preloadImg1.src = images[(currentIndex+1) % images.length];
  console.log(preloadImg1.src);
  preloadImg2.src = images[(currentIndex-1) % images.length];
}

//function to change text/image
function updateImageAndText(){
  //alert(index); //index verification
  var currentImage = document.getElementById('mainImg');
  currentImage.src = images[index];
  var currentTitle = document.getElementById('title');
  currentTitle.innerHTML = titles[index];
  var currentSubtitle = document.getElementById('subtitle');
  currentSubtitle.innerHTML = subtitles[index];
  var currentDescription = document.getElementById('description');
  currentDescription.innerHTML = descriptions[index];
}

var isClickable = true;

//whenever previous or next is pressed, index -1 or +1
function leftButtonClicked(){
  if (isClickable == false) return;
  isClickable = false;
  
  if(index == 0) index = 4;
  else index--;
  updateImageAndText();
  
  setTimeout(() => {
    isClickable = true;
  }, 200);
  return;
}

function rightButtonClicked(){
  if (isClickable == false) return;
  isClickable = false;
  
  if(index == 4) index = 0;
  else index++;
  updateImageAndText();
  
  setTimeout(() => {
    isClickable = true;
  }, 200);
  return;
}

document.addEventListener("click", function(){
  var video= document.getElementById("videobg")
  video.play();
});

document.addEventListener("touchstart", function(){
  var video= document.getElementById("videobg")
  video.play();
  video.loop = true;
});