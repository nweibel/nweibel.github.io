# Parcours JavaScript

## 1. Associer un contenu JS
Il y a plusieurs façons d'associer un contenu JavaScript à un fichier HTML :

- on peut écrire le code JavaScript dans le fichier HTML en l'insérant dans un élément `<script>`:
```html
<script type="text/javascript">
 //code JS
</script>
```

- on peut faire référence à un fichier externe nommé par exemple `script.js` contenant le code JavaScript en utilisant l'attribut `src` d'un élément  `<script>` :  
```html
<script language="JavaScript" src="script.js"></script>
```
??? warning "Avertissement"
    L'utilisation d'interfaces web comme Capytale ou CodePen.io, pour écrire simultanément les codes `html`, `css` et `js`, rend souvent ce lien *transparent* : il n'est pas explicite dans le code affiché.

## 2. Désigner un élément

La réalisation d'une interaction nécessite de distinguer :  

- l'élément sur lequel l'utilisateur devra agir
- le type d'événement pris en compte : clic, survol, etc.
- l'élément sur lequel une action sera réalisée
- le type d'action réalisée

Les éléments doivent être désignés depuis le code JS. Il existe plusieurs méthodes pour cela ; dans le contexte de ce parcours on aura recours à la méthode [`document.querySelector`](https://developer.mozilla.org/fr/docs/Web/API/Document/querySelector) dont la syntaxe est :

```js
element = document.querySelector(sélecteurs);
```

La méthode `querySelector()` renvoie le premier élément dans le document correspondant au sélecteur - ou groupe de sélecteurs - spécifié(s), ou `null` si aucune correspondance n'est trouvée.

!!! abstract "Exemples"
    Voici quelques éléments html et la référence faite à ces éléments dans le code js :
    === "html"
        ```html
        <body>
        <h1>Titre</h1>
        <p id="special_p">Paragraphe spécial</p>
        </body>
        ```
    === "js"
        ```js
        // sélection d'un élément dont la balise est unique
        let corps = document.querySelector('body');
        let titre = document.querySelector('h1');
        // sélection avec un identifiant
        let monParagraphe = document.querySelector('#special_p');
        ```

## 3. Être à l'écoute des événements

La méthode `addEventListener()`  associe une fonction à appeler à chaque fois que l'événement spécifié est réalisé sur l'élément ciblé.

La syntaxe est :

```js
element.addEventListener(événement, fonction_a_appeler);
```
L'événement est à citer entre guillemets.

!!! abstract "Exemple"
    ```js
    let bouton = document.querySelector('button');
    bouton.addEventListener("click", fonction_a_appeler);
    ```

Voici quelques événements possibles :

|Événement|Description|
| ---: |:--- |
|[click](https://developer.mozilla.org/fr/docs/Web/API/Element/click_event) |clic de la souris sur l'élément|
|[dblclick](https://developer.mozilla.org/fr/docs/Web/API/Element/dblclick_event)|double-clic de la souris sur l'élément|
|[keydown](https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event)|appui sur une touche du clavier|
|[keyup](https://developer.mozilla.org/en-US/docs/Web/API/Document/keyup_event)|touche du clavier pressée puis relâchée|
|[mouseover](https://developer.mozilla.org/fr/docs/Web/API/Element/mouseover_event)|le curseur de la souris survole l'élément|
|[mouseout](https://developer.mozilla.org/fr/docs/Web/API/Element/mouseout_event)|le curseur de la souris quitte l'élément|

## 4. Réaliser une action

Lors d'une interaction, l'action à réaliser lorsqu'un événement se produit est écrite en JS dans une fonction. De nombreuses actions sont possibles, comme changer une couleur ou la taille d'un élément, ajouter/modifier un contenu, rendre un contenu visible ou le masquer, etc.

### 4.1 Modifier le style d'un élément

Les propriétés CSS s'écrivent en JavaScript sans le caractère `-`  et avec des majuscules pour séparer les mots. ([Référence des propriétés CSS](https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Properties_Reference))

!!! abstract "Exemples"
    ```js
    element.style.color="red";
    element.style.backgroundColor="rgb(255,0,0)";
    element.style.fontSize="16px";
    element.style.textAlign="center";
    ```

Les valeurs que l'on attribue aux propriétés sont des chaines de caractères entre guillemets.


### 4.2 Modifier le contenu d'un élément

!!! abstract "Exemples"
    ```js
    //modifier le texte d'un élément
    element.textContent="nouveau contenu";

    // modifier la source d'une image
    image.src="nouvelle_url";
    ```

## 5. Exemples

### 5.1 Modifier le contenu du titre et sa couleur

<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/nathalieweibel/embed/PopOKRM?default-tab=result&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
</iframe>

!!! exo "Questions"
    1. Détailler toutes les instructions qui permettent que le clic sur le bouton "bleu" change le contenu du titre et sa couleur.
    2. Pourquoi les boutons ne sont-ils pas sélectionnés par l'instruction  `let bouton=document.querySelector("button");`  ?

### 5.2 Afficher/cacher du texte avec deux boutons

<iframe height="300" style="width: 100%;" scrolling="no" title="Afficher-cacher du texte" src="https://codepen.io/nathalieweibel/embed/jOaGjae?default-tab=result&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
</iframe>
!!! exo "Questions"
    1. Quel est l'identifiant de l'élément qui contient la réponse à la question posée ?   
    2. Quelle est la balise de cet élément ?  
    3. Pourquoi a-t-on choisi cette balise pour insérer la réponse ?

### 5.3 Inverser des couleurs de texte, d'arrière-plan

<iframe height="300" style="width: 100%;" scrolling="no" title="inversion" src="https://codepen.io/nathalieweibel/embed/eYpOeVz?default-tab=&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
</iframe>
!!! exo "Questions"
    1. Que réalise la fonction `inverser()`?  
    2. À quelle condition cette fonction s'exécute-t-elle ?

### 5.4 Faire défiler des images avec un bouton

<iframe height="450" style="width: 100%;" scrolling="no" title="Carpe diem" src="https://codepen.io/nathalieweibel/embed/rNOBZWG?default-tab=result&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
</iframe>
!!! exo "Vrai ou faux ?"

    1. Les légendes des images sont stockées dans un tableau.  
    2. Les url des images sont stockées dans un tableau.  
    - Au clic sur l'image, la fonction `suivant` est exécutée.
    - Au clic sur le bouton, la fonction `suivant` est exécutée.
    - Au clic sur le bouton, la valeur de la variable  `indice` augmente de 1.
    - La fonction  `suivant` détermine la prochaine image à afficher au hasard.
    - La fonction  `suivant` modifie l'attribut `src` de l'élément qui a pour identifiant "illustration".
    - Lorsque la variable `indice`  a une valeur supérieure ou égale à la taille du tableau `urlTab`, la fonction `suivant` déclenche une erreur.

## 6. Exercices
### 6.1 Alignement
!!! exo "Alignement breton"
    code Capytale : 3c57-373162

    Compléter le code JS sans modifier les codes HTML et CSS pour que l'appui sur les boutons `Gauche`, `Centré` ou `Droite`  aligne tous les éléments du cadre en conséquence.

    <iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/nathalieweibel/embed/JjOOLxX?default-tab=result&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
    </iframe>

### 6.2 Encodage
!!! exo "Encodage"
    code Capytale : 40d7-372824

    En JavaScript, `document.characterSet` est une propriété qui renvoie l'encodage du document.
    Sans modifier les codes HTML et CSS, compléter le code JS fourni pour qu'au clic sur le bouton, une nouvelle ligne de texte apparaisse et communique le type d'encodage du document.

    <iframe height="300" style="width: 100%;" scrolling="no" title="encodage" src="https://codepen.io/nathalieweibel/embed/vYNYJVw?default-tab=result&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>


### 6.3 Compteur
!!! exo "Compteur"
    code Capytale : ad48-367903

    Créer un "compteur de clics", c'est à dire une page avec un bouton et une zone d'affichage dont la valeur augmente de 1 à chaque clic.
    Ajouter à cette page un deuxième bouton de remise à zéro du compteur.


### 6.4 Lancer de dé
!!! exo "Lancer de dé"
    code Capytale : 6c71-372788

    `Math.ceil(Math.random()*6)` fournit en JavaScript un entier aléatoire entre 1 et 6.  
    Réaliser une page qui affiche une face d'un dé, choisie aléatoirement, lorsqu'on clique sur un bouton.  
    Les images des six faces sont fournies.  
