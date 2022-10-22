# Parcours : simuler l'atteinte d'une cible sur un plan incliné

L'objectif est de réaliser un programme permettant de déplacer un point lumineux sur la carte en l'inclinant et de viser un pixel clignotant.

Le parcours permet de découvrir tous les éléments nécessaires : 

- les instructions d'affichage sur la carte micro:bit 

- les instructions usuelles de programmation suivantes : 

    - l'import de fonction(s) depuis un module
    - la boucle non bornée (`while`) et ici la boucle infinie (`while True`)
    - la génération d'entiers aléatoires avec la fonction `randint`
    - l'instruction conditionnelle (`if ... elif ... else ...`)

- les instructions liées à l'accéléromètre de la carte micro:bit.

## Exercice 1. Afficher une image

L'objectif est d'apprendre à afficher une image sur la micro:bit en allumant certaines LED (ou pixel). 

### 1.1 Afficher une image prédéfinie  

<span class="item primm">P</span>
<span class="item p_r_imm">R</span>
<span class="item primm">I</span>
<span class="item pri_m_m">M</span>
<span class="item primm">M</span>

![](../images/mb_display_yes.png)

Voici un premier programme : 
```python linenums="1"
from microbit import *
display.show(Image.YES)
```

- Saisir ce programme, cliquer sur `Vérifier` et s'il n'y a pas d'erreur détectée, le `flasher` sur une carte connectée à l'ordinateur.  
Que constate-t-on ?  
- Remplacer dans le programme le mot YES par l'un des mots suivants :  
CHESSBOARD - DIAMOND - HAPPY - HEART - NO - SAD - SQUARE 
- Choisir l'une des images et la reproduire sur une feuille à l'aide d'un quadrillage de 5 carreaux sur 5.

### 1.2 Afficher une image personnalisée

<span class="item primm">P</span>
<span class="item p_r_imm">R</span>
<span class="item pr_i_mm">I</span>
<span class="item pri_m_m">M</span>
<span class="item primm">M</span>


- Saisir le programme suivant et le flasher sur la carte.  
Que constate-t-on ? À quoi correspondent les 0 et les 9 ?

```python linenums="1"
from microbit import *
mon_image = Image("90909:"
                  "09990:"
                  "99999:"
                  "09990:"
                  "90909")
display.show(mon_image)
```

- Dessiner sur une feuille à l'aide d'un quadrillage de 5 carreaux sur 5 une image personnelle et modifier le programme précédent pour la faire apparaître sur la carte micro:bit.

---

## Exercice 2. Faire clignoter une LED

### 2.1 Allumer ou éteindre des LED

<span class="item primm">P</span>
<span class="item primm">R</span>
<span class="item primm">I</span>
<span class="item primm">M</span>
<span class="item prim_m">M</span>

!!! Info  
    ![](../images/mb_display_pixel.png "display.show(0, 3, 9)")  

    - Chaque LED a des coordonnées entières de (0, 0) dans le coin supérieur gauche à (4, 4) dans le coin inférieur droit. Le premier nombre est l'abscisse (de 0 à 4) et le second est l'ordonnée (de 0 à 4).
    - La luminosité de chaque LED peut être définie, de 0 (le pixel est alors désactivé) à 9 (niveau le plus lumineux).  
    - L'instruction `display.set_pixel(x, y, lum)` allume/éteint le pixel aux coordonnées (x, y) avec un niveau de luminosité `lum` (entre 0 et 9). La valeur 0 éteint le pixel.

- Quelle est l'instruction qui permet d'allumer la LED positionnée au centre de l'écran avec l'intensité maximale ? Tester l'instruction proposée. 


### 2.2 Faire clignoter une LED de la carte

<span class="item primm">P</span>
<span class="item p_r_imm">R</span>
<span class="item pr_i_mm">I</span>
<span class="item pri_m_m">M</span>
<span class="item primm">M</span>

![](../images/mb_python_ex2.gif)


