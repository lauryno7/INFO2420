// Preload print and logo images for rollover effects
var PrintButton1 = new Image();
var PrintButton2 = new Image();
var logo1 = new Image();
var logo2 = new Image();

if (document.images) {
    PrintButton1.src = "Images/print1.jpg";
    PrintButton2.src = "Images/print2.jpg";
    logo1.src = "Images/Logo1.png";
    logo2.src = "Images/Logo2.jpg";
}

// Arrays for image swap gallery
var imgArray = [
    'BaldEagleSm.jpg',
    'CardinalSmall.jpg',
    'GeeseSmall.jpg',
    'HawkSm.jpg'
];
var titleArray = [
    'Bald Eagle',
    'Cardinal',
    'Geese',
    'Hawk'
];
var imgPath = "Images/";

// Function to swap main image and caption
function swapImage(imgID) {
    var theImage = document.getElementById('theImage');
    var textDiv = document.getElementById('bottomText');
    theImage.src = imgPath + imgArray[imgID];
    textDiv.innerHTML = titleArray[imgID];
}

// Function to preload gallery images
function preloadImages() {
    for(var i = 0; i < imgArray.length; i++) {
        var tmpImg = new Image();
        tmpImg.src = imgPath + imgArray[i];
    }
}