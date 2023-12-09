// HEIGHT E WIDTH
// Estas são propriedades e métodos dos objetos Element e HTMLElement, a maioria delas são Read Only

// const section = document.querySelector('.animais');

// section.clientHeight; // height + padding
// section.offsetHeight; // height + padding + border
// section.scrollHeight; // height total, mesmo dentro de scroll

const listaAnimais = document.querySelector('.animais-lista')
const height = listaAnimais.scrollHeight;
//console.log(height);


// console.log(listaAnimais.clientHeight)

// const listaAnimais = document.querySelectorAll('.animais')

// // Mesma coisa para o Width, clientWidth ...

// // OFFSETTOP E OFFSETLEFT
// const section = document.querySelector('.animais');

// // Distância entre o topo do elemento e o topo da página
// section.offsetTop;

// // Distância entre o canto esquerdo do elemento
// // e o canto esquerdo da página
// section.offsetLeft;



const animaisTop = listaAnimais.offsetTop;
//console.log(animaisTop)

const primeiroh2 = document.querySelector('h2');
const h2left = primeiroh2.offsetLeft;
const h2rect = primeiroh2.offsetLeft;

//console.log(h2left)


// GETBOUNDINGCLIENTRECT()
// // Método que retorna um objeto com valores de width, height, distâncias do elemento e mais.

// const section = document.querySelector('.animais');

// const rect = section.getBoundingClientRect();
// rect.height; // height do elemento
// rect.width; // width do elemento
// rect.top; // distância entre o topo do elemento e o scroll

const rect = primeiroh2.getBoundingClientRect();
//console.log(rect)


// //WINDOW
// window.innerWidth; // width do janela
// window.outerWidth; // soma dev tools também
// window.innerHeight; // height do janela
// window.outerHeight; // soma a barra de endereço

// window.pageYOffset; // distância total do scroll vertical
// window.pageXOffset; // distância total do scroll horizontal

// if(window.innerWidth < 600) {
//   console.log('Tela menor que 600px');
// }
const h2react = primeiroh2.getBoundingClientRect();


//console.log(h2react.top);

if(h2react.top < 0) {
  //console.log('Passou no elemento')
}
//   window.innerWidth,
//   window.innerHeight,
//   window.outerHeight,
//   window.outerWidth,
// )

// MATCHMEDIA();
// //Utilize um media-querie como no CSS para verificar a largura do browser

// const small = window.matchMedia('(max-width: 600px)');

// if(small.matches) {
//   console.log('Tela menor que 600px')
// } else {
//   console.log('Tela maior que 600px')
// }

// // DICA
// // Selecione o elemento no inspetor (dom)

// // Abra o console e digite $0 para selecionar o mesmo

// // Os elementos selecionados anteriormente são $1, $2 ...



// // EXERCÍCIO
// // Verifique a distância da primeira imagem
// // em relação ao topo da página
const primeiraImagem = document.querySelector('img');
const distancia = primeiraImagem.offsetTop
console.log(distancia);

// // Retorne a soma da largura de todas as imagens
function somaImagens(){
const imgs = document.querySelectorAll('img');
imgs.forEach((imagem) => {
  console.log(imagem.offsetWidth)
}); 
}

window.onload = function() {
  somaImagens();
}




// // Verifique se os links da página possuem
// // o mínimo recomendado para telas utilizadas
// // com o dedo. (48px/48px de acordo com o google)

// // Se o browser for menor que 720px,
// // adicione a classe menu-mobile ao menu