function changeTitles() {
  document.querySelector("h1.jumbotron-heading").textContent = "Ce que j'ai appris à THP";
  document.querySelector("p.lead.text-muted").textContent = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !";
}
// Appel de la fonction
changeTitles();

function changeCallToAction() {
  document.querySelector("a.btn.btn-primary.my-2").textContent = "OK je veux tester !";
  document.querySelector("a.btn.btn-secondary.my-2").textContent = "Non merci";
}
changeCallToAction();

function buttonLink() {
  document.querySelector("a.btn.btn-primary.my-2").setAttribute("href", "http://www.thehackingproject.org");
  document.querySelector("a.btn.btn-secondary.my-2").setAttribute("href", "https://www.pole-emploi.fr/accueil/");
}
buttonLink();

function changeLogoName() {
  document.querySelector("strong").textContent = "The THP Experience";
  document.querySelector("strong").style.fontSize = "2em";
} 
changeLogoName();


  let imagesArray = [
    "https://img.icons8.com/color/480/000000/html-5.png", 
    "https://img.icons8.com/color/480/000000/css3.png", 
    "https://img.icons8.com/color/480/000000/javascript.png", 
    "https://img.icons8.com/color/480/000000/ruby-programming-language.png", 
    "https://img.icons8.com/color/480/000000/bootstrap.png", 
    "https://img.icons8.com/color/480/000000/github.png", 
    "/image/logo.webp", 
    "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", 
    "https://img.icons8.com/color/480/000000/heroku.png"
  ];

  let cards = document.querySelectorAll('.card');

  // Vérifier qu'il y a assez de cartes pour correspondre avec les images
  cards.forEach((card, index) => {
    if (index < imagesArray.length) {
      let imgElement = card.querySelector('img');  // Trouver l'image dans la carte
      if (imgElement) {
        imgElement.src = imagesArray[index];  // Remplacer l'URL de l'image
      }
    }
  });
  
  function deleteLastCards() {
    // Récupérer toutes les cartes sous forme d'array pour éviter les problèmes avec la NodeList statique
    let cards = Array.from(document.querySelectorAll(".card"));
  
    // On boucle en partant de la fin et on supprime les 3 dernières cartes
    for (let i = 0; i < 3; i++) {
      cards[cards.length - 1 - i].remove(); // Supprime la dernière carte à chaque itération
    }
  }
  deleteLastCards();

  function changeCardsText() {
    // Tableau des nouveaux textes pour les 3 premières cartes
    let newTexts = [
      "L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web",
      "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML",
      "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."
    ];
    
    // Récupérer toutes les cartes
    let cards = document.querySelectorAll(".card");
  
    // Modifier le texte des 3 premières cartes
    for (let i = 0; i < 3; i++) {
      cards[i].querySelector(".card-text").textContent = newTexts[i];
    }
  }
  
  // Appeler la fonction pour appliquer les changements
  changeCardsText();

  function changeViewButtons() {
    // Sélectionner tous les boutons "View" ayant la classe 'btn-outline-secondary'
    let viewButtons = document.querySelectorAll("button.btn-outline-secondary");
  
    // Parcourir chaque bouton et modifier la classe si le texte est "View"
    viewButtons.forEach(function(button) {
      if (button.textContent === "View") {
        button.classList.remove("btn-outline-secondary"); // Supprime la classe existante
        button.classList.add("btn-success"); // Ajoute la classe "btn-success"
      }
    });
  }
  
  // Appeler la fonction pour appliquer les changements
  changeViewButtons();

  function moveThirdCard() {
    // Sélectionner la première row (celle qui contient les cartes actuelles)
    let firstRow = document.querySelector(".row");
  
    // Sélectionner la troisième carte (celle qui contient JS)
    let thirdCard = firstRow.children[2]; // La 3ème carte (index 2)
  
    // Créer une nouvelle div avec la classe "row"
    let newRow = document.createElement("div");
    newRow.classList.add("row");
  
    // Ajouter cette nouvelle div à la page après la première row
    firstRow.parentNode.insertBefore(newRow, firstRow.nextSibling);
  
    // Déplacer la 3ème carte vers la nouvelle div
    newRow.appendChild(thirdCard);
  }
  
  // Appeler la fonction pour effectuer les changements
  moveThirdCard();
  
  