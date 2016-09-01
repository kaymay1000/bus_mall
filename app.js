var imagesArray = [];
var totalClicks = 0;

function NewImage(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.clicked = 0;
  imagesArray.push(this);
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

function generateRandomNum() {
  return Math.floor(Math.random() * imagesArray.length);
};

var images = document.getElementById('images');

function generateRandomImages() {
  var image1 = document.getElementById('image1');
  var image2 = document.getElementById('image2');
  var image3 = document.getElementById('image3');
  var num1 = generateRandomNum();
  var num2 = generateRandomNum();
  var num3 = generateRandomNum();

  image1.src = imagesArray[num1].filepath;
  image2.src = imagesArray[num2].filepath;
  image3.src = imagesArray[num3].filepath;
  image1.name = imagesArray[num1].name;
  image2.name = imagesArray[num2].name;
  image3.name = imagesArray[num3].name;

  //while loop to ensure no duplicates appear in random set of 3 images
  while (image1.src === image3.src || image2.src === image3.src || image1.src === image2.src) {
    generateRandomImages();
  };
  images.appendChild(image1);
  images.appendChild(image2);
  images.appendChild(image3);
};

function clickCounter(event){
  if (totalClicks < 2) {
    totalClicks++;
    console.log(totalClicks);
    for (var i = 0; i < imagesArray.length; i++) {
      if (imagesArray[i].name === event.target.name) {
        imagesArray[i].clicked++;
      }
      console.log(imagesArray[i].clicked);
    }
    generateRandomImages();
  }
  else {
    leftImage.removeEventListener;
    centerImage.removeEventListener;
    rightImage.removeEventListener;
  }
};

var leftImage = document.getElementById('image1');
var centerImage = document.getElementById('image2');
var rightImage = document.getElementById('image3');
leftImage.addEventListener('click', clickCounter);
centerImage.addEventListener('click', clickCounter);
rightImage.addEventListener('click', clickCounter);

var submitButton = document.getElementById('submit');
submitButton.addEventListener('click', generateTable);


var tableEl = document.getElementById('table');

function generateTableHeader() {
  var trEl = document.createElement('tr');
  var emptyThEl = document.createElement('th');

  emptyThEl.textContent = '';
  trEl.appendChild(emptyThEl);

  for (var i in imagesArray) {
    var thEl = document.createElement('th');
    thEl.textContent = imagesArray[i].name;
    trEl.appendChild(thEl);
  }
  tableEl.appendChild(trEl);
};

function generateTableBody() {
  var trEl = document.createElement('tr');
  var totalsTdEl = document.createElement('td');
  totalsTdEl.textContent = 'Number of Image Clicks';
  trEl.appendChild(totalsTdEl);
  for (var i in imagesArray) {
    var tdEl = document.createElement('td');
    tdEl.textContent = imagesArray[i].clicked;
    trEl.appendChild(tdEl);
  }
  tableEl.appendChild(trEl);
};

function generateTable() {
  generateTableHeader();
  generateTableBody();
  submitButton.removeEventListener('click', generateTable);
}

generateRandomImages();
