# La communication radio

## Fonctionnalités de base

La fonctionnalité *radio* permet d'échanger des messages avec une ou plusieurs cartes micro:bit.  
Il faut au moins deux cartes et chacune comporte un programme (qui peut être commun si les rôles sont symétriques).

|Instructions|Effet|
| :--- | :--- |
|`import radio`|Importe la bibliothèque `radio`|
|`radio.on()`|Active la fonctionnalité radio|
|`radio.send(message)`|Envoie un message de type chaine de caractères|
|`radio.receive()`|Prend pour valeur la chaine de caractères reçue|

## Exemple
Ce programme nécessite deux cartes : un appui sur un bouton de la carte émettrice provoque un affichage sur la carte réceptrice. En cas d'appui sur le bouton A, on affiche `Image.YES` et en cas d'appui sur le bouton B, on affiche `Image.NO`.

Programme sur la carte émettrice
```python
from microbit import *
import radio
radio.on()
while True:
    if button_a.was_pressed():
        radio.send("A")
    elif button_b.was_pressed():
        radio.send("B")
```        

Programme sur la carte réceptrice
```python
from microbit import *
import radio
radio.on()
while True:
    incoming = radio.receive()
    if incoming == "A":
        display.show(Image.YES)
        sleep(200)
    elif incoming == "B":
        display.show(Image.NO)
        sleep(200)
    display.clear()
```


## Fonctionnalités avancées

Il est possible de configurer certains paramètres : la fréquence d'émission (entre 2,4GHz et 2,5Ghz selon le canal choisi), l'adresse ou le groupe. Seules les cartes possédant le même canal, la même adresse et le même numéro de groupe communiqueront.


|Instructions|Effet|
| :--- | :--- |
|`radio.config(channel=7)`|Configure la fréquence d'émission : la valeur est un numéro entre 0 et 83|
|`radio.config(address=0x75626974)`|Configure l'adresse, codée sur 4 octets|
|`radio.config(group=0)`|Configure le groupe : au sein d'une même adresse, 256 groupes numérotés de 0 à 255 peuvent cohabiter|
|`radio.config(queue=3)`| Fixe à 3 le nombre de messages dans la file d'attente. Au delà de 3 messages en attente, ils seront supprimés.|
|`radio.config(length=32)`| Fixe la longueur maximum du message ( 32 octets par défaut, 251 au maximum).|
|`radio.config(power=6)`| Fixe la puissance d'émission du signal, de 0 à 7|
|`radio.config(data_rate=radio.RATE_1MBIT)`| Fixe la vitesse de transmission parmi `RATE_250KBIT`, `RATE_1MBIT` ou `RATE_2MBIT`|
|`radio.reset()`|Réinitialise les paramètres aux réglages par défaut|
|`radio.off()`|Désactive la fonctionnalité radio|
