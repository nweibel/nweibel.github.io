# Messages d'erreurs

![](../images/undraw_fixing_bugs_w7gi.svg){ width='400' }


<!-- {{ python_carnet('messages_d_erreurs.ipynb', hauteur=800) }}{: target='_blank' }
-->
Réussir à trouver les erreurs contenues dans un programme est une compétence essentielle pour programmer. Python signale certaines erreurs en indiquant leur position estimée dans le programme et leur type.

Voici quelques types d'erreurs, usuels dans des programmes de débutants,  qu'il est conseillé de connaître, pour apprendre à les repérer rapidement, pour interpréter correctement les messages d'erreurs affichés et pour en proposer une correction.

## 1. Erreurs de syntaxe : *SyntaxError*
Python ne peut exécuter un programme que si sa syntaxe est correcte. Dans le cas contraire, le processus s’arrête et adresse un message d’erreur.   
Le terme *syntaxe* se réfère aux règles que les auteurs du langage ont établies pour la structure du programme.

### 1.1 *Invalid syntax*

Les erreurs de syntaxe ont de nombreuses origines, et la liste suivante est loin d'être exhaustive :

- il manque une ou plusieurs parenthèses à ligne précédant celle signalée par le message d'erreur,
- il manque le double point `:` qui doit apparaître à la fin des lignes contenant des instructions composées : `if`, `else`, `while`, `for`, ...
- l'opérateur `=` a été  utilisé pour tester une égalité,  au lieu de `==`,
- une instruction tente d'affecter une valeur à une variable dont l'identifiant est un mot réservé du langage Python.

??? abstract "Exemple"
    ```python
    for i in range(10)
        print(i)
    ```
    ```
        for i in range(10)
                          ^
    SyntaxError: invalid syntax
    ```
    Le curseur désigne ici l'absence du double point `:` attendu.

### 1.2. *EOL while scanning string literal*

*EOL* signifie *end of line* : le message d'erreur indique qu'une chaîne de caractères est mal délimitée, il manque probablement des guillemets.  

??? abstract "Exemple"
    ```python
    "Hello World!
    ```
    ```
    "Hello World!
                 ^
    SyntaxError: EOL while scanning string literal
    ```


### 1.3 *'return' outside function*

Le mot-clé `return` est situé en dehors de la fonction : une indentation appropriée permet souvent de corriger l'erreur.

??? abstract "Exemple"
    ```python
    def f(x):
        y = 2 * x
    return y
    ```
    ```
    SyntaxError: 'return' outside function
    ```

### 1.4 *cannot assign to function call*

Le programme tente d'affecter une valeur à ce qui semble être l'appel d'une fonction. L'erreur est souvent due à l'usage inapproprié de parenthèses, par exemple à la place de crochets.

??? abstract "Exemple"
    ```python
    tableau = [1, 2]
    tableau(1) = 3
    ```
    ```
    SyntaxError: cannot assign to function call
    ```

## 2. Erreurs d'indentation : *IndentationError*

Ce type d'erreur est explicite : l'indentation est incorrecte. Trois messages permettent de distinguer si un bloc de code a été trop, trop peu ou mal indenté.

### 2.1 *Expected an indented block*

Un bloc n'est pas indenté, alors qu'il devrait l'être.

??? abstract "Exemple"
    ```python
    for i in range(4):
    print(i)
    ```
    ```
    print(i)
    ^
    IndentationError: expected an indented block
    ```

### 2.2 *Unexpected indent*

Un bloc est indenté, alors qu'il ne devrait pas l'être.

??? abstract "Exemple"
    ```python
    for i in range(4):
        print(i)
            print(2 * i)
    ```
    ```
    print(2 * i)
    ^
    IndentationError: unexpected indent
    ```

### 2.3 *Unindent does not match any outer indentation level*

Le niveau d'indentation d'un bloc ne correspond pas aux autres niveaux d'indentation.

??? abstract "Exemple"
    ```python
    for i in range(4):
        print(i)
      print(2 * i)
    ```
    ```
    print(2 * i)
               ^
    IndentationError: unindent does not match any outer indentation level
    ```

## 3. Erreur de type : *TypeError*

### 3.1 *...() takes ... positional arguments but ... was given*

L'appel à une fonction a été réalisé avec un nombre d’arguments qui ne correspond pas à ce qui est attendu.

??? abstract "Exemple"
    ```python
    def somme(a, b):
        return a + b

    somme(23, 34, 45)
    ```
    ```
    TypeError: somme() takes 2 positional arguments but 3 were given
    ```

### 3.2  *unsupported operand type(s) for +: 'int' and 'str'*
 ou *can only concatenate str (not "int") to str*

Les types des opérandes et des opérateurs ne sont pas compatibles. Par exemple, avec un opérateur `+`, l'opération réalisée est une addition si les deux opérandes sont des nombres, ou une concaténation si les opérandes sont des chaines de caractères. Mais une `TypeError` est déclenchée si les deux opérandes ne sont pas de même type.

??? abstract "Exemples"
    ```python
    3 + "2"
    ```
    ```
    TypeError: unsupported operand type(s) for +: 'int' and 'str'
    ```

    ```python
    "3" + 2
    ```
    ```
    TypeError: can only concatenate str (not "int") to str
    ```

## 4. Erreur de nom  : *NameError*

Une expression contient un nom qui ne correspond à aucune variable ou fonction préalablement définie.

??? abstract "Exemples"
    ```python
    a = a + 1
    ```
    ```
    NameError: name 'a' is not defined
    ```

## 5. Erreur d'index : *IndexError*

Une instruction tente d'accéder à un élément d’indice trop grand dans une séquence (chaîne, tableau, p-uplet...).

??? abstract "Exemple"
    ```python
    tableau = [1, 2]
    a = tableau[2]
    ```
    ```
    IndexError: list index out of range
    ```

## 6. Erreur de division par zéro : *ZeroDivisionError*
Une instruction tente de faire une division par zéro. Vérifier les valeurs prises par les dénominateurs.

??? abstract "Exemple"
    ```python
    tableau = []
    for i in range(3):
        tableau.append(1 / i)
    ```
    ```
    ZeroDivisionError: division by zero
    ```
    `i` est initialisé à 0 par la fonction `range` et la division par `i` déclenche une erreur.
