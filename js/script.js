let images = ['http://wallpapers-image.ru/2560x1600/cars/wallpapers/wallpapers-cars-019.jpg',
    'http://wallpapers-image.ru/2560x1600/cars/wallpapers/wallpapers-cars-023.jpg',
    'http://wallpapers-image.ru/2560x1600/cars/wallpapers/wallpapers-cars-09.jpg'
];

let slider = document.querySelector('#slider');
let i = 0;
let img = document.createElement('img');

setInterval(() => {
    img.src = images[i];
    document.body.append(img);
    img.height = 200;
    i++;
    if (i == images.length) {
        i = 0;
    }
    console.log(i);
}, 1000)