# Questions : boucles non bornées

## 1. Aléatoire

!!! Info
     L'instruction `randint(1,6)` génère un entier aléatoire entre 1 et 6 compris. Cette fonction fait partie du module `random`. Pour pouvoir l'utiliser on peut écrire en début de programme : `from random import randint`.

#### Question 1.1  

!!! exo "Question"
    On simule le tirage aléatoire d'un dé, jusqu'à ce qu'on obtienne un 6.  
    Parmi les 4 programmes suivants, lequel permet d'afficher le nombre de coups qui ont été nécessaires ? (un premier 6 au 3e lancer doit faire afficher la valeur 3).

Programme A :
```python
from random import randint
de = randint(1,6)
compteur = 1
while de != 6:
    de = randint(1,6)
    compteur = compteur + 1
print(compteur)
```

Programme B :
```python
from random import randint
de = randint(1,6)
compteur = 0
while de != 6:
    de = randint(1,6)
    compteur = compteur + 1
print(compteur)

```

Programme C :
```python
from random import randint
de = randint(1,6)
compteur = 1
while de == 6:
    de = randint(1,6)
    compteur = compteur + 1
print(compteur - 1)
```

Programme D :
```python
from random import randint
de = 0
compteur = 0
while de != 6:
    de = randint(1,6)
    compteur = compteur + 1
print(compteur + 1)

```


=== "Propositions de réponses"
    - [ ] A
    - [ ] B
    - [ ] C
    - [ ] D

=== "Solution"
    - [x] A
    - [ ] B
    - [ ] C
    - [ ] D

=== "Arguments"
    Le premier lancer peut donner lieu à un 6 : le compteur doit être initialisé à 1 dès qu'un lancer est simulé. Ensuite il faut incrémenter[^1] le compteur à chaque fois qu'un lancer est simulé.
    De cette façon, compteur contient exactement le nombre de lancers jusqu'au premier 6.

[^1]: incrémenter : augmenter d'une unité

#### Question 1.2  

!!! exo "Question"
    Une grenouille monte l'escalier de 17 marches qui mène à la terrasse. A chacun de ses bonds, elle grimpe aléatoirement d'une ou de deux marches.
    On simule son trajet à l'aide d'un programme.  
    Parmi les 4 programmes suivants, lequel permet d'afficher le nombre de bonds qui ont été nécessaires pour atteindre la terrasse ?



Programme A :
```python
from random import randint
marche = 0
compteur = 1
while marche < 17:
    bond = randint(1, 2)
    compteur = compteur + 1
    marche = marche + bond
print(compteur)
```

Programme B :
```python
from random import randint
marche = 0
compteur = 0
while marche < 17:
    bond = randint(1, 2)
    compteur = compteur + 1
    marche = marche + bond
print(compteur)
```

Programme C :
```python
from random import randint
marche = 0
compteur = 0
while marche < 17:
    bond = randint(1, 2)
    compteur = compteur + bond
    marche = marche + bond
print(compteur)
```

Programme D :
```python
from random import randint
marche = 0
compteur = 0
while marche != 17:
    bond = randint(1, 2)
    compteur = compteur + 1
    marche = marche + bond
print(compteur)
```

=== "Propositions de réponses"
    - [ ] A
    - [ ] B
    - [ ] C
    - [ ] D

=== "Solution"
    - [ ] A
    - [x] B
    - [ ] C
    - [ ] D

=== "Arguments"
    - Le programme A initialise la variable `compteur` à 1 alors que `marche` est initialisé à 0.  
    - Le programme C n'incrémente [^1] pas correctement `compteur` : chaque bond ne compte que pour 1.  
    - Le programme D teste si on atteint exactement la 17e marche, or notre simulation pourrait induire un bond de 2 marches à partir de la 16e. La variable `marche` pourrait ne jamais valoir 17 et le programme ne s'arrêterait pas.  
    - Seul le programme B convient.

## 2. Accumulation  

#### Question 2.1

!!! exo "Question"
    On cherche à déterminer le plus petit entier $n$ tel que la somme $1 + 2 + 3 + \cdots +n$ soit supérieure à 1000.
    Parmi les 4 programmes suivants, lequel permet d'afficher la valeur de $n$ cherchée ?

Programme A :
```python
somme = 0
n = 0
while somme > 1000:
    n = n + 1
    somme =  somme + n
print(n)
```

Programme B :
```python
somme = 0
n = 0
while somme >= 1000:
    somme =  somme + n
    n = n + 1
print(n)
```


Programme C :
```python
somme = 0
n = 0
while somme < 1000:
    n = n + 1
    somme =  somme + n
print(n)
```


