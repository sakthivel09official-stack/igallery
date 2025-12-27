# Ex.07 Design of Interactive Image Gallery
## Date:27/12/2025

## AIM:
To design a web application for an inteactive image gallery for a minimum five images with next and previous buttons.

## DESIGN STEPS:

### Step 1:
Clone the github repository and create Django admin interface.

### Step 2:
Change settings.py file to allow request from all hosts.

### Step 3:
Use CSS for positioning and styling.

### Step 4:
Write JavaScript program for implementing interactivity.

### Step 5:
Validate the HTML and CSS code.

### Step 6:
Publish the website in the given URL.

## PROGRAM:
```
pic.html
<html >
<head>
    
    <title>Interactive Image Gallery</title>
    <link rel="stylesheet" href="pic.css">
</head>
<body>

    <header>
        <h1>Interactive Image Gallery</h1>
    </header>

    <div class="gallery-container">
        <img id="galleryImage" src="bmw f90.webp" alt="Gallery Image">
        <p id="caption">BMW F90</p>

        <div class="buttons">
            <button onclick="prevImage()">Previous</button>
            <button onclick="nextImage()">Next</button>
        </div>
    </div>

    <footer>
        Designed & Developed by SAKTHIVEL B(25004373) &COPY 2025
    </footer>

    <script src="scripts.js"></script>
</body>
</html>

scripts.js
let images = [
    {
        src: "bmw f90.webp",
        caption: "BMW F90 M5"
    },
    {
        src: "gt virtus.avif",
        caption: "GT VIRTUS"
    },
    {
        src: "koenigsegg jesko.jpg",
        caption: "KOENIGSEGG JESKO"
    },
    {
        src: "mercedes amg.jpg",
        caption: "MERCEDES AMG"
    },
    {
        src: "porsche 911.jpg",
        caption: "PORSCHE 911"
    }
];

let currentIndex = 0;

function showImage() {
    document.getElementById("galleryImage").src = images[currentIndex].src;
    document.getElementById("caption").innerText = images[currentIndex].caption;
}

function nextImage() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    showImage();
}

function prevImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    showImage();
}

pic.css
body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #ff00a6;
    text-align: center;
}

header {
    background-color: #f2ff00;
    color: white;
    padding: 15px;
    font-size: 22px;
}

.gallery-container {
    background: rgb(255, 170, 0);
    width: 350px;
    margin: 80px auto;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.15);
}

.gallery-container img {
    width: 100%;
    border-radius: 10px;
}

#caption {
    margin: 12px 0;
    font-weight: bold;
}

.buttons {
    margin-top: 10px;
}

button {
    padding: 8px 16px;
    margin: 5px;
    border: none;
    background-color: #00ff91;
    color: rgb(238, 48, 127);
    border-radius: 6px;
    cursor: pointer;
}

button:hover {
    background-color: #00ffd9;
}

footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #02fde0;
    color: rgb(255, 0, 149);
    padding: 10px;
    font-size: 14px;
}
```

## OUTPUT:
![alt text](<Screenshot (58).png>) 
![alt text](<Screenshot (59).png>) 
![alt text](<Screenshot (60).png>) 
![alt text](<Screenshot (61).png>)
![alt text](<Screenshot (62).png>)
## RESULT:
The program for designing an interactive image gallery using HTML, CSS and JavaScript is executed successfully.
