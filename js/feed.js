// const moreEvent = document.querySelector('#more');
// const listaCards = document.querySelector('.cards');

// moreEvent.onclick = () => {
//   listaCards.innerHTML += document.querySelector('.card');

// }


const imageHeart = document.querySelector('.like img');
imageHeart.onclick = () => {
  if(imageHeart.src == './img/red-heart.png'){
    imageHeart.src = './img/icons/heart.svg';
  }else{
    imageHeart.src = './img/red-heart.png';
  }  
}

