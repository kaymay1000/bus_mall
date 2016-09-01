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

var tracker = {

  generateRandomNum: function() {
    return Math.floor(Math.random() * imagesArray.length);
  },

  images: document.getElementById('images'),

  generateRandomImages: function() {
    var image1 = document.getElementById('image1');
    var image2 = document.getElementById('image2');
    var image3 = document.getElementById('image3');
    var num1 = this.generateRandomNum();
    var num2 = this.generateRandomNum();
    var num3 = this.generateRandomNum();

    image1.src = imagesArray[num1].filepath;
    image2.src = imagesArray[num2].filepath;
    image3.src = imagesArray[num3].filepath;
    image1.name = imagesArray[num1].name;
    image2.name = imagesArray[num2].name;
    image3.name = imagesArray[num3].name;

    //while loop to ensure no duplicates appear in random set of 3 images
    while (image1.src === image3.src || image2.src === image3.src || image1.src === image2.src) {
      this.generateRandomImages();
    };
    this.images.appendChild(image1);
    this.images.appendChild(image2);
    this.images.appendChild(image3);
  },

  clickCounter: function(event) {
    if (totalClicks < 15) {
      totalClicks++;
      for (var i = 0; i < imagesArray.length; i++) {
        if (imagesArray[i].name === event.target.name) {
          imagesArray[i].clicked++;
        }
      }
      tracker.generateRandomImages();
    }
    else {
      leftImage.removeEventListener;
      centerImage.removeEventListener;
      rightImage.removeEventListener;
    }
  },

  generateEventListeners: function() {
    leftImage = document.getElementById('image1');
    centerImage = document.getElementById('image2');
    rightImage = document.getElementById('image3');
    submitButton = document.getElementById('submit');
    leftImage.addEventListener('click', this.clickCounter);
    centerImage.addEventListener('click', this.clickCounter);
    rightImage.addEventListener('click', this.clickCounter);
    submitButton.addEventListener('click', this.generateTable);
  },

  tableEl: document.getElementById('table'),

  generateTableHeader: function() {
    var trEl = document.createElement('tr');
    var emptyThEl = document.createElement('th');

    emptyThEl.textContent = '';
    trEl.appendChild(emptyThEl);

    for (var i in imagesArray) {
      var thEl = document.createElement('th');
      thEl.textContent = imagesArray[i].name;
      trEl.appendChild(thEl);
    }
    this.tableEl.appendChild(trEl);
  },

  generateTableBody: function() {
    var trEl = document.createElement('tr');
    var totalsTdEl = document.createElement('td');
    totalsTdEl.textContent = 'Number of Image Clicks';
    trEl.appendChild(totalsTdEl);
    for (var i in imagesArray) {
      var tdEl = document.createElement('td');
      tdEl.textContent = imagesArray[i].clicked;
      trEl.appendChild(tdEl);
    }
    this.tableEl.appendChild(trEl);
  },

  generateTable: function() {
    tracker.generateTableHeader();
    tracker.generateTableBody();
    submitButton.removeEventListener('click', tracker.generateTable);
  },
};

tracker.generateRandomImages();
tracker.generateEventListeners();
