const KLEIN = 5;
const MIDDEL = 7;
const GROOT = 10;
const pizzaMeer = "pizza's"

var countKlein = 0;
var countMiddel = 0;
var countGroot = 0;

var clicksPizzas = [0, 0, 0]



function pizzaCalc(id) {
    clicksPizzas[id] += 1;
    if (id === 0) {
        countKlein++
        if (countKlein => 1) {

            var btnPlus = document.createElement('button');
            var btnMin = document.createElement('button');
            btnMin.id = 'buttonMinus';
            btnPlus.id = 'buttonPlus';
            btnMin.innerText = '-';
            btnPlus.innerText = '+';
            btnMin.setAttribute("onClick", "pizzaChangeDown();");
            btnPlus.setAttribute("onClick", "pizzaChangeUp();");

            var div = document.getElementById("kleinContainer")

            if (!document.body.contains(document.getElementById('buttonMinus'))) {
                div.appendChild(btnMin);
                div.appendChild(btnPlus);
            }
        }
        if (countKlein == 2) {
            document.getElementById("pizzaKlein").innerHTML = pizzaMeer
        }
        var totaalKlein = countKlein * KLEIN;
        document.getElementById("totaalPrijsKlein").innerHTML = totaalKlein + " Euro";
        document.getElementById("totaalKlein").innerHTML = countKlein;
    } else if (id === 1) {
        countMiddel++
        if (countMiddel => 1) {

            var btnPlus = document.createElement('button');
            var btnMin = document.createElement('button');
            btnMin.id = 'buttonMinus';
            btnPlus.id = 'buttonPlus';
            btnMin.innerText = '-';
            btnPlus.innerText = '+';
            btnMin.setAttribute("onClick", "pizzaChangeDown();");
            btnPlus.setAttribute("onClick", "pizzaChangeUp();");

            var div = document.getElementById("middelContainer")

            if (!document.body.contains(document.getElementById('buttonMinus'))) {
                div.appendChild(btnMin);
                div.appendChild(btnPlus);
            }
        }
        if (countMiddel == 2) {
            document.getElementById("pizzaMiddel").innerHTML = pizzaMeer
        }
        var totaalMiddel = countMiddel * MIDDEL;
        document.getElementById("totaalPrijsMiddel").innerHTML = totaalMiddel + " Euro";
        document.getElementById("totaalMiddel").innerHTML = countMiddel;
    } else if (id === 2) {
        countGroot++
        if (countGroot == 2) {
            document.getElementById("pizzaGroot").innerHTML = pizzaMeer
        }
        var totaalGroot = countGroot * GROOT;
        document.getElementById("totaalPrijsGroot").innerHTML = totaalGroot + " Euro";
        document.getElementById("totaalGroot").innerHTML = countGroot;
    }

    var totaal = countKlein * KLEIN + countMiddel * MIDDEL + countGroot * GROOT;
    document.getElementById("totaal").innerHTML = totaal + " Euro";

}

//Function +- when added pizza to cart.
function pizzaChangeUp() {
    document.getElementById("totaalKlein").innerHTML = countKlein;


    if (countKlein => 1) {
        countKlein++
        document.getElementById("totaalKlein").innerHTML = countKlein;
        var totaalKlein = countKlein * KLEIN;
        document.getElementById("totaalPrijsKlein").innerHTML = totaalKlein + " Euro";
        document.getElementById("totaalKlein").innerHTML = countKlein
    }

    if (countMiddel){
        countMiddel++
        document.getElementById("totaalMiddel").innerHTML = countMiddel;
        
    }

}

function pizzaChangeDown() {
    document.getElementById("totaalKlein").innerHTML = countKlein;
    if (countKlein > 0) {
        countKlein--
        document.getElementById("totaalKlein").innerHTML = countKlein;
        var totaalKlein = countKlein * KLEIN;
        document.getElementById("totaalPrijsKlein").innerHTML = totaalKlein + " Euro";
        document.getElementById("totaalKlein").innerHTML = countKlein
        if (countKlein === 0) {
            document.getElementById("buttonPlus").remove();
            document.getElementById("buttonMinus").remove();
        }
    }


}