




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
        if(countKlein => 1){

            var btnPlus = document.createElement('button');
            var btnMin = document.createElement('button');
            btnPlus.id = 'test';
            btnMin.id = 'test1';
            btnMin.innerText = '-';
            btnPlus.innerText = '+';
            var div = document.getElementById("container")
            var tester = "BUTTON"
            div.appendChild(btnMin);
            div.appendChild(btnPlus);
            // document.getElementById('markup').innerText = btn.outerHTML;


        }
        if (countKlein == 2) { 
            document.getElementById("pizzaKlein").innerHTML = pizzaMeer 
        }
        var totaalKlein = countKlein * KLEIN; 
        document.getElementById("totaalPrijsKlein").innerHTML = totaalKlein + " Euro"; 
        document.getElementById("totaalKlein").innerHTML = countKlein; 
    }
    else if (id === 1) { 
        countMiddel++ 
        if (countMiddel == 2) {
            document.getElementById("pizzaMiddel").innerHTML = pizzaMeer 
        }
        var totaalMiddel = countMiddel * MIDDEL;
        document.getElementById("totaalPrijsMiddel").innerHTML = totaalMiddel + " Euro"; 
        document.getElementById("totaalMiddel").innerHTML = countMiddel; 
    }
    else if (id === 2) { 
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
