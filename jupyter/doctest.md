# Effectuer des tests automatisés avec doctest dans un notebook Jupyter

On peut réaliser des tests automatisés dans un fichier python grâce à la bibliothèque [doctest](https://docs.python.org/fr/3.7/library/doctest.html).

La bibliothèque doctest permet de détecter automatiquement les tests écrits dans la *docstring*, ou chaine de documentation, de les lancer et d’afficher un rapport.
Les valeurs à tester doivent être précédées de `>>>`, et le résultat attendu doit être en début de ligne suivante.

Voici un exemple pour la fonction `est_parfait` :
```python
def est_parfait(n) : 
    '''n est un entier strictement positif
    parfait(n) vaut True si l'entier n est parfait ou False sinon.
    Un nombre parfait est tel que la somme de ses diviseurs est égale à son double.
    >>> est_parfait(2)
    False
    >>> est_parfait(6)
    True
    >>> est_parfait(27)
    False
    >>> est_parfait(28)
    True
    '''

   assert(n>0 and type(n)==int), "l'argument doit être un entier strictement positif"
   diviseurs = [i for i in range(1,n+1) if n%i == 0]
   return sum(diviseurs) == 2*n
```

On exécute dans une cellule du notebook les instructions suivantes :
```python
import doctest
doctest.testmod()
```

Un rapport concis des tests est alors affiché (attention, les tests sont lancés sur l’ensemble du notebook) :
`TestResults(failed=0, attempted=4)`
ce qui signifie ici que les 4 tests n'ont donné lieu à aucun échec.  

On peut ajouter l’argument `verbose=True` en écrivant `doctest.testmod(verbose=True)`: le rapport produit est alors plus explicite.  

```python
Trying:
    est_parfait(2)
Expecting:
    False
ok
Trying:
    est_parfait(6)
Expecting:
    True
ok
Trying:
    est_parfait(27)
Expecting:
    False
ok
Trying:
    est_parfait(28)
Expecting:
    True
ok
1 items had no tests:
    __main__
1 items passed all tests:
   4 tests in __main__.est_parfait
4 tests in 2 items.
4 passed and 0 failed.
Test passed.
TestResults(failed=0, attempted=4)
```