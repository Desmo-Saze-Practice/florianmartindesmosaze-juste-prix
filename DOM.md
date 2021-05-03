# DOM

DOM signifie document object model, c'est une représentation sous forme d'arbre du document html qu'on consulte. Cette représentation est disponible sous la forme d'un objet appelé `document` dans nos scripts javascript executés dans le navigateur.

_Astuce du jour : on peut visualiser cet objet en faisant `console.dir(document)`_

Ce document possède des tonnes de propriétés et de méthodes, l'objectif est de pouvoir connaitre le contenu du document qu'on consulte dans les scripts mais aussi de réécrire le contenu html au besoin directement depuis nos scripts

## Cibler un élément du document

- Traverser les propriétés du document
  
```js
// ici je cible le body dans document, dans lequel je cible le premier enfant (mon main) dans lequel je cible le premier enfant (le h1)
var h1Element = document.body.children[0].children[0];
```

- On peut cibler UN élement par son id
  
```js
// la valeur retournée est un Element
var h1Element = document.getElementById('gameTitle');
```

- On peut cibler UN élement avec un sélecteur css
  
```js
// je cible le premier élement qui a la classe coucou et je le mémorise dans une var
var coucouElement = document.querySelector('.coucou');

// on peut avoir n'importe quel sélecteur, je cible le premier li enfant d'un ul avec l'id welcome
var listItemElement = document.querySelector('ul#welcome > li');
// la méthode querySelector existe égalementsur tous les Element donc je peux tout à faire écrire
var linkElement = listItemElement.querySelector('a');
```

- On peut cibler TOUS les élements qui matchent avec un sélecteur css
  
```js
// j'execute la fonction querySelectorAll, on parle de méthode de document, en lui passant en argument un sélecteur CSS
// la valeur de retour est un ensemble d'élements
var coucouElements = document.querySelectorAll('.coucou');
console.log(coucouElements[0]);
console.log(coucouElements[1]);
```

## Modifier un élement du document

1. On cible l'élement

2. On réassigne la propriété qui nous intéresse

```js
// modifier le contenu textuel d'une balise
h1Element.textContent = 'coucou';
// modifier l'attribut class d'une balise
h1Element.className = 'test';
// je modifie l'attribut id
h1Element.id = 'truc';
// je peux me contenter de lire
console.log(h1Element.id);
// on a aussi accès aux classes via classList qui expose ne plus des méthodes trop pratiques pour manipuler les classes, ici via la méthode add on ajoute la class demandée (sans supprimer les autres)
h1Element.classList.add('test');
// on peut modifier le contenu html
h1Element.innerHTML = '<em>Truc</em>';
// on peut modifier les style, chaque propriété CSS est dispo dans la propriété style, /!\ en camelCase
h1Element.style.backgroundColor = 'red';
```

## Créer un élement

```js
// je crée une toute nouvelle balise div prête à être configurée et insérée
var newDivElement = document.createElement('div');
// on peut crée la balise qu'on veut
var newTitleElement = document.createElement('h1');
```

## Insérer un élement dans le document

```js
// on part d'un parent
var parentElement = document.getElementById('parent');
// on prépare un enfant
var newDivElement = document.createElement('div');
// on lui ajoute un enfant, l'enfant sera placé à la fin du parent
parentElement.appendChild(newDivElement);
```
