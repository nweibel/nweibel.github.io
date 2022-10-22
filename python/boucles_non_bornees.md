# Boucles non bornées

## L'instruction while
La boucle non bornée (ou boucle `while`) permet de répéter un bloc d'instructions tant qu'une expression (booléenne) est vraie.

La syntaxe de la boucle `while` est :

```python
while expression:
    bloc d_instructions à répéter
```
où `expression` a pour valeur `True` ou `False`.

Le bloc d'instructions est à indenter.

On utilise généralement cette boucle lorsqu'on ne connait pas le nombre d'itérations au préalable.

!!! abstract "Exemple :"
    La boucle suivante permet d'afficher la plus petite puissance de 2 supérieure à `nombre`.  
    On initialise la variable `valeur` à 1 (c'est à dire $2^0$), et tant qu'elle reste inférieure à `nombre` on la multiplie par 2. Dès que l'une des valeurs obtenues est supérieure ou égale à `nombre` on sort de la boucle et on l'affiche.
	```python
	nombre = 999
	valeur = 1
	while valeur < nombre:
		valeur = valeur * 2
	print(valeur)
	```
	```
	1024
	```
    Si l'on souhaite savoir de quelle puissance de 2 il s'agit, on peut ajouter un *compteur* qu'on peut appeler `puissance` : il s'agit d'une variable initialisée à 0 (car `valeur` est initialisée à $2^0$) et incrémentée à chaque fois que `valeur` est multipliée par 2.
    ```python
    nombre = 999
    valeur = 1
    puissance = 0
    while valeur < nombre:
      valeur = valeur * 2
      puissance = puissance + 1
    print(puissance, valeur)
    ```
    ```
    10 1024
    ```

## Boucle infinie
Les boucles `while` présentent un risque de boucle infinie.
Pour que la boucle prenne fin, il faut s'assurer que l'expression qui conditionne l'exécution du corps de la boucle prendra la valeur `False`, éventuellement après de très nombreuses étapes. Il faut donc s’assurer que la valeur de cette expression est bien modifiée par les instructions du corps de la boucle (ou par un événement).

!!! abstract "Exemple :"
	La boucle suivante ne se termine jamais : la variable `valeur` n'est jamais modifiée dans le corps de la boucle. Seule une action de l’utilisateur peut interrompre l'exécution du programme.

	```python
    compteur = 0
    valeur = 0
    while valeur == 0:
        compteur = compteur + 1
        print(compteur)
	```

À l'inverse, si l'expression qui conditionne l'exécution du corps de la boucle a pour valeur `False` dès le départ, le corps de la boucle n’est jamais exécuté. 	