L'objectif est de choisir l'une des LED de la carte et la faire clignoter.  
L'idée consiste à allumer la LED pendant un court instant, puis l'éteindre pendant un court instant et de recommencer en boucle.  
Pour cela on crée une *boucle infinie* avec l'instruction `while True`.
Pour faire attendre pendant un court instant on insère l'instruction `sleep(500)`, qui signifie attendre 500 millisecondes, soit une demi-seconde.

- Reproduire et compléter le programme suivant pour faire clignoter une LED (à choisir) :  

```python linenums="1"
from microbit import *
while True:
    # choisir un pixel à allumer
    display.set_pixel(..., ..., 9)    # à compléter
    sleep(500)
    # éteindre le même pixel
    display.set_pixel(..., ..., ...)    # à compléter
    sleep(500)
```

- Vérifier la syntaxe du programme et, si tout est correct, le flasher sur une carte connectée à l'ordinateur. 
L'effet produit est-il celui attendu ?

!!! question "Question"

    Pour accélérer la vitesse de clignotement, il faut: 

    === "Propositions de réponses" 
        - [ ] augmenter la valeur du paramètre de la fonction `sleep`, par exemple écrire en lignes 5 et 8 `sleep(800)`
        - [ ] diminuer la valeur du paramètre de la fonction `sleep`, par exemple écrire en lignes 5 et 8 `sleep(200)`
        
    === "Solution"
        - [ ] augmenter la valeur du paramètre de la fonction `sleep`, par exemple écrire en lignes 5 et 8 `sleep(800)`
        - [x] diminuer la valeur du paramètre de la fonction `sleep`, par exemple écrire en lignes 5 et 8 `sleep(200)`

### 2.3 Allumer une LED choisie aléatoirement

<span class="item p_rimm">P</span>
<span class="item p_r_imm">R</span>
<span class="item pr_i_mm">I</span>
<span class="item primm">M</span>
<span class="item primm">M</span>

!!! Info
    Le module `random` contient la fonction `randint(min, max)` qui renvoie un entier entre `min` et `max` compris.  
    Pour importer cette fonction, écrire en début de programme `from random import randint`.
    

- Lire le programme suivant et anticiper son fonctionnement. 

```python linenums="1"
from microbit import *
from random import randint
display.show(randint(1, 6))
```

- Donner un affichage que l'exécution de ce programme pourrait produire. 

- Donner un affichage que l'exécution de ce programme ne pourrait pas produire. Pourquoi est-on sûr qu'il ne pourrait pas se produire ?

- Lire le programme suivant et anticiper son fonctionnement. 
```python linenums="1"
from microbit import *
from random import randint
display.set_pixel(randint(1, 3), randint(1, 3), 9) 
```

- Dessiner un affichage que l'exécution de ce programme pourrait produire. 

- Dessiner un affichage que l'exécution de ce programme ne pourrait pas produire. Pourquoi est-on sûr qu'il ne pourrait pas se produire ?