Programme D :
```python
somme = 0
n = 0
while somme < 1000:
    somme =  somme + n
    n = n + 1
print(n)
```


=== "Propositions de réponses"
    - [ ] A
    - [ ] B
    - [ ] C
    - [ ] D

=== "Solution"
    - [ ] A
    - [ ] B
    - [x] C
    - [ ] D

=== "Arguments"  
    - Les corps de boucles des programmes A et B ne sont jamais exécutés car les expressions `somme > 1000` et `somme >= 1000` sont évaluées à `False` puisque `somme`vaut 0 lors de l'évaluation.  
    - La seule différence entre les programmes C et D est l'ordre des instructions `somme =  somme + n` et `n = n + 1`. Dans le programme D, `n` est incrémenté [^1] après avoir été ajouté à `somme` : lorsque la valeur de `somme` sera supérieure ou égale à 1000, mettant fin  à la boucle, la valeur de `n` ne sera pas la dernière ajoutée à `somme`. L'instruction `print(n)` n'affichera pas la bonne valeur.  
    Dans le programme C, `n` est incrémenté avant d'être ajouté à `somme`, et le problème précédent ne se pose plus.

#### Question 2.2  

!!! exo "Question"
    Après exécution du programme suivant, quelle serait la valeur affichée ?

```python
i = 1
while i <= 100:
    i = 2 * i
print(i)
```

=== "Propositions de réponses"
    - [ ] 1
    - [ ] 64
    - [ ] 100
    - [ ] 128


=== "Solution"
    - [ ] 1
    - [ ] 64
    - [ ] 100
    - [x] 128

=== "Arguments"  
    La variable `i` prend successivement les valeurs 1, 2, 4, 8, 16, 32, 64. Pour toutes ces valeurs, l'expression `i <= 100` est évaluée à `True` et le corps de la boucle est exécuté. Lors de la dernière exécution `i` prend la valeur 128, ce qui fait sortir de la boucle.

## 3. Entrer dans la boucle et en sortir

#### Question 3.1

!!! exo "Question"
    Voici un programme comportant une boucle non bornée.
    Quelle est la valeur affichée à l'issue de l'exécution de ce programme ?

    ```python
    a = 5
    while a < 5:
        a = a + 2
    print(a)
    ```

=== "Propositions de réponses"
    - [ ] 5
    - [ ] 7
    - [ ] 10
    - [ ] Aucune : la boucle ne termine pas

=== "Solution"
    - [x] 5
    - [ ] 7
    - [ ] 10
    - [ ] Aucune : la boucle ne termine pas


=== "Arguments"  
    L'expression `a < 5` est évaluée à `False` lorque `a` vaut 5 : le corps de la boucle n'est jamais exécuté.

#### Question 3.2

!!! exo "Question"
    Voici un programme comportant une boucle non bornée.
    Quelle est la valeur affichée à l'issue de l'exécution de ce programme ?

    ```python
    a = 5
    while a < 10:
        a = a + 2
    print(a)
    ```


=== "Propositions de réponses"
    - [ ] 5
    - [ ] 9
    - [ ] 11
    - [ ] Aucune : la boucle ne termine pas

=== "Solution"
    - [ ] 5
    - [ ] 9
    - [x] 11
    - [ ] Aucune : la boucle ne termine pas


=== "Arguments"  
    La variable `a` prend successivement les valeurs 5, 7 et 9. Pour toutes ces valeurs, l'expression `a < 10` est évaluée à `True` et le corps de la boucle est exécuté. Lors de la dernière exécution `a` prend la valeur 11, ce qui fait sortir de la boucle.

#### Question 3.3

!!! exo "Question"
    Voici un programme comportant une boucle non bornée.
    Quelle est la valeur affichée à l'issue de l'exécution de ce programme ?

    ```python
    a = 5
    while a < 10:
        a = a - 2
    print(a)
    ```


=== "Propositions de réponses"
    - [ ] 5
    - [ ] 3
    - [ ] 1
    - [ ] Aucune : la boucle ne termine pas

=== "Solution"
    - [ ] 5
    - [ ] 3
    - [ ] 1
    - [x] Aucune : la boucle ne termine pas


=== "Arguments"  
    La variable `a` prend les valeurs 5, 3 ,1, -1, -3, etc. Pour toutes les valeurs, l'expression `a < 10` est évaluée à `True` et le corps de la boucle est exécuté. Les valeurs de `a` sont décroissantes, et aucune valeur prise par `a` ne permettra de sortir de la boucle.
