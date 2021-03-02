let astuceVoyageur = document.getElementById("astuce_voyageur");
let conseilsAventurier = document.getElementById("conseils_aventurier");
let leçonHero = document.getElementById("leçon_hero");
let totalExp = document.getElementById("total_exp");



let calculExp = function(first = astuceVoyageur.value, second = conseilsAventurier.value, third = leçonHero.value) {
    let total = (first * 1000) + (second * 5000) + (third * 20000);
    total = total.toLocaleString("fr-FR");

    totalExp.textContent = total;
};

astuceVoyageur.addEventListener('input', function() {
    calculExp();
});


conseilsAventurier.addEventListener('input', function() {
    calculExp();
});

leçonHero.addEventListener('input', function() {
    calculExp();
});