



//devo fare un array con le immagini, pero per farlo devo prima trasformarle in variabili

const imageList = [
    "img/01.webp",
    "img/02.webp",
    "img/03.webp",
    "img/04.webp",
    "img/05.webp"
];

const imageCarousel = document.getElementById(`imageCarousel`)

console.log(imageList);

for (let i = 0; i < imageList.length; i++){

    const newImg = document.createElement("div");
    
    if(i === 0 ) {

        newImg.innerHTML = `<img src="${imageList[i]}">`;
        newImg.classList.add("_image");
        newImg.classList.add("selected");

    }
      
    else{
        newImg.innerHTML = `<img src="${imageList[i]}">`;
        newImg.classList.add("_image");
    }

    console.log(i);

    imageCarousel.append(newImg);
}

const _Button = document.getElementById('_Button');

_Button.addEventListener('click', function() {

    alert('cliccato');
   
    

});