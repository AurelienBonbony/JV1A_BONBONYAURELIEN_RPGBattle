//Igor
var pvIgoraff = document.getElementById("pvIgor");
var manaIgor = document.getElementById("manaIgor");
var imageIgor = document.getElementById("imageIgor");
var pvIgor = 75

//Franky
var pvFrankyaff = document.getElementById("pvFranky");
var manaFranky = document.getElementById("manaFranky");
var imageFranky = document.getElementById("imageFranky");
var pvFranky = 60

//Koma
var pvKomaaff = document.getElementById("pvKoma");
var manaKoma = document.getElementById("manaKoma");
var imageKoma = document.getElementById("imageKoma");
var pvKoma = 45

//Hylo
var pvHyloaff = document.getElementById("pvHylo");
var manaHylo = document.getElementById("manaHylo");
var imageHylo = document.getElementById("imageHylo");
var pvHylo = 50

//PV Monstres
var pvMonstre1aff = document.getElementById("pvMonstre1");
var pvMonstre2aff = document.getElementById("pvMonstre2");
var pvMonstre3aff = document.getElementById("pvMonstre3");

var pvMonstre1 = 100;
var pvMonstre2 = 120;
var pvMonstre3 = 110;


// IMAGE Monstres
var imageMonstre1 = document.getElementById("imageMonstre1")
var imageMonstre2 = document.getElementById("imageMonstre2")
var imageMonstre3 = document.getElementById("imageMonstre3")


//BOUTONS
var attaque = document.getElementById("attack");
var défense = document.getElementById("défendre");
var speciale = document.getElementById("speciale");


//Boite de dialogue
var dialogue = document.getElementById("dialogue");

//Compteur de tour
var tourJoueur = 0

//Fonction riposte
function riposte(i) {
    setTimeout(function(){
        //Selectionne un héro et enlève des PV
        aleatoire = Math.floor(Math.random() * 4);
    if (aleatoire == 0) {
        pvIgor -= 5;
        dialogue.innerHTML = "Igor a perdu 5PV !";
        if (pvIgor <= 0) {
            imageIgor.style.transform = "rotate(-90deg)";
            dialogue.innerHTML = "Igor est mort...";
        }
    }
    if (aleatoire == 1) {
        pvKoma -= 5;
        dialogue.innerHTML = "Koma a perdu 5PV !";
        if (pvKoma <= 0) {
            imageKoma.style.transform = "rotate(-90deg)";
            dialogue.innerHTML = "Koma est morte...";


        }
    }
    if (aleatoire == 2) {
        pvHylo -= 5;
        dialogue.innerHTML = "Hylo a perdu 5PV !";
        if (pvHylo <= 0) {
            imageHylo.style.transform = "rotate(-90deg)";
            dialogue.innerHTML = "Hylo est morte...";


        }
    }
    if (aleatoire == 3) {
        pvFranky -= 5;
        dialogue.innerHTML = "Franky a perdu 5PV !";
        if (pvFranky <= 0) {
            imageFranky.style.transform = "rotate(-90deg)";
            dialogue.innerHTML = "Franky est mort...";


        }
    }
    pvIgoraff.innerHTML = pvIgor
    pvKomaaff.innerHTML = pvKoma
    pvHyloaff.innerHTML = pvHylo
    pvFrankyaff.innerHTML = pvFranky
    }, 2000 * (i+1));
    //Selectionne un héro et enlève des PV
    
}


attaque.onclick = function () {

    //Selectionne un monstre et enlève des PV
    aleatoire = Math.floor(Math.random() * 3);
    if (aleatoire == 0) {
        pvMonstre1 -= 10;
        dialogue.innerHTML = "Monstre 1 a perdu 10PV !";
        if (pvMonstre1 <= 0) {
            imageMonstre1.style.transform = "rotate(-90deg)";
            dialogue.innerHTML = "Monstre 1 a été terrassé";

        }
    }
    if (aleatoire == 1) {
        pvMonstre2 -= 10;
        dialogue.innerHTML = "Monstre 2 a perdu 10PV !";
        if (pvMonstre2 <= 0) {
            imageMonstre2.style.transform = "rotate(-90deg)";
            dialogue.innerHTML = "Monstre 2 a été terrassé";
        }
    }
    if (aleatoire == 2) {
        pvMonstre3 -= 10;
        dialogue.innerHTML = "Monstre 3 a perdu 10PV !";
        if (pvMonstre3 <= 0) {
            imageMonstre3.style.transform = "rotate(-90deg)";
            dialogue.innerHTML = "Monstre 3 a été terrassé";
        }
    }
    pvMonstre1aff.innerHTML = pvMonstre1;
    pvMonstre2aff.innerHTML = pvMonstre2;
    pvMonstre3aff.innerHTML = pvMonstre3;
    //Selectionne un monstre et enlève des PV

    // Tour des joueurs et animation
    if (tourJoueur == 0) {
        imageHylo.animate([
            // Mouvement
            { transform: 'translateX(0)' },
            { transform: 'translateX(-50px)' },
            { transform: 'translateX(0px)' },
        ], {
            // Durée
            duration: 200,

        });
    }
    if (tourJoueur == 1) {
        imageIgor.animate([
            // Mouvement
            { transform: 'translateX(0)' },
            { transform: 'translateX(-50px)' },
            { transform: 'translateX(0px)' },
        ], {
            // Durée
            duration: 200,

        });
    }
    if (tourJoueur == 2) {
        imageFranky.animate([
            // Mouvement
            { transform: 'translateX(0)' },
            { transform: 'translateX(-50px)' },
            { transform: 'translateX(0px)' },
        ], {
            // Durée
            duration: 200,

        });
    }
    if (tourJoueur == 3) {
        imageKoma.animate([
            // Mouvement
            { transform: 'translateX(0)' },
            { transform: 'translateX(-50px)' },
            { transform: 'translateX(0px)' },
        ], {
            // Durée
            duration: 200,

        });
    }
    tourJoueur += 1
    if (tourJoueur > 3) {
        tourJoueur = 0;
        for (i=0;i<3;i++){
            riposte(i)

        }
        


    }

}
