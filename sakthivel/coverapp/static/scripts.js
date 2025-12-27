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
