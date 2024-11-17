// Compter le nombre de <p> dans la page HTML
let paragraphs = document.getElementsByTagName('p');
console.log("Nombre d'éléments <p> : " + paragraphs.length);

let contenu = document.getElementById("coucou")
console.log("text contenu dans lid coucou :" + contenu.textContent)

console.log(document.getElementsByTagName("a")[2].href);

console.log(document.getElementsByClassName("compte-moi"));
console.log(document.getElementsByClassName("compte-moi").length);

console.log(document.querySelectorAll("li.compte-moi").length);

console.log(document.querySelectorAll("ol li.compte-moi").length);

// Sélectionner le seul <div> de la page
let div = document.querySelector("div");

// Sélectionner le deuxième <ul> à l'intérieur du <div>
let secondUl = div.getElementsByTagName("ul")[1];

// Sélectionner le premier <li> du deuxième <ul>
let firstLiOfSecondUl = secondUl.getElementsByTagName("li")[0];

// Récupérer le contenu de cet élément <li> (même s'il est caché)
console.log(firstLiOfSecondUl.textContent);

console.log(document.querySelector("div").getElementsByTagName("ul")[1].getElementsByTagName("li")[0].textContent);

