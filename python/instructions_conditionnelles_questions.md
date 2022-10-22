# Questions : instructions conditionnelles

#### Question 1

!!! exo "Question"
    Après exécution du programme suivant, quelle serait la valeur affichée ?

    ```python
    nb = 15
    if nb % 2 == 0 :
        nb = nb * 5
    else:
        nb = nb * 2
    print(nb)
    ```

=== "Propositions de réponses"
    - [ ] 15
    - [ ] 30
    - [ ] 75
    - [ ] 150



=== "Solution"
    - [ ] 15
    - [x] 30
    - [ ] 75
    - [ ] 150




=== "Arguments"  
    L'expression de la clause `if`, `nb % 2 == 0`, a pour valeur `False` quand `nb` vaut 15.  
    L'instruction exécutée est donc `nb = nb * 2`, ce qui affecte à `nb` la valeur 30.  

#### Question 2  

!!! exo "Question"
    Après exécution du programme suivant, quelle serait la valeur affichée ?

    ```python
    nb = 15
    if nb % 2 == 0 :
        nb = nb * 5
    elif nb % 5 == 0:
        nb = nb * 2
    else:
        nb = nb * 3
    print(nb)
    ```

=== "Propositions de réponses"
    - [ ] 30
    - [ ] 45
    - [ ] 75
    - [ ] 150


=== "Solution"
    - [x] 30
    - [ ] 45
    - [ ] 75
    - [ ] 150


=== "Arguments"  
    L'expression de la clause `if`, `nb % 2 == 0`, a pour valeur `False` quand `nb` vaut 15.  
    L'expression de la clause `elif`, `nb % 5 == 0`, a pour valeur `True` quand `nb` vaut 15. L'instruction exécutée est donc `nb = nb * 2`, ce qui affecte à `nb` la valeur 30.  

#### Question 3

!!! exo "Question"
    Après exécution du programme suivant, quelle serait la valeur affichée ?

    ```python
    nb = 12
    if nb % 2 == 0 :
        nb = nb * 5
    if nb % 5 == 0:
        nb = nb * 2
    else:
        nb = nb * 3
    print(nb)
    ```

=== "Propositions de réponses"
    - [ ] 24
    - [ ] 36
    - [ ] 60
    - [ ] 120


=== "Solution"
    - [ ] 24
    - [ ] 36
    - [ ] 60
    - [x] 120


=== "Arguments"  
    L'expression de la clause du premier `if`, `nb % 2 == 0`, a pour valeur `True` quand `nb` vaut 12. L'instruction `nb = nb * 5` est donc exécutée, ce qui affecte à `nb` la valeur 60.  
    L'expression de la clause du second `if`, `nb % 5 == 0`, a pour valeur `True` quand `nb` vaut 60. L'instruction `nb = nb * 2`, est donc aussi exécutée, ce qui affecte à `nb` la valeur 120.  

    Cet exemple montre qu'il faut attentivement distinguer les instructions `if … elif` des instructions `if` successives.
