//script.js

//Function to handle button click events
function selectOption(option) {
    //check which button was clicked
    if (option === 'yes') {
        // flashing colors
        flashRainbowColors(function () {
            document.getElementById('question').style.display = 'none'; //Hide the question
            displaycat.gif(); //display maxwell gif

        });
    } else if (option === 'no') {
        // change text to "bruh"
        document.getElementById('no-button').innerText = 'bruh';
        //increase text size of yes
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yes - button).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; //increase font size by * 2px
        yesButton.style.fontSize = newSize + 'px';

    } else {
        //if neither yes or no is clicked show a alert message
        alert('Wrong button buddy!')
    }
}

//function to flash the rainbow
function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function () {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); //change color every 200 miliseconds
    setTimeout(function () {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; //reset background color
        if (callback) {
            callback();
        }

    }, 2000); //flash colors for 2 seconds
}

//function to display the maxwell gif initially
function displaycat.gif() {
    // container where image is displayed 
    var imageContainer = document.getElementById('image-container');
    // new image element for kibby
    var catImage = new image();
    // source file path for the cat
    catImage.src = 'cat.gif'; //assuming cat gif is called so
    //set alternative text for image 
    catImage.alt = 'Cat';
    //when cat image is fully loaded add it to image container 
    catImage.onload = function () {
        imagecontainer.appendChild(catImage);
    };
}

//function to display heart yippie gif me thinks 
function displayyippie.gif() {
    //clear  exisiting content in the image container
    document.getElementById('image-container').innerHTML = '';
    //get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    //new image element to yippie cat
    var yippieImage = new image();
    //set the source for the file path 
    yippieImage.src = 'yippie.gif';
    //set alternative text for image 
    yippieImage.alt = 'yippie';
    //when fully loaded add to image container
    yippieImage.onload = function () {
        imageContainer.appendChild(yippieImage);
        //hide options container
        document.getElementById('options'), style.display = 'none';
    };
}

//display the cat gif initially
displaycat();