# :octicons-markdown-16: Mémo Markdown

Markdown a été créé par [John Gruber](https://daringfireball.net/projects/markdown/syntax) en 2004. Markdown est conçu pour être aussi facile à lire et à écrire que possible. Il est aisément convertible en HTML.  
Les fichiers Markdown possèdent l’extension `.md`. Markdown est également le langage des cellules de texte d'un notebook Jupyter.  

Voici la plupart des éléments de la syntaxe Markdown et leur équivalent en HTML.



## :octicons-heading-24: Titres

=== "Markdown"
    ```
    # Titre de niveau 1  
    ## Titre de niveau 2
    ### Titre de niveau 3
    #### Titre de niveau 4
    ##### Titre de niveau 5
    ###### Titre de niveau 6
    ```

=== "HTML"
    ```html
    <h1>Titre de niveau 1</h1>
    <h2>Titre de niveau 2</h2>
    <h3>Titre de niveau 3</h3>
    <h4>Titre de niveau 4</h4>
    <h5>Titre de niveau 5</h5>
    <h6>Titre de niveau 6</h6>
    ```



## :octicons-italic-24: Emphase

=== "Markdown"
    ```
    *Texte en italique*
    **Texte en gras**   
    ~~Texte barré~~
    ```  

=== "HTML"
    ```html
    <p><em>Texte en italique</em></p>
    <p><strong>Texte en gras</strong> </p>
    <p><s>Texte barré</s></p>
    ```

=== "Aperçu"
    *Texte en italique*  
    **Texte en gras**   
    ~~Texte barré~~


## :material-playlist-edit: Listes

### :octicons-list-unordered-24: Listes à puces  

=== "Markdown"
    ```md
    * Élément 1
    * Élément 2
        * Sous-élément 1
        * Sous élément 2
    * Élément 3
    ```

=== "HTML"
    ```html
    <ul>
    <li>Élément 1</li>
    <li>Élément 2
        <ul>
            <li>Sous-élément 1</li>
            <li>Sous élément 2</li>
        </ul>
    </li>
    <li>Élément 3</li>
    </ul>
    ```

=== "Aperçu"
    * Élément 1
    * Élément 2
        * Sous-élément 1
        * Sous élément 2
    * Élément 3


### :octicons-list-ordered-24: Listes ordonnées  

=== "Markdown"
    ```md
    1. Élément 1
    2. Élément 2
        1. Sous-élément 1
        2. Sous élément 2
    3. Élément 3
    ```

=== "HTML"
    ```html
    <ol>
    <li>Élément 1</li>
    <li>Élément 2
        <ol>
            <li>Sous-élément 1</li>
            <li>Sous élément 2</li>
        </ol>
    </li>
    <li>Élément 3</li>
    </ol>
    ```

=== "Aperçu"
    1. Élément 1
    2. Élément 2
        1. Sous-élément 1
        2. Sous élément 2
    3. Élément 3


 Remarque : la valeur numérique des entrées des éléments n'a pas d'importance :   

=== "Markdown"
    ```md
    1. Élément 1
    1. Élément 2
    4. Élément 3
    ```

=== "Aperçu"
    1. Élément 1
    1. Élément 2
    4. Élément 3



### :octicons-tasklist-24: Listes à cocher

=== "Markdown"
    ```md
    - [x] Élément 1, coché
    - [ ] Élément 2, non-coché
        - [x] Sous-élément 2.1, coché
        - [ ] Sous-élément 2.2, non-coché
    - [ ] Élément 3, non-coché
    ```

=== "HTML"
    ```html
    <ul>
    <li>
        <label>
            <input type="checkbox" checked>
            Élément 1, coché
        </label>
    </li>
    <li>
        <label>
            <input type="checkbox">
            Élément 2, non-coché
        </label>
    </li>
    <ul>
        <li>
            <label>
                <input type="checkbox" checked>
                Sous-élément 2.1, coché
            </label>
        </li>
        <li>
            <label>
                <input type="checkbox">
                Sous-élément 2.2, non-coché
            </label>
        </li>
    </ul>
    <li>
        <label>
            <input type="checkbox">
            Élément 3, non-coché
        </label>
    </li>
    </ul>
    ```

=== "Aperçu"
    - [x] Élément 1, coché
    - [ ] Élément 2, non-coché
        - [x] Sous-élément 2.1, coché
        - [ ] Sous-élément 2.2, non-coché
    - [ ] Élément 3, non-coché

## :octicons-quote-24: Citations

=== "Markdown"
    ```md
    > Voici une citation  
    > sur plusieurs lignes
    ```

=== "HTML"
    ```html
    <blockquote>
    <p>Voici une citation</p>  
    <p>sur plusieurs lignes</p>  
    </blockquote>
    ```

=== "Aperçu"
    > Voici une citation  
    > sur plusieurs lignes



## :octicons-horizontal-rule-24: Séparateurs horizontaux

=== "Markdown"
    ```md
     ---  

    ou *** ou ___  
    ```

=== "HTML"
    ```html
    <hr/>
    ```

=== "Aperçu"

    ---      



## :octicons-link-24: Liens

=== "Markdown"
    ```md
    [Ceci est le texte du lien](https://www.carnets.info)

    [Ceci est un lien avec un titre au survol](https://www.carnets.info "Le titre du lien")

     Ceci est un lien automatique : https://www.carnets.info
     On rencontre aussi cette syntaxe : <https://www.carnets.info>

    ```

=== "HTML"
    ```html
    <p><a href="https://www.carnets.info">Ceci est le texte du lien</a></p>

    <p><a href="https://www.carnets.info" title="Le titre du lien">Ceci est un lien avec un titre au survol</a></p>

    <p>Ceci est un lien automatique : <a href="https://www.carnets.info">https://www.carnets.info</a></p>
    <p> On rencontre aussi cette syntaxe : <a href="https://www.carnets.info">https://www.carnets.info</a></p>

    ```

=== "Aperçu"
    [Ceci est le texte du lien](https://www.carnets.info)

    [Ceci est un lien avec un titre au survol](https://www.carnets.info "Le titre du lien")

    Ceci est un lien automatique : https://www.carnets.info  
    On rencontre aussi cette syntaxe : <https://www.carnets.info>


## :octicons-image-24: Images

=== "Markdown"
    ```md
    ![logo Markdown](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Markdown"){width=30}
    ```

=== "HTML"
    ```html
    <img
    src="https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png"
    alt="logo Markdown"
    title="Logo Markdown"
    width=30
    >
    ```

=== "Aperçu"
    ![logo Markdown](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Markdown"){width=30}


<!-- ## :octicons-video-24: Vidéos


=== "HTML"
    ```html
    <video controls src=" " width="960" height="540"/>```

=== "Aperçu"
    <video controls src=" " width="960" height="540"/>

-->

## :material-table: Tableaux

=== "Markdown"
    ```md
    Titre colonne 1 (gauche) | Titre colonne 2 (centré) | Titre colonne 3 (droite)
    :--- | :---: | ---:
    Cellule 1.1 | Cellule 1.2 | Cellule 1.3
    Cellule 2.1 | Cellule 2.2 | Cellule 2.3

    ```

=== "HTML"
    ```html
    <table>
    <thead>
        <tr>
            <th>Titre colonne 1</th>
            <th>Titre colonne 2</th>
            <th>Titre colonne 3</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Cellule 1.1</td>
            <td>Cellule 1.2</td>
            <td>Cellule 1.3</td>
        </tr>
        <tr>
            <td>Cellule 2.1</td>
            <td>Cellule 2.2</td>
            <td>Cellule 2.3</td>
        </tr>
    </tbody>
    </table>
    ```

=== "Aperçu"
    Titre colonne 1 (gauche) | Titre colonne 2 (centré) | Titre colonne 3 (droite)
    :--- | :---: | ---:
    Cellule 1.1 | Cellule 1.2 | Cellule 1.3
    Cellule 2.1 | Cellule 2.2 | Cellule 2.3


## :octicons-file-code-24: Code

### :octicons-code-24: Code en ligne

=== "Markdown"
    ```md
    insertion de code en ligne : `print("Hello World!")`  
    avec coloration syntaxique (MkDocs) : `#!py3 print("Hello World!)"
    ```

=== "HTML"
    ```html
    <p>insertion de code en ligne : <code>print("Hello World!")</code></p>
    ```

=== "Aperçu"
    insertion de code en ligne :
     `print("Hello World!")`  
    avec coloration syntaxique (MkDocs) :
    `#!py3 print("Hello World!")`


### :octicons-code-square-24: Bloc de code


=== "Markdown"
    ````md
    ```python
    print("Hello World!")
    ```
    ````

=== "HTML"
    ```html
    <pre> print("Hello World!")</pre>
    ```

=== "Aperçu"
    ```python
    print("Hello World!")
    ```

## :octicons-report-24: Boites colorées dans un notebook Jupyter

=== "Markdown/HTML"
    ```html
    <div class = "alert alert-block alert-info"> Boite bleue</div>
    <div class = "alert alert-block alert-success"> Boite verte</div>
    <div class = "alert alert-block alert-warning"> Boite jaune</div>
    <div class = "alert alert-block alert-danger"> Boite rouge</div>
    Exemple de style personnalisé
    <div class="alert alert-success" style="border-left: 10px solid #3c763d;border-radius:2px;"> </div>
    ```

=== "Aperçu "
    ![](../images/colored_boxes.png)

## :octicons-infinity-24: Formules LaTeX


=== "Markdown"
    ```md  
    Mode en ligne :  
    On cherche les solutions de l'équation (E) : $x^2 + 3x -7 = 0$    

    Mode bloc (display) :  
    On trouve :  

    $$x = \frac{-3 \pm \sqrt{37}}{2}$$
    ```

=== "Aperçu"
    Mode en ligne :  
    On cherche les solutions de l'équation (E) :  $x^2 + 3x -7 = 0$    

    Mode bloc (display) :  
    On trouve :  

    $$x = \frac{-3 \pm \sqrt{37}}{2}$$

[Mémo LaTeX](https://notebook.basthon.fr/?from=https://raw.githubusercontent.com/nweibel/jupyter/master/memo_latex_markdown.ipynb){ .md-button target='_blank'}

[Liste des fonctions $\TeX$](https://katex.org/docs/support_table.html)


## :octicons-typography-24: Caractères spécifiques   

### :octicons-dash-24: Tirets

Il n'y a pas de balise Markdown spécifique pour réaliser des tirets cadratins ou demi-cadratins. On utilise des balises HTML pour créer ces tirets.

- tiret long ou [tiret cadratin](https://fr.wikipedia.org/wiki/Tiret#Tiret_long) :

=== "HTML"
    `&mdash;`

=== "Aperçu"
    &mdash;


- tiret moyen ou [tiret demi-cadratin](https://fr.wikipedia.org/wiki/Tiret#Tiret_moyen)

=== "HTML"
    `&ndash;`

=== "Aperçu"
    &ndash;

### :fontawesome-regular-keyboard: Touches clavier

=== "Markdown"
    ```md
    ++ctrl+alt+del++
    ```


=== "HTML"
    ```html
    <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Del</kbd>
    ```

=== "Aperçu"
    ++ctrl+alt+del++
<!--    <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Del</kbd>  -->


## :octicons-note-24: Notes de bas de page

=== "Markdown"
    ```md
    Voici une référence à une note de bas de page[^a].
    Et une autre[^b].  
    On peut rappeler une même référence plusieurs fois[^b].

    [^a]: Les notes de bas de page peuvent être **mises en forme**,  
    et sur plusieurs lignes.  
    [^b]: Autre note de bas de page.
    ```

Aperçu :   
Voici une référence à une note de bas de page[^a].
Et une autre[^b].  
On peut rappeler une même référence plusieurs fois[^b].


[^a]: Les notes de bas de page peuvent être **mises en forme**,  
et sur plusieurs lignes.  
[^b]: Autre note de bas de page.
