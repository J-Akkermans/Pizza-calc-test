const KLEIN = 5;
const MIDDEL = 7;
const GROOT = 10;
const pizzaMeer = "pizza's"

var countKlein = 0;
var countMiddel = 0;
var countGroot = 0;

var clicksPizzas = [0, 0, 0]

var buttonIds = ['buttonKleinPlus', 'buttonKleinMinus', 'buttonMiddlePlus', 'buttonMiddelMinus', 'buttonMiddelMGroot', 'buttonGrootMinus']

function pizzaCalc(id) {
    clicksPizzas[id] += 1;
    //Knop 1
    if (id === 0) {
        countKlein++
        if (countKlein => 0) {
            //Kijken of er nog geen knop staat.
            if (!document.body.contains(document.getElementById('buttonKleinMinus'))) { //Kijken of het document de button al heeft.
                var div = document.getElementById("kleinContainer");
                var btnKleinPlus = document.createElement('button'); //Maak button aan
                var btnKleinmin = document.createElement('button');
                btnKleinPlus.id = buttonIds[0]; //Geef id aan button uit array
                btnKleinmin.id = buttonIds[1];
                btnKleinPlus.innerText = ' + '; //Tekst van de gemaakte button
                btnKleinmin.innerText = '- ';
                div.appendChild(btnKleinPlus);
                div.appendChild(btnKleinmin);
                btnKleinPlus.setAttribute("onClick", "editOrder(id);");
                btnKleinmin.setAttribute("onClick", "editOrder(id);");
            }
        }
        if (countKlein == 2) {
            document.getElementById("pizzaKlein").innerHTML = pizzaMeer
        }

        var totaalKlein = countKlein * KLEIN;
        document.getElementById("totaalPrijsKlein").innerHTML = totaalKlein + " Euro";
        document.getElementById("totaalKlein").innerHTML = countKlein;
        //Knop 2
    } else if (id === 1) {
        countMiddel++
        if (countMiddel => 0) {
            //Kijken of er nog geen knop staat.
            if (!document.body.contains(document.getElementById('buttonMiddelMinus'))) { //Kijken of het document de button al heeft.
                var div2 = document.getElementById("middelContainer");
                var btnMiddelPlus = document.createElement('button'); //Maak button aan
                var btnMiddelMin = document.createElement('button');
                btnMiddelPlus.id = buttonIds[2]; //Geef id aan button uit array
                btnMiddelMin.id = buttonIds[3];
                btnMiddelPlus.innerText = '+'; //Tekst van de gemaakte button
                btnMiddelMin.innerText = '-';
                div2.appendChild(btnMiddelPlus);
                div2.appendChild(btnMiddelMin);
                btnMiddelPlus.setAttribute("onClick", "editOrder(id);");
                btnMiddelMin.setAttribute("onClick", "editOrder(id);");
            }
        }
        var totaalMiddel = countMiddel * MIDDEL;
        document.getElementById("totaalPrijsMiddel").innerHTML = totaalMiddel + " Euro";
        document.getElementById("totaalMiddel").innerHTML = countMiddel;

        //Knop 3
    } else if (id === 2) {
        countGroot++
        if (countGroot => 0) {
            //Kijken of er nog geen knop staat.
            if (!document.body.contains(document.getElementById('buttonGrootMinus'))) { //Kijken of het document de button al heeft.
                var div3 = document.getElementById("grootContainer");
                var btnGrootPlus = document.createElement('button'); //Maak button aan
                var btnGrootMin = document.createElement('button');
                btnGrootPlus.id = buttonIds[4]; //Geef id aan button uit array
                btnGrootMin.id = buttonIds[5];
                btnGrootPlus.innerText = '+'; //Tekst van de gemaakte button
                btnGrootMin.innerText = '-';
                div3.appendChild(btnGrootPlus);
                div3.appendChild(btnGrootMin);
                btnGrootPlus.setAttribute("onClick", "editOrder(id);");
                btnGrootMin.setAttribute("onClick", "editOrder(id);");
            }
        }
        var totaalGroot = countGroot * GROOT;
        document.getElementById("totaalPrijsGroot").innerHTML = totaalGroot + " Euro";
        document.getElementById("totaalGroot").innerHTML = countGroot;
    }
    var totaal = countKlein * KLEIN + countMiddel * MIDDEL + countGroot * GROOT;
    document.getElementById("totaal").innerHTML = totaal + " Euro";
}



var clicksButtons = [0, 0, 0, 0, 0, 0]

// var buttonIds = ['buttonKleinPlus', 'buttonKleinMinus', 'buttonMiddlePlus', 'buttonMiddelMinus', 'buttonMiddelMGroot', 'buttonGrootMinus']


function editOrder(id2) {
    clicksButtons[id2] += 1;
    if (id2 === 'buttonKleinPlus') {
        countKlein++
        var totaalKlein = countKlein * KLEIN;
        document.getElementById("totaalPrijsKlein").innerHTML = totaalKlein + " Euro";
        document.getElementById("totaalKlein").innerHTML = countKlein
    } else if (id2 === 'buttonKleinMinus') {
        if (countKlein === 1) {
            document.getElementById(buttonIds[0]).remove();
            document.getElementById(buttonIds[1]).remove();
        }
        if (countKlein > 0) {
            countKlein--
            var totaalKlein = countKlein * KLEIN;
            document.getElementById("totaalPrijsKlein").innerHTML = totaalKlein + " Euro";
            document.getElementById("totaalKlein").innerHTML = countKlein
        }
    }
    if (id2 === 'buttonMiddlePlus') {
        countMiddel++
        var totaalMiddel = countMiddel * MIDDEL;
        document.getElementById("totaalPrijsMiddel").innerHTML = totaalMiddel + " Euro";
        document.getElementById("totaalMiddel").innerHTML = countMiddel;
    } else if (id2 === 'buttonMiddelMinus') {
        if (countMiddel === 1) {
            document.getElementById(buttonIds[2]).remove();
            document.getElementById(buttonIds[3]).remove();
        }
        if (countMiddel > 0) {
            countMiddel--
            var totaalMiddel = countMiddel * MIDDEL;
            document.getElementById("totaalPrijsMiddel").innerHTML = totaalMiddel + " Euro";
            document.getElementById("totaalMiddel").innerHTML = countMiddel;
        }

    }
    if (id2 === 'buttonMiddelMGroot') {
        countGroot++
        var totaalGroot = countGroot * GROOT;
        document.getElementById("totaalPrijsGroot").innerHTML = totaalGroot + " Euro";
        document.getElementById("totaalGroot").innerHTML = countGroot;
    } else if (id2 === 'buttonGrootMinus') {
        if (countGroot === 1) {
            document.getElementById(buttonIds[4]).remove();
            document.getElementById(buttonIds[5]).remove();
        }
        if (countGroot > 0) {
            countGroot--
            var totaalGroot = countGroot * GROOT;
            document.getElementById("totaalPrijsGroot").innerHTML = totaalGroot + " Euro";
            document.getElementById("totaalGroot").innerHTML = countGroot;
        }
    }

    var totaal = countKlein * KLEIN + countMiddel * MIDDEL + countGroot * GROOT;
    document.getElementById("totaal").innerHTML = totaal + " Euro";

}

