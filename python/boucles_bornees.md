# Boucles bornées : généralités
Les boucles bornées servent à exécuter certaines instructions d'un programme de manière répétitive, un nombre prédéfini de fois.

Par exemple pour répéter quatre fois un bloc d'instructions, on peut écrire :

``` python
    for i in range(4):
        bloc d'instructions
```

!!! abstract "Exemple :"

	```python
	for i in range(4):
        print("Bienvenue !")
	```
	```python
	Bienvenue !
	Bienvenue !
	Bienvenue !
	Bienvenue !
	```

En première approche, on peut se contenter de la syntaxe :   
```python
for i in range(n) :
    bloc d'instructions
```
pour  répéter `n` fois un bloc d'instructions.  
Mais les deux instructions que cette syntaxe combine : `for ... in` et `range()` permettent de nombreuses possibilités.


## L'instruction `for ... in`
La boucle bornée (ou instruction `for ... in`)  permet d’itérer sur les éléments d’une séquence (liste, chaine de caractères, etc.) dans l'ordre dans lequel les éléments apparaissent dans la séquence.   

!!! abstract "Exemple :"

	```python
	liste_mots = ['anthracite', 'blanc', 'cyan']
	for mot in liste_mots:
    	print(mot)
	```
	```python
	anthracite
	blanc
	cyan
	```
La syntaxe de la boucle `for`est :

```python
for element in sequence:
    bloc d'instructions
```
`element` est une variable à laquelle il faut donner un nom, et qui prend successivement les valeurs des éléments de la séquence.   
Le bloc d'instructions à exécuter dans le corps de la boucle est à indenter.

## La fonction `range()`
Pour itérer sur une suite de nombres entiers, on peut utiliser la fonction  `range()`.

!!! abstract "Exemple :"
	```python
	for i in range(4):
 	   print(i, i**2)
	```
	```python
	0 0
	1 1
	2 4
	3 9
	```
	Ici `i`prend successivement les valeurs 0, 1, 2, puis 3 et pour chaque valeur de `i`on affiche `i`et son carré.



La syntaxe générale est `range(debut, fin, pas)`.  

La liste des valeurs générées commence avec la valeur `debut`;  les valeurs suivantes sont générées en augmentant de la valeur `pas` et la liste s'arrête  juste avant d'atteindre ou dépasser la valeur `fin`.

- `debut` est un paramètre facultatif : sa valeur par défaut est `0`.  
- `pas` est aussi un paramètre facultatif. Il vaut `1`par défaut ; il faut donner les 3 paramètres de `range()` pour modifier sa valeur.    

La syntaxe `range(valeur)` est donc équivalente à `range(0, valeur, 1)` et génère la liste les entiers de 0 à `valeur` - 1.


!!! abstract "Exemple :"
    `range(10)` génère la liste 0, 1, 2, 3, 4, 5, 6, 7, 8, 9  

    `range(4, 10)` génère la liste 4, 5, 6, 7, 8, 9  

    `range(1, 12, 3)` génère la liste 1, 4, 7, 10

    `range(5, -10, -3)` génère la liste 5, 2, -1, -4, -7


!!! Info
    L'objet renvoyé par `range()` se comporte presque comme une liste, mais n'en est pas une. Cet objet génère les éléments de la séquence au fur et à mesure de l'itération, sans réellement produire la liste en tant que telle.


## Itérer sur les indices d'une séquence
Pour itérer sur les *indices* d'une séquence, on peut combiner les fonctions `range()` et `len()`.  
La fonction `len()` renvoie la longueur d'une séquence, c'est-à-dire son nombre d'éléments.

!!! abstract "Exemple :"
	```python
	couleurs =  ['anthracite', 'blanc', 'cyan']
	for i in range(len(couleurs)):
	   print(i, couleurs[i])
	```
	```python
	0 anthracite
	1 blanc
	2 cyan
	```

Mais il existe une instruction spécifique pour cela : dans une boucle sur une séquence, l'indice et la valeur correspondante peuvent être récupérés en même temps en utilisant la fonction `enumerate()`.

!!! abstract "Exemple :"
	```python
	couleurs =  ['anthracite', 'blanc', 'cyan']
	for indice, valeur in enumerate(couleurs):
	    print(indice, valeur)
	```
	```python
	0 anthracite
	1 blanc
	2 cyan
	```

## Itérer sur plusieurs séquences
Pour faire une boucle sur deux séquences ou plus en même temps, les éléments peuvent être associés en utilisant la fonction `zip()` :

!!! abstract "Exemple :"
	```python
	couleurs =  ['anthracite', 'blanc', 'cyan']
	codes_hex = ['#303030', '#FFFFFF', '#00FFFF']
	for couleur, code in zip(couleurs, codes_hex):
	    print(couleur, code)
	```
	```python
	anthracite #303030
	blanc #FFFFFF
	cyan #00FFFF
	```
