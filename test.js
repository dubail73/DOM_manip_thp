function populateImages() {
  // Sélectionne toutes les "cards"
  let cards = document.querySelectorAll(".card"); 
  
  // Parcours les cards et ajoute les images
  cards.forEach((card, index) => {
    let img = document.createElement("img"); // Crée un élément <img>
    img.src = imagesArray[index];           // Définit la source de l'image
    img.classList.add("card-img-top");      // Ajoute une classe Bootstrap
    card.prepend(img);                      // Ajoute l'image en haut de la card
  });
}