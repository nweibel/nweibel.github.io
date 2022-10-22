# Bonnes pratiques en programmation python

![](../images/undraw_Code_review_re_woeb.svg){ width=500 }

Écrire un texte dans une *langue* nécessite le respect de règles typographiques concernant notamment l'usage des majuscules, des espaces, de la ponctuation, des paragraphes, etc. 

Il en est souvent de même pour les *langages*, comme les langages de programmation. 

 Des propositions d'améliorations concernant le langage Python sont régulièrement publiées : les [Python Enhancement Proposal (PEP).](https://www.python.org/dev/peps/)
 
L'une de ces propositions, la [PEP 8 : Style Guide for Python Code](https://www.python.org/dev/peps/pep-0008/), consiste en un nombre important de recommandations sur la syntaxe Python. Seules quelques-unes sont présentées ici. 

## 1. Mise en page

* Longueur des lignes : une ligne doit contenir 79 caractères au maximum.

* Indentation : les blocs d'instructions sont à indenter de 4 espaces. 


## 2. Règles de nommage
Les noms de variable, fonction ou classe ne doivent pas contenir d'accent. Les caractères autorisés sont les lettres, les chiffres et le tiret bas : ++underscore++


### Variables et fonctions
Les noms de variables et de fonctions sont à écrire avec des lettres *minuscules* et le tiret bas.

### Constantes

Les noms des constantes sont à écrire avec des lettres *capitales* et le tiret bas.

### Classes

Les noms des classes sont à écrire avec des lettres *minuscules* avec *majuscules* en début de mot.

!!! abstract "Exemples"
    
    === "Variables"
        ```python
        compteur
        mon_tableau
        ```
    
    === "Fonctions"
        ```python
        jouer()
        racine_carree(x)
        ```
    
    === "Constantes"
        ```python
        CLE
        NB_POINTS
        ```
        
    === "Classes"
        ```python
        MaClasse
        MaSuperClasse
        ```        

!!! info
    * Le style recommandé pour nommer les variables et les fonctions en Python est appelé [snake_case](https://fr.wikipedia.org/wiki/Snake_case). 
    * Le style recommandé pour nommer les classes en Python est appelé [CamelCase](https://fr.wikipedia.org/wiki/Camel_case). 

## 3. Espaces

Les espaces suivent la syntaxe anglo-saxonne et non française. 
Ainsi les caractères `;`, `:` et `,` s'écrivent avec un espace après mais pas d'espace avant.  

### Autour des opérateurs 

Il est recommandé de toujours entourer les opérateurs suivants (`=`, `+=`, `-=`,`*=`, `/=`, `==`, `!=`, `>=`, `not`, `in`, `and`, `or`, etc.) d'un espace avant et d'un espace après l'opérateur. 

Les opérateurs suivants (`+`, `-`, `*`, `/`) sont à entourer en règle générale d'un espace avant et d'un espace après l'opérateur. 
Lorsqu'une expression comporte des opérations de différentes priorités, on peut réserver les espaces à l'opérateur de plus faible priorité.

???+ abstract "Exemples"
    ```python
    compteur = 0
    compteur = compteur + 1
    compteur += 1
    x = 2*x + 1
    ```

### Autour des parenthèses

Il n'y a pas d'espace : 

* après les parenthèses, accolades et crochets ouvrants ;
* avant les parenthèses, accolades et crochets fermants ;
* juste avant la parenthèse ouvrante d'une fonction ou le crochet ouvrant d'une liste ou d'un dictionnaire.


???+ abstract "Exemples"
    ```python
    ma_fonction(x)
    mon_dictionnaire = {"valeur": 42, "type": "réponse"}
    mon_tableau = ('a', 'ab', 'ac')
    mon_tableau[0]
    mon_dictionnaire["valeur"]     
    ```

## 4. Docstrings

Une *docstring* (« chaîne de documentation » en français) est un texte qui documente un élément du code comme par exemple les fonctions. Elle est située en début de définition, indentée comme le code, et se compose de trois guillemets ouvrants, puis du commentaire rédigé sous forme de phrases complètes et enfin de trois guillements fermants. Toutes les fonctions et classes devraient disposer d'une *docstring*.

???+ abstract "Exemples"
    ```python
    def est_premier(nombre): 
        """   
        nombre est un entier
        est_premier(nombre) vaut True si nombre est premier, et False sinon 
        """  
        ...
    
    ```
