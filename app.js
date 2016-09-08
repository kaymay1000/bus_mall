var imagesArray = [];
var totalClicks = 0;
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

function NewImage(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.clicked = 0;
  imagesArray.push(this);
};

function generateImages() {
  new NewImage('Bag', 'imgs/bag.jpg');
  new NewImage('Banana', 'imgs/banana.jpg');
  new NewImage('Bathroom', 'imgs/bathroom.jpg');
  new NewImage('Boots', 'imgs/boots.jpg');
  new NewImage('Breakfast', 'imgs/breakfast.jpg');
  new NewImage('Bubblegum', 'imgs/bubblegum.jpg');
  new NewImage('Chair', 'imgs/chair.jpg');
  new NewImage('Cthulhu', 'imgs/cthulhu.jpg');
  new NewImage('Dog Duck', 'imgs/dog-duck.jpg');
  new NewImage('Dragon', 'imgs/dragon.jpg');
  new NewImage('Pen', 'imgs/pen.jpg');
  new NewImage('Pet Sweep', 'imgs/pet-sweep.jpg');
  new NewImage('Scissors', 'imgs/scissors.jpg');
  new NewImage('Shark', 'imgs/shark.jpg');
  new NewImage('Sweep', 'imgs/sweep.png');
  new NewImage('Tauntaun', 'imgs/tauntaun.jpg');
  new NewImage('Unicorn', 'imgs/unicorn.jpg');
  new NewImage('USB', 'imgs/usb.gif');
  new NewImage('Water Can', 'imgs/water-can.jpg');
  new NewImage('Wine Glass', 'imgs/wine-glass.jpg');
};

if (localStorage.imagesArray) {
  var lsImages = JSON.parse(localStorage.getItem('imagesArray'));
  // var lsClicks = JSON.parse(localStorage.getItem('totalClicks'));
  chartData.data.datasets[0].data = JSON.parse(localStorage.getItem('chartData'));
  chartData.data.datasets[0].labels = JSON.parse(localStorage.getItem('labels'));
  for (var j in imagesArray) {
    var lsImage = new Image(lsImages[j].name, lsImages[j].filepath);
    lsImages.push(lsImage);
  }
};

var tracker = {

  setLocalStorage: function() {
    localStorage.setItem('imagesArray', JSON.stringify(imagesArray));
    localStorage.setItem('numClicks', JSON.stringify(totalClicks));
    localStorage.setItem('chartData', JSON.stringify(chartData.data.datasets[0].data));
    localStorage.setItem('labels', JSON.stringify(chartData.data.labels));
  },

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
    //while loop to ensure no duplicates appear in random set of 3 images
    while (num1 === num2 || num2 === num3 || num3 === num1) {
      num1 = this.generateRandomNum();
      num2 = this.generateRandomNum();
      num3 = this.generateRandomNum();
    };

    image1.src = imagesArray[num1].filepath;
    image2.src = imagesArray[num2].filepath;
    image3.src = imagesArray[num3].filepath;
    image1.name = imagesArray[num1].name;
    image2.name = imagesArray[num2].name;
    image3.name = imagesArray[num3].name;

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
          chartData.data.datasets[0].data[i] = imagesArray[i].clicked;
          myChart.update();
        }
      }
      tracker.setLocalStorage();
      tracker.generateRandomImages();
    }
    else {
      leftImage.removeEventListener;
      centerImage.removeEventListener;
      rightImage.removeEventListener;
      // tracker.images.innerhtml = '';
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
var myChart = new Chart(ctx, chartData);

generateImages();
tracker.generateRandomImages();
tracker.generateEventListeners();
