const container = document.querySelector(".container");
const btnStart = document.querySelector(".btn-start");
const puntos = document.querySelector(".puntos");
const gameResult = document.querySelector('.statusGame');
const lives = document.querySelector(".lives");
const audioCorrect = new Audio('./src/sounds/correct.wav');
const audioError = new Audio('./src/sounds/error.wav');
const cards = [1,2,3,4,1,2,3,4];
var statusbtn = false;
var valor1, valor2;
var id1 = '';
var id2 = '';

btnStart.addEventListener('click', (e)=>{
  e.target.innerHTML='Reiniciar Juego';
    startcards();
});

container.addEventListener('click', (e)=>{
   
    let btn = e.target.src;
    let key = e.target.classList[1];
    compare(btn, key);
    e.target.classList.add("items_hover");

        setTimeout(function(){
        e.target.classList.remove("items_hover");
        
        }, 2000);

});



const compare = (btn, key)=>{

    if (statusbtn == false ){
        valor1 = btn;
        id1 = key;
        statusbtn = true;
    }else{
        valor2 = btn;
        id2 = key;
        statusbtn= false;
    }

    if(id1 != id2){
        if (valor2 != '' && valor2 != undefined){
            if (valor1 == valor2){
                audioCorrect.play();
                dropCards(valor1)
                puntos.innerHTML ++;
                if(puntos.innerHTML == 4){
                  gameResult.innerHTML='Ganaste';
                  gameResult.classList.add('verde')
                    setTimeout(() => {
                      

                    gameResult.innerHTML = ''
                    gameResult.classList.remove('verde')
                    endGame();
                    }, 3000);
                    
                }
            }else{
                audioError.play();
                valor1 = '';
                valor2 = '';
                lives.innerHTML --;
                if(lives.innerHTML == 0){
                  gameResult.innerHTML='Perdiste';
                  gameResult.classList.add('rojo')
                    setTimeout(() => {
                      

                    gameResult.innerHTML = ''
                    gameResult.classList.remove('rojo')
                    endGame();
                    }, 3000);
                }
            }
        }
    }else{  
    }
}

const startcards = ()=>{
    valor1 ='';
    valor2 ='';
    statusbtn =false;
    puntos.innerHTML = 0;
    lives.innerHTML = 3;
   
    lista = cards.sort(function() {return Math.random() - 0.5});
    for (let i =0; i < cards.length; i++){
        const card = document.querySelector(`.c${i}`);
        card.innerHTML = `<img class="container__item_img i${i}" src="./src/imgs/${cards[i]}.png" ></img>`;
        container.children[i].children[0].classList.remove('items_hide_C');
        container.children[i].children[0].classList.remove('items_hide');
    }
        setTimeout(function(){
            for(let i =0; i < cards.length; i++){
                container.children[i].children[0].classList.add('items_hide');              
            }        
        }, 2000);
}

const endGame = ()=>{
    btnStart.innerHTML='Empezar Juego';
    valor1 ='';
    valor2 ='';
    for (let i =0; i < cards.length; i++){
        const card = document.querySelector(`.c${i}`);
        card.innerHTML ='';
    }
}


const dropCards = (v1)=>{
    for(let i=0; i<container.children.length-1;i++ ){
        
        if(container.children[i].children[0].src.includes(v1)){
            container.children[i].children[0].classList.add('items_hide_C')
        }   
    }
    valor1 ='';
    valor2 ='';
    statusbtn =false;
}

















