## DOM

### Création/suppression d'éléments

|syntaxe|description|
| :-- | :-- |
|createDiv(contenu html)|Crée un élément `<div></div>`|
|createP(contenu html)|Crée un élément `<p></p>`|
|createElement(balise, contenu)|Crée un élément `<balise></balise>`|
|createInput()|Crée un élément `<input></input>` pour insérer du texte|
|createButton()||
|createCheckbox()|Crée un élément `<input></input>`  de type checkbox (case à cocher). La valeur booléenne de la case est donnée par la méthode `.checked()`. |
|createSlider()|Crée un élément `<input></input>`  de type range (curseur)|
|removeElements()|supprime les éléments créés (sauf celui créé par createCanvas)|

### Méthodes liées aux éléments

|syntaxe|description|
| :-- | :-- |
|element.size(largeur, hauteur)|Méthode qui spécifie les dimensions de `element`|
|element.position(x, y)|Méthode qui spécifie la position de `element`|
|element.style(propriété, valeur)|Méthode qui spécifie la valeur attribuée à une propriété CSS de `element`.|
|element.value()|Méthode qui renvoie la valeur de `element`|
|element.show()| Rend `element` visible|
|element.hide() |Rend `element` invisible|
|element.remove()|Supprime `element` du DOM|
