



//devo fare un array con le immagini, pero per farlo devo prima trasformarle in variabili

const imageList = ["img/01.webp","img/02.webp","img/03.webp","img/04.webp","img/05.webp"];

const imageCarousel = document.getElementById(`imageCarousel`)


console.log(imageList[0]);

console.log(imageList[1]);

console.log(imageList[2]);

console.log(imageList[3]);

console.log(imageList[4]);

for (let i = 0; i < imageList.length; i++){

    const newImg = document.createElement('img');
    newImg.innerHTML = '' + `<img src="${i}">`;

    console.log(i);

    imageCarousel.append(newImg);
}