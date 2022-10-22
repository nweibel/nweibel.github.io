---
hide:
  - toc        # Hide table of contents
---

# Tour de magie
d'après [Prologin – Qualification 2013](https://prologin.org/train/2013/qualification/tour_de_magie)

!!! Info "Énoncé"
    Vous possédez un jeu de cartes contenant chacune une liste de nombres. Le jeu est accompagné d'une notice :

    Demandez à quelqu'un de choisir un nombre entre 1 et 42, sans vous le dire.  
    Montrez-lui les cartes du jeu une à une et demandez-lui si son nombre figure dans la liste.  
    Faites la somme des premiers nombres de chaque carte où la personne a dit OUI, et donnez ce nombre à votre interlocuteur.

Vous décidez alors de bêta-tester le jeu sur votre grand-mère.

« Mamie, choisis un nombre. Est-ce qu'il est dans cette liste ? »

1 3 5 7 9 11 13 15 17 19 21 23 25 27 29 31 33 35 37 39 41 ? → OUI  
2 3 6 7 10 11 14 15 18 19 22 23 26 27 30 31 34 35 38 39 42 ? → OUI  
4 5 6 7 12 13 14 15 20 21 22 23 28 29 30 31 36 37 38 39 ? → NON  
8 9 10 11 12 13 14 15 24 25 26 27 28 29 30 31 40 41 42 ? → OUI  
16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 ? → OUI  
32 33 34 35 36 37 38 39 40 41 42 ? → NON  

« OK, alors ton nombre est le (1 + 2 + 8 + 16 =) 27 ! C'est ça ?  
— Ah, je ne sais plus !  
— :( »

Mais pourquoi se limiter à 42 ? On vous demande de générer les cartes pour pouvoir effectuer le tour avec des nombres de 1 à `n`.

!!! abstract "À réaliser"

    Écrire une fonction `affiche_cartes(n)` qui prend en paramètre le nombre entier `n`, nombre maximum que pourra choisir votre audience, et qui affiche sur la ligne n° `i`, la liste des nombres de la `i`-ème carte.  
    Exemples :
    ```python
    affiche_cartes(15)
    ```
    ```
    1 3 5 7 9 11 13 15
    2 3 6 7 10 11 14 15
    4 5 6 7 12 13 14 15
    8 9 10 11 12 13 14 15
    ```
    ```python
    affiche_cartes(42)
    ```
    ```
    1 3 5 7 9 11 13 15 17 19 21 23 25 27 29 31 33 35 37 39 41
    2 3 6 7 10 11 14 15 18 19 22 23 26 27 30 31 34 35 38 39 42
    4 5 6 7 12 13 14 15 20 21 22 23 28 29 30 31 36 37 38 39
    8 9 10 11 12 13 14 15 24 25 26 27 28 29 30 31 40 41 42
    16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31
    32 33 34 35 36 37 38 39 40 41 42
    ```
