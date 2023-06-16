



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

let j = 0;

const _Button = document.getElementById('_Button');

_Button.addEventListener('click', function() {

    j += 1;

    alert('cliccato');

    //sto bastardo deve capire che deve mettere la classe all'immagine dopo togliendola a quella prima
    //abbiamo un modo per definirle? si, l'array
    //e ora che le conosciamo che cazzo ci facciamo?


        let next = document.getElementsByClassName(`_image`);

        console.log(next);
        
        
            if(j === 1 ) {

                
                next[0].classList.remove('selected');
                next[1].classList.add('selected');
                console.log(i);
                
            }
            
            else if(j === 2 ){
                
                
                next[1].classList.remove('selected');
                next[2].classList.add('selected');
                console.log(i);

            }

            else if(j === 3 ){
                
                
                next[2].classList.remove('selected');
                next[3].classList.add('selected');
                console.log(i);

            }

            else{

                next[3].classList.remove('selected');
                next[4].classList.add('selected');
                console.log(i);

            }
    
});