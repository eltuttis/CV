document.body.onload = addElement;

function getRandomInt() {
    return Math.random()*100;
    }

function addElement() {
    for (i = 1; i <= 10; i++){
        let div = document.createElement('div');
        div.classList.add('card_' + i);
        
        //AÑADE EL DIV ANTES DEL TEXTO
        /*var burbujas = document.getElementById("burbujas");
        document.body.insertAdjacentHTML(div,burbujas);*/
        //AÑADE EL DIV DESPUES DEL TEXTO
        document.getElementById("burbujas").appendChild(div);
        $('.card_' + i).css("margin-left", `${getRandomInt()}%`)

        console.log()
     }
}        

/*while (t++ == 5){

} */   
   