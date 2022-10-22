---
hide:
  - toc        # Hide table of contents
---

# Le problème des précipitations
d'après [The rainfall problem](https://dl.acm.org/doi/10.1145/2828959.2828963)

!!! exo "Énoncé"
    On dispose d'un tableau contenant des quantités de précipitations, recueillies quotidiennement sur un site de relevés météorologiques.  
    L'équipement de collecte de pluie rapporte parfois par erreur une valeur négative : ces valeurs sont à ignorer.  
    On demande de calculer la valeur moyenne des quantités de précipitations.

!!! abstract "À réaliser"

    Écrire une fonction `moyenne_precipitations(valeurs_precipitations)` qui prend en paramètre un tableau de nombres entiers `valeurs_precipitations`, et qui renvoie :  
    - la moyenne des valeurs positives de ce tableau,   
    - ou le message "Donnée(s) invalide(s)" si le tableau ne contient aucune donnée valide.

    Exemples :
    ```python
    moyenne_precipitations([12, 0, 56, 67, 23, 34, 0, 78, 45, 89])
    ```
    ```
    40.4
    ```

    ```python
    moyenne_precipitations([15, -18, 56, 23, 35, 78, 45, -36])
    ```
    ```
    42.0
    ```
    ```python
    moyenne_precipitations([0, 0, 0, 0, 0])
    ```
    ```
    0.0
    ```
    ```python
    moyenne_precipitations([-3])
    ```
    ```
    "Donnée(s) invalide(s)"
    ```

??? Info "Note pour les enseignants"
    [Teacher Note: The Rainfall Problem](https://runestone.academy/runestone/books/published/TeacherCSP/CSPIntroData/teacherRainfall.html)
