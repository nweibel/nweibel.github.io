# Parcours : communication radio

L'objectif est de réaliser un programme permettant de transmettre par ondes radio une information mesurée par un capteur sur une carte micro:bit, à une autre carte micro:bit.


!!! Info
    |Instructions|Effet|
    | :--- | :--- |
    |`import radio`|Importe la bibliothèque `radio`|
    |`radio.on()`|Active la fonctionnalité radio|
    |`radio.send(message)`|Envoie un message de type chaine de caractères|
    |`radio.receive()`|Prend pour valeur la chaine de caractères reçue|
    |`radio.config(group=...)`|Permet de choisir un groupe entre 0 et 255.|

## Exercice 1. Envoyer un signal
<span class="item primm">P</span>
<span class="item p_r_imm">R</span>
<span class="item pr_i_mm">I</span>
<span class="item primm">M</span>
<span class="item primm">M</span>

Ce programme nécessite deux cartes : un appui sur un bouton de la carte émettrice provoque un affichage sur la carte réceptrice.

Programme sur la carte émettrice
```python  linenums="1"
from microbit import *
import radio
radio.on()
radio.config(group=...) #choisir une valeur entre 0 et 255
while True:
    if button_a.was_pressed():
        radio.send("A")
    elif button_b.was_pressed():
        radio.send("B")
```        

Programme sur la carte réceptrice
```python  linenums="1"
from microbit import *
import radio
radio.on()
radio.config(group=...) #choisir la même valeur que la carte émettrice
while True:
    reception = radio.receive()
    if reception == "A":
        display.show(Image.YES)
        sleep(200)
    elif reception == "B":
        display.show(Image.NO)
        sleep(200)
    display.clear()
```
Saisir les programmes sur deux cartes différentes, cliquer sur `Vérifier` et s'il n'y a pas d'erreur détectée, les `flasher` sur les cartes.  
Que constate-t-on ? Que faut-il faire pour voir s'afficher quelque chose ?  

Quels sont les capteurs et actionneurs utilisés sur chaque carte par ces programmes ?   
Quel est le rôle de la dernière instruction ? (ligne 13, carte réceptrice)


## Exercice 2. Envoyer une mesure

L'objectif est de mesurer la température avec une carte et de l'envoyer à une autre carte par radio.

La carte micro:bit intègre un capteur de température. Il n'est pas très précis dans la mesure où il est soudé sur la carte elle-même, à proximité du processeur ; il est donc perturbé par l'échauffement provoqué par le fonctionnement de la carte.

!!! Info
    |Instructions|Effet|
    | :--- | :--- |
    |`temperature()`|renvoie la valeur de la température|

### 2.1 Afficher la température
<span class="item primm">P</span>
<span class="item p_r_imm">R</span>
<span class="item pr_i_mm">I</span>
<span class="item primm">M</span>
<span class="item primm">M</span>

Voici un programme qui ne nécessite qu'une carte :

```python
from microbit import *

while True:
    if button_a.was_pressed():
        display.scroll(temperature())
```
Saisir ce programme, cliquer sur `Vérifier` et s'il n'y a pas d'erreur détectée, le `flasher` sur une carte connectée à un ordinateur.  
Que constate-t-on ? Que faut-il faire pour voir s'afficher une valeur ? Que représente cette valeur ?  
Quels sont les capteurs et actionneurs utilisés  par ce programme ?   

### 2.2 Envoyer la température à une autre carte
<span class="item primm">P</span>
<span class="item p_r_imm">R</span>
<span class="item pr_i_mm">I</span>
<span class="item primm">M</span>
<span class="item primm">M</span>

Ce programme nécessite deux cartes.  
Voici le programme à saisir sur la carte émettrice :

```python
from microbit import *
import radio
radio.on()
radio.config(group=...)
while True:
    t = temperature()
    radio.send(str(t))
    sleep(500)
```


Voici le programme à saisir sur la carte réceptrice:

```python
from microbit import *
import radio
radio.on()
radio.config(group=...)
while True:
    reception = radio.receive()
    if reception:
        display.scroll(reception)
        sleep(500)
```

Si les tests montrent que tout fonctionne, alimenter la carte émettrice avec des piles et faire varier la température mesurée en rapprochant la carte d'une source chaude ou froide. La carte réceptrice affiche-t-elle des modifications ?

Quels sont les capteurs et actionneurs utilisés sur chaque carte par ces programmes ?   

## Défi : Compteur d'entrées/sorties

<span class="item primm">P</span>
<span class="item primm">R</span>
<span class="item primm">I</span>
<span class="item primm">M</span>
<span class="item prim_m">M</span>

!!! Abstract "Fonctionnement attendu"
    - Une carte sert de compteur de personnes dans une salle : à chaque entrée d'une nouvelle personne on appuie sur le bouton A, et à chaque sortie on appuie sur le bouton B.  
    - L'appui sur un bouton provoque l'envoi d'une information par radio à une autre carte  
    - La carte réceptrice affiche le nombre de personnes présentes dans la salle : ce nombre augmente ou diminue de 1 à chaque appui sur un bouton de la carte émettrice.

Écrire un programme qui respecte le fonctionnement décrit ci-dessus.
On testera au fur et à mesure les différentes fonctionnalités.

??? note "En option"
    - Faire clignoter un symbole avertissant de l'atteinte de la jauge maximale de la salle.
