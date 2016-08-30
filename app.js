var imagesArray = [];

function NewImage(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.shown = 0;
  this.clicked = 0;
  imagesArray.push(this);
};
function generateRandomIndex() {
  return Math.floor(Math.random() * imagesArray.length);
};

bag = new NewImage('Bag', 'imgs/bag.jpg');
banana = new NewImage('Banana', 'imgs/banana.jpg');
bathroom = new NewImage('Bathroom', 'imgs/bathroom.jpg');
boots = new NewImage('Boots', 'imgs/boots.jpg');
breakfast = new NewImage('Breakfast', 'imgs/breakfast.jpg');
bubblegum = new NewImage('Bubblegum', 'imgs/bubblegum.jpg');
chair = new NewImage('Chair', 'imgs/chair.jpg');
cthulhu = new NewImage('Cthulhu', 'imgs/cthulhu.jpg');
dogDuck = new NewImage('Dog Duck', 'imgs/dog-duck.jpg');
dragon = new NewImage('Dragon', 'imgs/dragon.jpg');
pen = new NewImage('Pen', 'imgs/pen.jpg');
petSweep = new NewImage('Pet Sweep', 'imgs/pet-sweep.jpg');
scissors = new NewImage('Scissors', 'imgs/scissors.jpg');
shark = new NewImage('Shark', 'imgs/shark.jpg');
sweep = new NewImage('Sweep', 'imgs/sweep.png');
tauntaun = new NewImage('Tauntaun', 'imgs/tauntaun.jpg');
unicorn = new NewImage('Unicorn', 'imgs/unicorn.jpg');
usb = new NewImage('USB', 'imgs/usb.gif');
waterCan = new NewImage('Water Can', 'imgs/water-can.jpg');
wineGlass = new NewImage('Wine Glass', 'imgs/wine-glass.jpg');

console.log(imagesArray);
generateRandomIndex();

var images = document.getElementById('images');

function generateRandomImages() {
  var image1 = document.getElementById('image1').src = imagesArray[generateRandomIndex()].filepath;
  var image2 = document.getElementById('image2').src = imagesArray[generateRandomIndex()].filepath;
  var image3 = document.getElementById('image3').src = imagesArray[generateRandomIndex()].filepath;
  images.appendChild(image1);
  images.appendChild(image2);
  images.appendChild(image3);
}

generateRandomImages();
