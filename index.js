'use strict';

/*
    2. Írjatok egy kis javascript programot, mely megmozgat egy divet.
    A html oldalon hozzatok létre egy divet, mely négyzet alaku. Majd ezt a divet a számítógép nyíl billentyűivel
    mozgassátok meg.
        - ha a fel, le jobbra vagy balra nyilakat lenyomjuk, a div a megfelelő irányban mozduljon el 15 pixelt.
        - A mozgatás feltétele megfelelő pozicionálás. Azaz "position: relative" 
        - vízszintes illetve, függőleges, vagy a akár átlós mozgatásra a "top" és "left" css attributomakkal van lehetőség.
           position: relative vagy absolute esetében.
*/

const $get = i => document.getElementById(i);

function mozgat(id, xTengely, yTengely) {

    let elem = $get(id);

    elem.style.position = "absolute";

    elem.style.left = xTengely + 'px';
    elem.style.top = yTengely + 'px';
}


function esemeny() {
    
    document.addEventListener('keydown', keyPress);
}


$get("kocka").addEventListener("change", function () {
    $get("kocka").blur();
});


function keyPress(event) {
    let kod = event.keyCode;    

    let ID = $get("kocka").value;

    if (ID === "") {
        $get("figyelem").innerHTML = "<br>Nem választotta ki melyik négyzetet mozgassuk !";
        return;
    }

    $get("figyelem").innerHTML = "";

    let balra = $get(ID).offsetLeft;
    let top = $get(ID).offsetTop;

    //console.log(balra, top);
    
    switch (kod) {
        case 37:

            if (balra < 0) {
                break;
            }

            mozgat(ID, balra - 15, top);
            break;

        case 39:
            mozgat(ID, balra + 15, top);
            break;

        case 38:

            if (top < 0) {
                break;
            }

            mozgat(ID, balra, top - 15);
            break;

        case 40:
            mozgat(ID, balra, top + 15);
            break;
    }
}
esemeny();