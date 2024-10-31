const imageGallery = document.getElementById('image-gallery');

const images = [
    "IMG_5938.jpeg",
    "IMG_5359.jpeg",
    "IMG_5361.jpeg",
    "IMG_5362.jpeg",
    "IMG_5935.jpeg",
    "IMG_5937.jpeg",
    "IMG_5940.jpeg",
    "IMG_5941.jpeg",
    "IMG_5942.jpeg",
    "IMG_5943.jpeg",
    "IMG_5944.jpeg",
    "IMG_5947.jpeg",
    "IMG_5948.jpeg",
    "IMG_5949.jpeg",
    "IMG_5953.jpeg",
    "IMG_5955.jpeg",
    "IMG_5957.jpeg",
    "IMG_5959.jpeg",
    "IMG_5960.jpeg",
    "IMG_5964.jpeg",
    "IMG_5968.jpeg",
    "IMG_5970.jpeg",
    "IMG_5971.jpeg",
    "IMG_5984.jpeg",
    "IMG_5985.jpeg",
    "IMG_5987.jpeg",
    "IMG_9624.jpeg",
    "IMG_9650.jpeg",
    "IMG_9659.jpeg",
    "IMG_9660.jpeg",
    "IMG_9669.jpeg"
];

images.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = `images/${image}`;
    imgElement.alt = image;
    imgElement.title = image;
    imageGallery.appendChild(imgElement);
});