# Fonctions

Les fonctions permettent de décomposer un programme en plusieurs éléments plus simples, plus lisibles et que l'on peut combiner.  
Une fonction associe un bloc d'instructions à un nom.

L'utilisation d'une fonction nécessite deux étapes :  

- sa **déclaration** : on définit le nom de la fonction, ses paramètres et les instructions à exécuter ;

- son **appel** : on exécute la fonction pour des valeurs explicites des paramètres.


## La déclaration d'une fonction

La syntaxe de la déclaration d'une fonction est :  
```python
def nom_de_la_fonction(parametres):
    bloc_instructions
```
La définition d'une fonction commence par le mot-clé `def`.  
Les paramètres sont séparés par des virgules. Il peut ne pas y en avoir : dans ce cas on conserve tout de même les parenthèses.  
La première ligne se termine par un double point.  
Le bloc `bloc_instructions` est indenté. On l'appelle le *corps* de la fonction.

Il est fréquent (mais pas obligatoire) que la fonction renvoie une valeur : on utilise pour cela le mot-clé `return`.
En l'absence de `return` la fonction peut par exemple réaliser des affichages, des tracés ou écrire dans un fichier. Elle renverra alors implicitement `None`.

!!! abstract "Exemple 1 : une fonction à valeur numérique"

    ```python
    def f(x,y):
        return x ** 2 - y ** 2
    ```

    Cette fonction s'appelle `f`, elle demande deux paramètres et elle renvoie la différence des carrés des paramètres.

!!! abstract "Exemple 2 : une fonction à valeur booléenne"

    ```python
    def validation(mot):
        return mot == 'secret123'
    ```

    Cette fonction s'appelle `validation`, elle demande un seul paramètre et elle renvoie `True` si le paramètre est égal à la chaine 'secret123' et `False`sinon.

## L'appel d'une fonction

La syntaxe de l'appel d'une fonction est :

```python
nom_de_la_fonction(valeurs_des_parametres)
```

Lors de la définition d'une fonction, le type des paramètres n'est pas précisé. Lors de l'appel de la fonction, il est nécessaire que les instructions exécutées soient compatibles avec les types des valeurs des paramètres.

!!! abstract "Exemple 1 : fonction `f` "
    1er cas :
	```python
	f(5,3)
	```
	```
	16
	```

	Les paramètres `x`et `y` de `f` prennent respectivement les valeurs 5 et 3.  
	La fonction renvoie la valeur $5 \times 5 - 3 \times 3$, soit $16$.

    2e cas : 	
	```python
	f('a','b')
	```
	```
	TypeError: unsupported operand type(s) for Pow: 'str' and 'int'
	```

	Les paramètres `x`et `y` de `f` prennent respectivement pour valeurs les chaines de caractères 'a' et 'b'.
	Comme l'opérateur `** 2` n'a pas de signification pour une chaine de caractères, l'appel de la fonction avec ces valeurs renvoie une erreur.

!!! abstract "Exemple 2 : fonction `validation` "

    1er cas :
	```python
	validation('mot_de_passe123')
	```
	```
	False
	```

	Le paramètre `mot`de la fonction `validation` prend la valeur 'mot_de_passe123'.  
	La fonction renvoie la valeur de 'mot_de_passe123' == 'secret123', soit `False`.

    2e cas : 	
	```python
	validation(123)
	```
	```
	False
	```

	Le paramètre `mot`de la fonction `validation` prend la valeur 123, qui est un entier et non une chaine de caractères.  
	Néanmoins l'exécution de la fonction ne déclenche pas d'erreur : elle renvoie la valeur de 123 == 'secret123', qui est `False`.  

## Fonctions anonymes
On peut construire une fonction dont le corps est limité à une expression à l'aide d'une *lambda-expression*.  

On écrit le mot-clé `lambda` suivi des paramètres de la fonction, d'un double-point `:` et de l'expression de la fonction.


!!! abstract "Exemple"
    ```python
    lambda x: x**2.   # définition de la fonction carré
    ```
    ```
    <function __main__.<lambda>(x)>
    ```
    ```python
    (lambda x: x**2)(7)   # image de 7 par la fonction carré
    ```
    ```
    49    
    ```


## Pour approfondir

La [documentation python](https://docs.python.org/fr/3.7/tutorial/controlflow.html#more-on-defining-functions) présente d'autres notions liées aux fonctions :  

- Valeur par défaut des paramètres
- Les paramètres nommés
- Listes de paramètres arbitraires
- Séparation des listes de paramètres
- Chaînes de documentation
- Annotations de fonctions
