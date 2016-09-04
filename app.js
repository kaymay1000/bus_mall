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
          myChart.data.datasets[0].data[i] = imagesArray[i].clicked;
          myChart.update();
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
    leftImage.addEventListener('click', this.clickCounter);
    centerImage.addEventListener('click', this.clickCounter);
    rightImage.addEventListener('click', this.clickCounter);
  },
};

var ctx = document.getElementById('canvas').getContext('2d');

var chartData = {
  type: 'bar',
  data: {
    labels: ['Bag', 'Banana', 'Bathroom', 'Boots', 'Breakfast', 'Bubblegum', 'Chair', 'Cthulhu', 'Dog Duck', 'Dragon', 'Pen', 'Pet Sweep', 'Scissors', 'Shark', 'Sweep', 'Tauntaun', 'Unicorn', 'USB', 'Water Can', 'Wine Glass'],
    datasets: [{
      label: 'Number of Votes',
      data: [],
      backgroundColor:
        'rgba(44, 203, 252, 0.5)',
      borderColor:
        'darkblue',
      borderWidth: 2,
    }],
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          max: 10,
          min: 0,
          stepSize: 2,
        }
      }]
    }
  },
};

var myChart = new Chart(ctx, chartData);

tracker.generateRandomImages();
tracker.generateEventListeners();
