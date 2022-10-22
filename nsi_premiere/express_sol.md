# Questions express


![](../images/undraw_Questions_re_1fy7.svg){ width='400' }

Des questions en tout genre, dont la réponse peut se trouver avec quelques lignes de code.  

Les réponses et propositions de code sont données brutes sans aucun argument de validité.

## Quels sont les entiers... ?

### Énoncé 1  

!!! Question
    Quels sont les entiers $n$ tels que $n!$ (factorielle $n$) comporte exactement $n$ chiffres ?

??? Success "Réponse"
    1, 23, 24 et 25  

??? Note "Un code possible"
    ```python
        from math import factorial
        [n for n in range(100) if len(str(factorial(n))) == n]
    ```  


### Énoncé 2  

!!! Question
    Quels sont les entiers qui sont égaux à la somme de la factorielle de leur(s) chiffre(s) ?

??? Success "Réponse"
    1, 2, 145 et 40585

??? Note "Un code possible"
    ```python
        from math import factorial
        factorielles = {n:factorial(n) for n in range(10)}
        def verif(n):
           somme = 0
           for chiffre in str(n) :
              somme += factorielles[int(chiffre)]
           return n == somme
        [n for n in range(10000000) if verif(n)]
    ```  
    [oeis](https://oeis.org/A014080)
