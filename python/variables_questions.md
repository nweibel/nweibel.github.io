# Questions : variables

## 1. Affecter à une variable la valeur d'une autre variable

### Question 1.1  

!!! exo "Question"
    Quelle est la valeur référencée par la variable `a` à l'issue de l'exécution du programme suivant ?
    ```python
    a = 2
    b = 3
    a = b
    ```


=== "Propositions de réponses"
    - [ ] 2
    - [ ] 3
    - [ ] 'a'
    - [ ] 'b'

=== "Solution"
    - [ ] 2
    - [x] 3
    - [ ] 'a'
    - [ ] 'b'

=== "Arguments"
    La dernière instruction d'affectation d'une valeur à `a` est ` a = b`, qui affecte à `a` la valeur référencée par `b`, c'est à dire 3.


### Question 1.2  

!!! exo "Question"
    Quelle est la valeur référencée par la variable `a` à l'issue de l'exécution du programme suivant ?
    ```python
    a = 2
    b = 3
    a = b
    b = 4
    ```


=== "Propositions de réponses"
    - [ ] 2
    - [ ] 3
    - [ ] 4
    - [ ] 'b'

=== "Solution"
    - [ ] 2
    - [x] 3
    - [ ] 4
    - [ ] 'b'

=== "Arguments"
    La dernière instruction d'affectation d'une valeur à `a` est ` a = b`, qui affecte à `a` la valeur référencée par `b`, c'est à dire 3. Le fait que la valeur référencée par `b` soit ultérieurement modifiée n'a pas d'effet sur la valeur référencée par `a`.

### Question 1.3  

!!! exo "Question"
    Quelle est la valeur référencée par la variable `b` à l'issue de l'exécution du programme suivant ?
    ```python
    a = 2
    b = 3
    a = b
    b = a
    ```


=== "Propositions de réponses"
    - [ ] 2
    - [ ] 3
    - [ ] 'a'
    - [ ] 'b'

=== "Solution"
    - [ ] 2
    - [x] 3
    - [ ] 'a'
    - [ ] 'b'

=== "Arguments"
    La dernière instruction d'affectation d'une valeur à `b` est ` b = a`, qui affecte à `b` la valeur référencée par `a`, c'est à dire 3.

## 2. Modifications successives

### Question 2.1

!!! exo "Question"
    Quelle est la valeur référencée par la variable `a` à l'issue de l'exécution du programme suivant ?
    ```python
    a = 5
    a = a * 2
    a = a * 3
    ```

=== "Propositions de réponses"
    - [ ] 5
    - [ ] 10
    - [ ] 15
    - [ ] 30

=== "Solutions"
    - [ ] 5
    - [ ] 10
    - [ ] 15
    - [x] 30


=== "Arguments"  
    Chacune des instructions modifie successivement la valeur référencée par `a`. La valeur référencée est d'abord 5, puis 10 et enfin 30.


### Question 2.2

!!! exo "Question"
    Quelle est la valeur référencée par la variable `a` à l'issue de l'exécution du programme suivant ?
    ```python
    a = 3
    b = 4
    a = a + b
    b = b + 1
    a = a + b
    ```

=== "Propositions de réponses"
    - [ ] 7
    - [ ] 8
    - [ ] 10
    - [ ] 12

=== "Solutions"
    - [ ] 7
    - [ ] 8
    - [ ] 10
    - [x] 12


=== "Arguments"  
    Après exécution de la ligne 3, la valeur référencée par `a` est 7.
    Après exécution de la ligne 4, la valeur référencée par `b` est 5.
    Après exécution de la ligne 5, la valeur référencée par `a` est 12.


## 3. Validité des identifiants

### Question 3.1

!!! exo "Question"

    Parmi les noms suivants, lequel ne peut pas être l'identifiant d'une variable ?  

=== "Propositions de réponses"
    - [ ] `secondes`
    - [ ] `2ndes`
    - [ ] `minutes_secondes`
    - [ ] `minutes_2ndes`

=== "Solution"
    - [ ] `secondes`
    - [x] `2ndes`
    - [ ] `minutes_secondes`
    - [ ] `minutes_2ndes`

=== "Arguments"
       L'identifiant d'une variable ne peut pas commencer par un chiffre.

### Question 3.2

!!! exo "Question"

    Parmi les noms suivants, lesquels peuvent être l'identifiant d'une variable ?  

=== "Propositions de réponses"
    - [ ] `roi`
    - [ ] `d@me`
    - [ ] `as`
    - [ ] `dix`
    - [ ] `10_pique`
    - [ ] `_10`

=== "Solution"
    - [x] `roi`
    - [ ] `d@me`
    - [ ] `as`
    - [x] `dix`
    - [ ] `10_pique`
    - [x] `_10`

=== "Arguments"
    L'identifiant d'une variable ne peut pas commencer par un chiffre, ni contenir de caractère spécial comme `@`. Enfin `as` est un mot réservé du langage python.
