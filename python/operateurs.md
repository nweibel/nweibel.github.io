# Opérateurs

Les opérateurs sont des symboles ou des mots réservés, utilisés pour réaliser des *opérations*  entre des *opérandes*.  
Un opérande est une variable, un littéral ou bien une expression.  
Une expression est une suite valide d'opérateurs et d'opérandes.

## Opérateurs arithmétiques

!!! Info " Remarque"
    Seul le cas d'opérandes à valeurs numériques est envisagé ici.

=== "+"
    **Addition**  
    L'expression `a + b` a pour valeur la somme des deux opérandes `a` et `b`.

    ``` python

    a = 10
    b = 3
    a + b
    ```  
    ``` python
    13
    ```

=== " $-$ "
    **Soustraction**  
     L'expression `a - b` a pour valeur la différence des deux opérandes `a` et `b`.
	``` python

	a = 10
	b = 3
	a - b
	```  
	``` python
	7
	```

=== "&#42;  &#20; "
    **Multiplication**  
    L'expression `a * b` a pour valeur le produit des deux opérandes  `a` et `b`.
	``` python

	a = 10
	b = 3
	a * b
	```  
	``` python
	30
	```

=== "&#47; &#20; "
    **Division**  
    L'expression `a / b` a pour valeur le quotient décimal dans la division  de `a` par `b`.
    ``` python

	a = 10
	b = 3
	a / b
	```  
	``` python
	3.3333333333333335
	```

=== "%"
     **Modulo**  
      L'expression `a % b` a pour valeur le reste dans la division entière  de `a` par `b`.  
    ``` python
	a = 10
	b = 3
	a % b
	```  
	``` python
	1
	```
=== "&#47;&#47; &#20;"
    **Division entière**  
    L'expression `a // b` a pour valeur  le quotient dans la division entière  de `a` par `b`.
    ``` python
	a = 10
	b = 3
	a // b
	```  
	``` python
	3
	```

=== "&#42;&#42;"
    **Exposant**   
      L'expression `a ** b` a pour valeur `a`exposant `b` : a <sup>b </sup>.
	``` python

	a = 10
	b = 3
	a ** b
	```  
	``` python
	1000
	```

## Opérateurs de comparaison

Les opérateurs de comparaison (ou relationnels) sont utilisés pour comparer les valeurs de deux opérandes. L'expression s'écrit sous la forme d'une relation (de comparaison) : elle vaut  `True`si les valeurs des opérandes vérifient la relation et `False` sinon.

=== " =="
    signifie "est égal à ".    
    Exemple : `2 * 3 == 5` vaut `False`

=== " !="
    signifie "n'est pas égal à ".      
    Exemple : `2 * 3 != 5` vaut `True`  

=== " >"
    signifie "est supérieur à ".    
    Exemple : `2 * 3 > 5` vaut `True`  

=== " >="
    signifie "est supérieur ou égal à ".    
    Exemple : `2 * 3 >= 5` vaut `True`  
=== " <"
    signifie "est inférieur à ".     
    Exemple : `2 * 3 < 5` vaut `False`  

=== " <="
    signifie "est inférieur ou égal à ".     
    Exemple : `2 * 3 < 5` vaut `False`  


##Opérateurs logiques

!!! Info " Remarque"
    Seul le cas d'opérandes à valeurs booléennes est envisagé ici.

=== "and"
    **ET logique**  
    L'expression `a and b` vaut `True` si (et seulement si) les deux opérandes `a` et `b` valent `True`.  
    Exemple :
    `2 * 3 > 5 and 2 + 3 == 5 ` vaut `True`  

=== "or"
    **OU logique**  
    L'expression  `a or b` vaut `True` si (et seulement si) au moins l'un des deux opérandes  `a` et `b` vaut `True`.  
    Exemple :
     `2 * 3 < 5 or 2 + 3 == 5 ` vaut `True`    

=== "not"  
    **NON logique** (opérateur unaire[^1])   
    L'expression `not a` vaut `True` si `a`vaut `False`; elle vaut `False`sinon.       
    Exemple :
     `not (2 * 3 < 5) ` vaut `True`

[^1]: opérateur ne nécessitant qu'un opérande




## Opérateurs binaires
Les opérateurs binaires (ou bit à bit) appliquent des opérateurs logiques sur les bits de l'écriture binaire des opérandes.   

=== " & "
    **Et bit à bit**  
    `a & b` : on détermine le résultat bit à bit à l'aide d'un ET logique entre les bits de l'écriture binaire de `a`et `b`.  
    Exemple :
    ``` python

	a = 240   # soit 1111 0000 en binaire
	b = 170   # soit 1010 1010 en binaire
	a & b
	```  
	``` python
	160       # soit 1010 0000 en binaire
	```

=== " | "
    **Ou bit à bit**   
    `a | b` : on détermine le résultat bit à bit à l'aide d'un OU logique entre les bits de l'écriture binaire de `a`et `b`.  
    Exemple :
    ``` python

	a = 240   # soit 1111 0000 en binaire
	b = 170   # soit 1010 1010 en binaire
	a | b
	```  
	``` python
	250       # soit 1111 1010 en binaire
	```
=== " ^ "
    **Ou exclusif bit à bit (xor)**  
    `a ^ b` : on détermine le résultat bit à bit à l'aide d'un OU exclusif (XOR) entre les bits de l'écriture binaire de `a`et `b`.    
    Exemple :
    ``` python

	a = 240   # soit 1111 0000 en binaire
	b = 170   # soit 1010 1010 en binaire
	a ^ b
	```  
	``` python
	90        # soit 0101 1010 en binaire
	```


