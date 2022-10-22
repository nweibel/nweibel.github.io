# La musique

La carte micro:bit V2 intègre un haut-parleur permettant de jouer de la musique. Il faut importer la bibliothèque `music` à l'aide de l'instruction `import music`.

Cette bibliothèque comporte des mélodies pré-enregistrées.
|Instructions|Effet|
| :--- | :--- |
|`music.play(music.NOM_MELODIE)`|joue NOM_MELODIE|

!!! Info
    Voici la liste des mélodies prédéfinies que l'on peut jouer : DADADADUM, ENTERTAINER, PRELUDE, ODE, NYAN, RINGTONE, FUNK, BLUES, BIRTHDAY, WEDDING, FUNERAL, PUNCHLINE, PYTHON, BADDY, CHASE, BA_DING, WAWAWAWAA, JUMP_UP, JUMP_DOWN, POWER_UP, POWER_DOWN.

## Exemple
```python
from microbit import *
import music
while True:
    if button_a.was_pressed():
        music.play(music.PUNCHLINE)
```

## Références
D'autres fonctionnalités sont disponibles, notamment pour créer ses propres mélodies. Pour en savoir plus, consulter [Music : la documentation microbit-micropython](https://microbit-micropython.readthedocs.io/en/v2-docs/tutorials/music.html). 
