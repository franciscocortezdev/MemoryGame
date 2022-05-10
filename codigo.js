const container = document.querySelector(".container");
const btnStart = document.querySelector(".btn-start");
const puntos = document.querySelector(".puntos");
const lives = document.querySelector(".lives");
const cards = [1,2,3,4,1,2,3,4];
var statusbtn = false;
var valor1, valor2;
var id1 = '';
var id2 = '';

btnStart.addEventListener('click', (e)=>{
    startcards();
});

container.addEventListener('click', (e)=>{
    //let btn = e.target.innerHTML;
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
                dropCards(valor1,valor2)
                puntos.innerHTML ++;
                if(puntos.innerHTML == 4){
                    setTimeout(() => {
                    puntos.innerHTML = 'Ganaste!'
                    puntos.classList.add('verde')
                    endGame();
                    }, 1000);
                    
                }
            }else{
                valor1 = '';
                valor2 = '';
                lives.innerHTML --;
                if(lives.innerHTML == 0){
                    puntos.innerHTML = 'Perdiste'
                    puntos.classList.add('rojo')
                    endGame();
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
    puntos.classList.remove('rojo')
    puntos.classList.remove('verde')
    lista = cards.sort(function() {return Math.random() - 0.5});
    for (let i =0; i < cards.length; i++){
        const card = document.querySelector(`.c${i}`);
        card.innerHTML = `<img class="container__item_img i${i}" src="./imgs/${cards[i]}.png" ></img>`;
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
    valor1 ='';
    valor2 ='';
    for (let i =0; i < cards.length; i++){
        const card = document.querySelector(`.c${i}`);
        card.innerHTML ='';
    }
}


const dropCards = (v1, v2)=>{
    for(let i=0; i<container.children.length;i++ ){
        if(container.children[i].children[0].src.includes(v1)){
            container.children[i].children[0].classList.add('items_hide_C')
        }   
    }
    valor1 ='';
    valor2 ='';
    statusbtn =false;
}

