=== " ~  "  
    **Inversion bit à bit** (opérateur unaire[^1])  
    `~ a` : on détermine le résultat bit à bit à l'aide d'un NON sur les bits de l'écriture binaire de `a`.  
    Exemple :
    ``` python

	a = 240   # soit 1111 0000 en binaire
    ~ a
	```  
	``` python
	15        # soit 0000 1111 en binaire
	```


=== " >> "
    **Décalage bit à bit droite**  
    `a >> b` : on détermine le résultat en décalant les bits de l'écriture binaire de `a` de `b` rangs vers la droite.        
    Exemple :
    ``` python

	a = 48   # soit 0011 0000 en binaire
    a >> 2
	```  
	``` python
	12       # soit 0000 1100  en binaire
	```

=== " << "
    **Décalage bit à bit gauche**   
    `a << b` : on détermine le résultat en décalant les bits de l'écriture binaire de `a` de `b` rangs vers la gauche.     
    Exemple :
    ``` python

	a = 48   # soit 0011 0000 en binaire
    a << 2
	```  
	``` python
	192      # soit 1100 0000 en binaire
	```

## Opérateurs d'affectation

Les opérateurs d’affectation sont utilisés pour attribuer une valeur à une variable.
La variable est l'opérande de gauche. La valeur est l'opérande de droite : il est évalué avant l'affectation.

En dehors de l'affectation à l'aide du symbole `=`,  les autres opérateurs, dits d'affectation augmentée, combinent une opération arithmérique ou binaire et une affectation de valeur à une variable, préalablement initialisée.

=== " = "
    **Opérateur d'affectation**  
    Exemples :   
    `x = 2` : affecte à `x` la valeur `2`.  
    `x = 2*3 + 5` : affecte à `x` la valeur `11`.   
    `x = y` : affecte à `x` la valeur de `y` (qui doit avoir été initialisée préalablement)

===  "+= "
    Exemple :   
    `x += 2` : augmente la valeur de `x` de `2`.  
    Équivalent à `x = x + 2`

=== "-= "
    Exemple :   
    `x -= 2` : diminue la valeur de `x` de `2`.   
    Équivalent à `x = x - 2`

=== " *= "
    Exemple :   
    `x *= 2` : multiplie la valeur de `x` par `2`.  
    Équivalent à `x = x * 2`

=== " /= "
    Exemple :   
    `x /= 2` : divise la valeur de `x` par `2`.  
    Équivalent à `x = x / 2`

=== " %= "
    Exemple :   
    `x %= 2` : remplace `x` par le reste de la division de la valeur de `x`par `2`.    
     Équivalent à `x = x % 2`

=== " //= "
    Exemple :   
    `x //= 2` : divise la valeur de `x` par `2` (quotient entier).  
    Équivalent à `x = x // 2`

=== " **= "
    Exemple :   
    `x **= 2` : élève `x` à la puissance `2`.  
    Équivalent à `x = x ** 2`

=== " &= "
    Exemple :   
    `x &= 2`    
    Équivalent à `x = x & 2`

=== " |= "
    Exemple :   
    `x |= 2`   
    Équivalent à `x = x | 2`

=== " ^= "
    Exemple :   
    `x ^= 2`  
    Équivalent à `x = x ^ 2`

=== " >>= "
    Exemple :   
    `x >>= 2`   
    Équivalent à `x = x >> 2`

=== " <<= "
    Exemple :   
    `x <<= 2`   
    Équivalent à `x = x << 2`

## Opérateurs spéciaux

 Le langage Python offre des types d'opérateurs spéciaux, tels que l'opérateur d'identité ou l'opérateur d'appartenance.

### Opérateur d'identité
`is` et `is not` sont les opérateurs d'identité en Python. Ils permettent de vérifier si deux valeurs (ou variables) référencent (ou non) le même emplacement mémoire.   
Deux variables de même valeur ne sont pas nécessairement identiques.

===	" is "
    `a is b` vaut 	`True` si les opérandes  `a`et `b` référencent le même objet.
    Exemple :
    ```python
    tableau1 = [1, 2, 3]
    tableau2 = tableau1
    tableau1 is tableau2
    ```
    ```
    True
    ```
=== " is not"
    `a is not b` vaut 	`True` si les opérandes  `a`et `b` ne référencent pas le même objet.
    Exemple :
    ```python
    tableau1 = [1, 2, 3]
    tableau2 = [1, 2, 3]
    tableau1 is not tableau2
    ```
    ```
    True
    ```

### Opérateur d'appartenance

`in` et `not in` sont les opérateurs d'appartenance en Python. Ils sont utilisés pour vérifier si une valeur est présente (ou non) dans une séquence (chaîne, liste, tuple, set et dictionnaire).

=== " in "
    `a in b` vaut 	`True` si l'opérande `a` se trouve dans la séquence `b`.  
     Exemple :
     ```python
     tableau = [1, 2, 3]
     a = 2
     a in tableau
     ```
     ```
     True
     ```    
=== " not in "
    `a not in b` vaut `True` si l'opérande `a`ne se trouve pas dans la séquence `b`.  
     Exemple :
     ```python
     tableau = [1, 2, 3]
     a = 4
     a not in tableau
     ```
     ```
     True
     ```

## Priorités des opérateurs
Liste des opérateurs, de la priorité la plus haute à la plus basse :  
`**`   
`* / // %`  
`+ -`  
`< <= > >= == !=`   
`=`   
`not`  
`and`    
`or`
