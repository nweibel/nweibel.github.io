# Instructions conditionnelles : généralités

Les instructions conditionnelles permettent de **sélectionner le bloc d'instructions à exécuter** selon la valeur d'une expression booléenne.

## L'instruction `if`

La syntaxe de l'instruction `if` est :

```python
if expression:
    bloc_instructions_1
bloc_instructions_2
```
où `expression` a pour valeur `True` ou `False`. Il s'agit de l'expression de la *clause* `if`.

Si `expression` a pour valeur `True`, le bloc `bloc_instructions_1` est exécuté, sinon, il est ignoré.  
Dans tous les cas, si le bloc `bloc_instructions_2` existe, il est exécuté ensuite.  

!!! abstract "Exemple : l'expression de la clause `if` a pour valeur `True`"

    ```python
    nb = 174
    if nb % 2 == 0:
        print(nb, "est un nombre pair")
    print("fin des tests")
    ```
    ```
    174 est un nombre pair
    fin des tests
    ```

	`nb % 2 == 0` est une expression qui vaut `True` lorsque `nb` vaut 174. L'instruction `print(nb, "est un nombre pair")` est exécutée.

!!! abstract "Exemple : l'expression de la clause `if` a pour valeur `False`"

	```python
	nb = 181
	if nb % 2 == 0:
	    print(nb, "est un nombre pair")
	print("fin des tests")
	```
	```
	fin des tests
	```

	`nb % 2 == 0` est une expression qui vaut `False` lorsque `nb` vaut 181. L'instruction `print(nb, "est un nombre pair")` est ignorée.

## L'instruction `if … else`

La syntaxe de l'instruction `if … else` est :

```python
if expression:
    bloc_instructions_1
else :
    bloc_instructions_2
bloc_instructions_3
```
où `expression` a pour valeur `True` ou `False`.  

- Lorsque `expression` a pour valeur `True`, le bloc `bloc_instructions_1` est exécuté, et le bloc `bloc_instructions_2` est ignoré.
- Lorsque `expression` a pour valeur `False`, le bloc `bloc_instructions_1` est ignoré, et le bloc `bloc_instructions_2` est exécuté.  

On exécute donc *soit* le bloc `bloc_instructions_1`, *soit* le bloc `bloc_instructions_2`, mais jamais les 2.  

- Dans tous les cas, si le bloc `bloc_instructions_3` existe, il est exécuté ensuite.  

!!! abstract "Exemple : "

	```python
	nb = 5
	if nb % 2 == 0:
	    print(nb, "est un nombre pair")
	else :
	    print(nb, "est un nombre  impair")
	```
	```
	5 est un nombre impair
	```

	`nb % 2 == 0` est une expression qui vaut `False` lorsque `nb` vaut 5. L'instruction `print(nb, "est un nombre pair")` est ignorée mais `print(nb, "est un nombre  impair")` est exécutée.

## L'instruction `if … elif … else`

Lorsque l'on souhaite disposer de plus d'une alternative, l'instruction `if … elif … else` permet de conditionner l'exécution de plusieurs blocs d'instructions par la valeur de plusieurs expressions booléennes.

`elif` est équivalent à `else if`. On peut ajouter autant de clauses `elif` que nécessaires.

La syntaxe de l'instruction `if … elif … else` est :

```python
if expression1:
    bloc_instructions_1
elif expression2 :
    bloc_instructions_2
else:
    bloc_instructions_3
bloc_instructions_4
```
où `expression1` et `expression2` ont pour valeur `True` ou `False`.  

- Lorsque `expression1` a pour valeur `True`, le bloc `bloc_instructions_1` est exécuté, et les blocs `bloc_instructions_2` et `bloc_instructions_3` sont ignorés.
- Lorsque `expression1` a pour valeur `False`:  
    - le bloc `bloc_instructions_1` est ignoré,
    - si `expression2` a pour valeur `True`, le bloc `bloc_instructions_2` est exécuté, et le bloc `bloc_instructions_3` est ignoré ;
    - si `expression2` a pour valeur `False`, le bloc `bloc_instructions_2` est ignoré, et le bloc `bloc_instructions_3` est exécuté.  

On exécute donc *soit* le bloc `bloc_instructions_1`, *soit* le bloc `bloc_instructions_2`, *soit* le bloc `bloc_instructions_3`, mais toujours un seul parmi les 3.  

- Dans tous les cas, si le bloc `bloc_instructions_4` existe, il est exécuté ensuite.  

!!! abstract "Exemple : "

	```python
	nb = 178
	if nb % 10 == 0:
	    print(nb, "est un multiple de 10")
	elif nb % 5 == 0:
		print(nb, "est un multiple de 5, mais pas de 10")
    elif nb % 2 == 0:
        print(nb, "est un multiple de 2, mais pas de 10")
	else :
	    print(nb, "n'est ni un multiple de 2, ni un multiple de 5")
	```
	```
	178 est un multiple de 2, mais pas de 10
	```

	`nb % 10 == 0` est une expression qui vaut `False` lorsque `nb` vaut 178.  
	L'instruction `print(nb, "est un multiple de 10")` est ignorée.  
	`nb % 5 == 0` est une expression qui vaut `False` lorsque `nb` vaut 178.  
	L'instruction `print(nb, "est un multiple de 5, mais pas de 10")` est aussi ignorée.  
    `nb % 2 == 0` est une expression qui vaut `True` lorsque `nb` vaut 178.
	L'instruction `print(nb, "est un multiple de 2, mais pas de 10")` est donc exécutée.
