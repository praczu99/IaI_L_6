let button = document.querySelector('#bg');

//załączenie nasłuchiwacza
button.addEventListener('click', ()=> {
  //pobranie referencji do tła strony
  let body = document.getElementsByTagName('body')[0];

  //zmiana tła strony - losowanie kolorów
  body.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
});