- Flasher le programme sur la carte et vérifier. (On peut relancer le programme en appuyant sur le bouton de réinitialisation à l'arrière).

### 2.4 Faire clignoter une LED choisie aléatoirement

<span class="item primm">P</span>
<span class="item primm">R</span>
<span class="item primm">I</span>
<span class="item pri_m_m">M</span>
<span class="item primm">M</span>

L'objectif est d'allumer aléatoirement une LED de la carte et de la faire clignoter.  



On a vu qu'on peut utiliser la fonction `randint(min, max)` pour choisir aléatoirement un pixel. Cette fonction renvoie une valeur aléatoire : deux appels successifs à cette fonction vont probablement renvoyer des valeurs différentes. Pour pouvoir allumer et éteindre la **même** LED pour la faire clignoter, on mémorise les coordonnées dans des **variables** `x`et `y`. 

- Reproduire et compléter le programme suivant pour faire clignoter une LED (choisie aléatoirement par le programme) :
```python linenums="1"
from microbit import *
from random import randint
# coordonnées de la LED à allumer
x = randint(0, ...)    # à compléter
y = randint(0, ...)    # à compléter
while True :
    # on allume la LED pendant 500 ms
    display.set_pixel(..., ..., ...)    # à compléter
    ...    # à compléter
    # on éteint la LED pendant 500 ms
    display.set_pixel(..., ..., ...)    # à compléter
    ...    # à compléter
```

- Vérifier la syntaxe du programme et, si tout est correct, le flasher sur une carte connectée à l'ordinateur. 
L'effet produit est-il celui attendu ?

--- 


## Exercice 3 Déplacer un point lumineux avec l'inclinaison de la carte 

<span class="item p_rimm">P</span>
<span class="item p_r_imm">R</span>
<span class="item pr_i_mm">I</span>
<span class="item pri_m_m">M</span>
<span class="item primm">M</span>


On souhaite déplacer un point lumineux sur l'écran en fonction des valeurs des inclinaisons gauche-droite et avant-arrière de la carte, comme une bille qui se déplacerait sur un plan incliné. 

Parmi ses capteurs, la carte micro:bit comporte un accéléromètre, désigné par `accelerometer`. 
Il permet de connaître l'orientation de la carte selon 3 axes :  

- `x`, l’inclinaison de gauche à droite (roulis),
- `y`, l’inclinaison d’avant en arrière (tangage),
- `z`, le mouvement haut et bas.


On utilise la valeur détectée par `accelerometer.get_x()` (inclinaison gauche-droite) et `accelerometer.get_y()` (inclinaison avant-arrière) et selon leur valeur, on donne à l'abscisse `x` et à l'ordonnée `y` d'un pixel allumé la valeur 0, 1, 2, 3 ou 4.  
Par exemple, voici la valeur que l'on peut donner à `x` selon la valeur de `accelerometer.get_x()` : 

![](../images/inclinaison.png){ width='600' }

- Compléter le programme suivant pour qu'il respecte les indications précédentes pour déterminer la valeur de `x`.

```python linenums="1"
from microbit import *

x = 2
y = 2

while True:
    display.set_pixel(x, y, 0)
    acc_x = accelerometer.get_x()
    if acc_x > ...:    # à compléter
        x = 4
    elif acc_x > 150:
        x = ...    # à compléter
    elif acc_x > -150:
        x = ...    # à compléter
    elif acc_x > -450: 
        x = 1
    else:
        x = ...    # à compléter
    display.set_pixel(x, y, 9)
    sleep(100)
```

- Saisir le programme et le flasher sur une carte. Vérifier si le comportement anticipé est conforme à celui observé.  
- Compléter le programme en procédant de façon analogue pour déterminer la valeur que doit en prendre l'ordonnée du pixel `y` selon les valeurs de `accelerometer.get_y()`
- Vérifier la syntaxe du programme et, si tout est correct, le flasher sur une carte connectée à l'ordinateur. 
L'effet produit est-il celui attendu ?
- En plaçant un symbole `#` en début de ligne 7, celle-ci sera ignorée lors de l'exécution du programme. Quelle influence cela aura-t-il sur le fonctionnement du programme ? Anticiper ce fonctionnement, et vérifier sa réponse en exécutant le programme modifié.

---

## Défi : Cible sur plan incliné

<span class="item primm">P</span>
<span class="item primm">R</span>
<span class="item primm">I</span>
<span class="item primm">M</span>
<span class="item prim_m">M</span>

!!! Abstract "Fonctionnement attendu"
    - Un pixel cible, déterminé aléatoirement, clignote sur l'écran de 25 LED de la micro:bit.  
    - Le joueur "déplace" un point lumineux positionné initialement au centre de la carte en inclinant la carte micro:bit (avant-arrière, gauche-droite)  
    - Lorsque le point lumineux dirigé par le joueur et le pixel clignotant se superposent, la partie est gagnée : un :heart: s'affiche et le jeu s'arrête.

Écrire un programme qui respecte le fonctionnement décrit ci-dessus. 
On testera au fur et à mesure les différentes fonctionnalités. 

??? note "En option"
    - Faire clignoter le :heart: final. On pourra consulter le paragraphe [Animer des images.](../../microbit/python_leds5x5/#animer-des-images)