// Récupération des pieces depuis le fichier JSON
async function chargerJSON() {
    const reponse = await fetch("works.json");
    const work = await reponse.json();
    return work;
  }

// Fonction qui génère la pages web

function genererProjets(projets) {
//  à remplir plus tard
}

// Ecoute des évenenemt clique bouton de tri 
document.getElementById("btn-tous").addEventListener("click", () => trierWork("tous"));
document.getElementById("btn-objets").addEventListener("click", () => trierWork("Objets"));
document.getElementById("btn-appartements").addEventListener("click", () => trierWork("Appartements"));
document.getElementById("btn-hotels-restaurants").addEventListener("click", () => trierWork("Hotels & restaurants"));
console.log()

// Creation de la function trier projets ( works ) 

function trierWork(categorie){
    // à plus tard
}

