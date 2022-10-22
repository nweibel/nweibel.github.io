# Défis

## Cible sur plan incliné
[<span class="item led">led</span>](../python_leds5x5) [<span class="item accelerometer">accéléromètre</span>](../python_accelerometre)

**Fonctionnement attendu** :  

- Un pixel cible, déterminé aléatoirement, clignote sur l'écran de 25 led de la micro:bit.  
- Le joueur "déplace" un pixel positionné initialement au centre de la carte en inclinant la carte micro:bit (avant-arrière, gauche-droite)  
- Lorsque les 2 pixels se superposent, la partie est gagnée : un cœur s'affiche et le jeu s'arrête.

??? Info
    - Pour créer un pixel aléatoire, voir la page [Les LED](../python_leds5x5/#afficher-des-pixels-aleatoires) 
    - Pour déplacer un pixel selon l'inclinaison de la carte, voir l'[exercice 3.5](../python_exercices/#35-deplacer-un-point-lumineux-avec-linclinaison-de-la-carte)
    
## Jeu de Nim sur un ruban NeoPixel
[<span class="item led">led</span>](../python_leds5x5)  [<span class="item buttons">boutons</span>](../python_boutons)    [<span class="item radio">radio</span>](../python_radio) [<span class="item grove_neopixel">neopixel</span>](../python_grove/#autres-actionneurs)

**Matériel** : 3 cartes micro:bit, 1 ruban neopixel  

**Fonctionnement attendu** :  

- Deux joueurs s'affrontent au jeu de Nim. Chacun joue à l'aide d'une carte micro:bit. L'un des joueurs a la couleur rouge, l'autre la couleur bleu.
- Le ruban NeoPixel est piloté par une 3e carte : il est totalement allumé et toutes ses leds sont éclairées en blanc. 
- Les joueurs doivent s'approprier tour à tour entre une et trois led qui s'afficheront en rouge ou bleu selon le joueur. Celui qui s'empare de la dernière led du ruban gagne la partie.  
- Chacun leur tour, les joueurs appuient 1, 2 ou 3 fois sur le bouton A, et valident leur choix avec le bouton B. La carte affiche les chiffres 1, 2 ou 3 lors des appuis sur le bouton A et l'image `Image.YES` lors de la validation avec le bouton B. 
- La valeur choisie est envoyée par radio à la carte qui pilote le ruban de led. Le nombre correspondant de led s'allume en couleur sur le ruban, en rouge ou bleu selon le joueur. 
- Lorsque la dernière led est atteinte, le ruban fait clignoter ses led de la couleur du joueur gagnant.


