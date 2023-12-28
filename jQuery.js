document.body.onload = addElement;

function getRandomInt() {
    return Math.random()*100;
    }

function addElement() {
    for (i = 1; i <= 10; i++){
        let div = document.createElement('div');
        div.classList.add('burbuja'+i);
        
        //AÑADE EL DIV ANTES DEL TEXTO
        /*var burbujas = document.getElementById("burbujas");
        document.body.insertAdjacentHTML(div,burbujas);*/
        j=getRandomInt();
        //AÑADE EL DIV DESPUES DEL TEXTO
        document.getElementById("burbujas").appendChild(div);
        $('.burbuja'+i).css("margin-left", `${j}%`)

        console.log(j)
     }
}        

/*while (t++ == 5){

} */   
   