#  Jeu de Nim sur un ruban NeoPixel

**Matériel** : 3 cartes micro:bit, 1 ruban neopixel  

**Fonctionnement attendu** :  

- Deux joueurs s'affrontent au jeu de Nim. Chacun joue à l'aide d'une carte micro:bit. L'un des joueurs a la couleur rouge, l'autre la couleur bleu.
- Le ruban NeoPixel est piloté par une 3e carte : il est totalement allumé et toutes ses leds sont éclairées en blanc.
- Les joueurs doivent s'approprier tour à tour entre une et trois led(s) qui s'afficheront en rouge ou bleu selon le joueur. Celui qui s'empare de la dernière led du ruban gagne la partie.  
- Chacun leur tour, les joueurs appuient 1, 2 ou 3 fois sur le bouton A, et valident leur choix avec le bouton B. La carte affiche les chiffres 1, 2 ou 3 lors des appuis sur le bouton A et l'image `Image.YES` lors de la validation avec le bouton B.
- La valeur choisie est envoyée par radio à la carte qui pilote le ruban de leds. Le nombre correspondant de leds s'allume en couleur sur le ruban, en rouge ou bleu selon le joueur.
- Lorsque la dernière led est atteinte, le ruban fait clignoter ses leds de la couleur du joueur gagnant.
