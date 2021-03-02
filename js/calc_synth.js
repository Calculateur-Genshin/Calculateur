let origineRessource = document.getElementById("origine-ressource");
let monster = document.getElementById("monster");
let monsterOption = document.getElementById("monster_option");
let donjon = document.getElementById("donjon");
let donjonOption = document.getElementById("donjon_option");

let option_ressource = function() {
    if (origineRessource.value == "monstre") {
        monster.className = "";
        monsterOption.className = "";
        donjon.className = "disables";
        donjonOption.className = "disables";
    }
    else {
        monster.className = "disables";
        monsterOption.className = "disables";
        donjon.className = "";
        donjonOption.className = "";
    }
};

origineRessource.addEventListener("change", function() {
    option_ressource();
});

/* Ressource MONSTRE */

let inferieure = document.getElementById("inferieure");
let intermediaire = document.getElementById("intermediaire");
let superieure = document.getElementById("superieure");

let monsterWatcher = document.getElementById("monsterChoice1");
let monsterGuard = document.getElementById("monsterChoice2");

let commun = document.getElementById("commun");
let uncommon = document.getElementById("uncommon");
let rare = document.getElementById("rare");

let watcher = 0;

let monster_synth = function() {
    let infer = inferieure.value/3;
    uncommon.textContent = Math.floor(infer);
    infer = String(infer);

    if (infer.charAt(infer.length - 2) == 6) {
        commun.textContent = 2;
    }
    else if (infer == Math.floor(infer)) {
        commun.textContent = 0;
    }
    else if (infer.charAt(infer.length - 2) == 3) {
        commun.textContent = 1;
    }
    else {
        commun.textContent = 0;
    }
    infer = Number(infer);

    if (watcher == 1) {
        uncommon.textContent = Number(uncommon.textContent) + Number(intermediaire.value);
        rare.textContent = 0;
        return;
    }

    
    let inter = Number(intermediaire.value) + Number(uncommon.textContent);
    inter = inter/3;
    rare.textContent = Math.floor(inter);
    inter = String(inter);

    if (inter.charAt(inter.length - 2) == 6) {
        uncommon.textContent = 2;
    }
    else if (inter == Math.floor(inter)) {
        uncommon.textContent = 0;
    }
    else if (inter.charAt(inter.length - 2) == 3 ) {
        uncommon.textContent = 1;
    }
    else {
        uncommon.textContent = 0;
    }
    inter = Number(inter);

    let supe = superieure.value;
    rare.textContent = Number(supe) + Number(rare.textContent);
};

monsterWatcher.addEventListener("input", function() {
    watcher = 1;
    monster_synth();
})
monsterGuard.addEventListener("input", function() {
    watcher = 0;
    monster_synth();
})

inferieure.addEventListener('input', function() {
    monster_synth();
});
intermediaire.addEventListener('input', function() {
    monster_synth();
});
superieure.addEventListener('input', function() {
    monster_synth();
});

/* Ressource DONJON */

let etoile2 = document.getElementById("etoile2");
let etoile3 = document.getElementById("etoile3");
let etoile4 = document.getElementById("etoile4");
let etoile5 = document.getElementById("etoile5");

let donjonWatcher = document.getElementById("donjonChoice1");
let donjonGuard = document.getElementById("donjonChoice2");
let donjonWarrior = document.getElementById("donjonChoice3");

let star2 = document.getElementById("star2");
let star3 = document.getElementById("star3");
let star4 = document.getElementById("star4");
let star5 = document.getElementById("star5");

let inspector = 2;

let donjon_synth = function() {
    let infer = etoile2.value/3;
    star3.textContent = Math.floor(infer);
    infer = String(infer);

    if (infer.charAt(infer.length - 2) == 6) {
        star2.textContent = 2;
    }
    else if (infer == Math.floor(infer)) {
        star2.textContent = 0;
    }
    else if (infer.charAt(infer.length - 2) == 3) {
        star2.textContent = 1;
    }
    else {
        star2.textContent = 0;
    }
    infer = Number(infer);

    if (inspector == 1) {
        star3.textContent = Number(star3.textContent) + Number(etoile3.value);
        star4.textContent = 0;
        return;
    }

    
    let inter = Number(etoile3.value) + Number(star3.textContent);
    inter = inter/3;
    star4.textContent = Math.floor(inter);
    inter = String(inter);

    if (inter.charAt(inter.length - 2) == 6) {
        star3.textContent = 2;
    }
    else if (inter == Math.floor(inter)) {
        star3.textContent = 0;
    }
    else if (inter.charAt(inter.length - 2) == 3 ) {
        star3.textContent = 1;
    }
    else {
        star3.textContent = 0;
    }
    inter = Number(inter);

    if (inspector == 0) {
        star4.textContent = Number(star4.textContent) + Number(etoile4.value);
        star5.textContent = 0;
        return;
    }

    let supe = Number(etoile4.value) + Number(star4.textContent);
    supe = supe/3;
    star5.textContent = Math.floor(supe);
    supe = String(supe);

    if (supe.charAt(supe.length - 2) == 6) {
        star4.textContent = 2;
    }
    else if (supe == Math.floor(supe)) {
        star4.textContent = 0;
    }
    else if (supe.charAt(supe.length - 2) == 3 ) {
        star4.textContent = 1;
    }
    else {
        star4.textContent = 0;
    }
    supe = Number(supe);

    star5.textContent = Number(star5.textContent) + Number(etoile5.value);
    
};

donjonWatcher.addEventListener("input", function() {
    inspector = 1;
    donjon_synth();
})
donjonGuard.addEventListener("input", function() {
    inspector = 0;
    donjon_synth();
})
donjonWarrior.addEventListener("input", function() {
    inspector = 2;
    donjon_synth();
})

etoile2.addEventListener('input', function() {
    donjon_synth();
});
etoile3.addEventListener('input', function() {
    donjon_synth();
});
etoile4.addEventListener('input', function() {
    donjon_synth();
});
etoile5.addEventListener('input', function() {
    donjon_synth();
});