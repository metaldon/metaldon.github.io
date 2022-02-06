var cmd;
var cmddh;
var screen;
var mem_screen;

cmd = document.querySelectorAll('.cmd_button');
cmddh = document.querySelectorAll('.cmd_button_dh');
mem_screen = document.querySelector('.mem_screen');

//efface le contenue le l'ecran lorsque CE est declenche
function forclear() {
    document.querySelector('.screen').innerHTML ="0";
}
 
//remplace le 0 par l'espace si 0 est present avant le debut de chaque operation
function removeZero() {
    var value = document.querySelector('.screen').innerHTML;
    if (value == "0") {
        value = "";
        document.querySelector('.screen').innerHTML = value;
    }
}
// mettre a jour la valeur de l'ecran de sortie avec la valeur ou l'operateur qui est declenche
function fordisplay(value) {
    removeZero();
    document.querySelector('.screen').innerHTML += value;
}
 // affiche la sortie lorsque le bouton "=" est declenche
function solve() {
    removeZero();
    var equation =  document.querySelector('.screen').innerHTML;
    var resolue = eval(equation);
    document.querySelector('.screen').innerHTML = resolue;

}
