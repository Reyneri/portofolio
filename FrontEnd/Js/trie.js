

//  récupération de données depuis API
fetch('http://localhost:5678/api/works')
  .then(response => response.json())
  .then(data => afficherProjets(data));

// Étape 1 : Récupération des données depuis le fichier JSON
const reponse = await fetch("works.json");
const works = await reponse.json();

// Étape 2 : Génération dynamique de la galerie
for (let i = 0; i < works.length; i++) {
  // Récupération de chaque objet 'work' depuis le tableau 'works'
  const figure = works[i];

  // Récupération de l'élément DOM où seront insérés les projets
  const sectionGallery = document.querySelector(".gallery");
  
  // Création d'une nouvelle balise <figure> pour chaque projet
  const workElement = document.createElement("figure");

  // Création et initialisation de la balise <img> pour l'image du projet
  const imageElement = document.createElement("img");
  imageElement.src = figure.imageUrl;  // Assurez-vous que 'imageUrl' est le bon champ dans votre JSON
  
  // Création et initialisation de la balise <figcaption> pour le nom du projet
  const nomElement = document.createElement("figcaption");
  nomElement.innerText = figure.title;  // Assurez-vous que 'title' est le bon champ dans votre JSON

  // Étape 3 : Assemblage des éléments
  // Ajout de la balise <img> et <figcaption> à <figure>
  workElement.appendChild(imageElement);
  workElement.appendChild(nomElement);

  // Ajout de la balise <figure> à la section de la galerie
  sectionGallery.appendChild(workElement);
}

// Étape 4 : Gestion des événements de tri
// Ajout d'écouteurs d'événements pour les boutons de tri
document.getElementById("btn-tous").addEventListener("click", () => trierWork("tous"));
document.getElementById("btn-objets").addEventListener("click", () => trierWork("Objets"));
document.getElementById("btn-appartements").addEventListener("click", () => trierWork("Appartements"));
document.getElementById("btn-hotels-restaurants").addEventListener("click", () => trierWork("Hotels & restaurants"));

// Étape 5 : Fonction de tri
// Fonction pour trier les projets en fonction de la catégorie sélectionnée
function trierWork(categorie) {
  // Cette fonction doit être implémentée
}
