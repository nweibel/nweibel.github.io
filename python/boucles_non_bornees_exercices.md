# Exercices : boucles non bornées

## 1. Aléatoire

!!! Info
     L'instruction `randint(1,6)` génère un entier aléatoire entre 1 et 6 compris. Cette fonction fait partie du module `random`. Pour pouvoir l'utiliser on peut écrire en début de programme : `from random import randint`.  

### Exercice 1.1  

!!! exo "Question"
    On simule le tirage aléatoire de deux dés, jusqu'à ce qu'on obtienne un double (deux 1, deux 2, etc.).  
    Écrire un programme qui permet d'afficher le nombre de coups qui ont été nécessaires pour obtenir le premier double. (Un premier double au 3e lancer doit faire afficher la valeur 3).

### Exercice 1.2  

!!! exo "Question"
    On simule le tirage aléatoire de deux dés, jusqu'à ce que la somme des deux dés soit égale à 7.  
    Écrire un programme qui permet d'afficher le nombre de coups qui ont été nécessaires pour obtenir une somme des deux dés égale à 7.


## 2. Calculs en boucle

### Exercice 2.1  

!!! exo "Question"
    Quelle sera la valeur de la variable `resultat` à l'issue de l'exécution de ces instructions ?  
    Comment décrire ce que réalise ce programme ?
    ```python
    resultat = 1
    while resultat < 1000 :
        resultat = resultat * 2
    ```

### Exercice 2.2

!!! exo "Question"
    Écrire un programme qui permet de déterminer la plus petite puissance de 5 supérieure à 1000.
    Le programme ne devra pas utiliser l'opérateur python `**`.

### Exercice 2.3  

!!! exo "Question"
    Un capital de 1000 euros est déposé sur un compte à intérêts composés à 4 % : chaque année le montant disponible sur le compte est augmenté de 4 %.   
    Si l'on n'effectue ni dépôt ni retrait, combien d'années faut-il pour que le montant disponible atteigne (ou dépasse) 2000 euros ?  
    Écrire un programme en Python pour résoudre ce problème.


## 3. Tracés en boucle

!!! info "Module turtle"
    Ces exercices utilisent le module `turtle`. Ils sont précédés de l'icône :turtle:.  

    Pour exécuter dans un notebook Jupyter de Basthon un programme utilisant des instructions du module `turtle`, le notebook doit contenir l'instruction   `from turtle import *` et le programme doit se terminer avec l’instruction `done()`.

### Exercice 3.1

!!! exo "Question"

    :turtle: Le programme suivant s'arrête-t-il lorsqu'on lance son exécution ? Pourquoi ?

    ```python
    longueur = 150
    while longueur > 0 :
        forward(longueur)
        left(89)
        longueur = longueur - 2
    ```

### Exercice 3.2

!!! exo "Question"

    :turtle: Le programme suivant s'arrête-t-il lorsqu'on lance son exécution ? Pourquoi ?

    ```python
    longueur = 150
    while longueur > 0 :
        forward(longueur)
        left(89)
        longueur = longueur / 2
    ```
