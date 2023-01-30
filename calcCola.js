var numero = [];
var k=0;
var num1=0;
var num2=0;
var tot=0;
var operatoreIniz=0;
var operatore;

//aggiunge le cifre all'array
$(".digits").click(function() {
    var fired_button = $(this).val();
    numero.push(fired_button);
    document.getElementById('digitato').innerText = numero.join('');
});

//digitando un operatore verifica se si tratta di operazioni consecutive
function operazione (operatore) {
    if (operatoreIniz<1) {
    completaNumero();
    num1=k;
    operatoreIniz=operatore;
    numero = [];
    numero.length=0;
    //document.getElementById('digitato').innerText = 0; da inserire se 0 alla pressione dell'operatore
    } else {
        
        totale();
        numero = [];
        numero.length=0;
        num1=tot;
        operatoreIniz=operatore;
    }
}

//completa le operazioni col tasto =
function totale () {
    completaNumero();
    num2=parseInt(k);
    num1=parseInt(num1);
    switch(operatoreIniz) {
        case 1:
            tot=num1+num2;
        break;
        case 2:
            tot=num1-num2;
        break;
        case 3:
            tot=num1*num2;
        break;
        case 4:
            tot=num1/num2;
        break;
    }
    document.getElementById('digitato').innerText = tot;
}

//trasforma l'array in numero
function completaNumero() {
    var i = parseInt(0); 
    k = parseInt(0);
    var n = parseInt(numero.length);
    var l = parseInt(0);
    var p = parseInt(0);
    var potenze =parseInt(0);

    for (i = n; i > 0; i--){
        l =parseInt(numero[i-1]);
        p = parseInt(Math.pow(10, potenze));
        k = k + (p * l);
        potenze++;
    }
}