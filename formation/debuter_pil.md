# Débuter avec la bibliothèque PIL en SNT
## 1. Le module Pil(low)


![pil](/images/pillow.png){: .center width=20%}

### Présentation
Pillow est une bibliothèque de traitement d'image, successeur du projet PIL (Python Imaging Library). Elle est conçue de manière à offrir un accès rapide aux données contenues dans une image,
 et offre un support pour différents formats de fichiers tels que PPM, PNG, JPEG, GIF, TIFF et BMP.   
Pillow dispose de capacités de traitement d'images relativement puissantes, et a pour but d'offrir une solide base à toute application générale de traitement d'images.

Le programme doit commencer par `#!python from PIL import Image`
 pour importer les fonctions du module, qui seront ensuite préfixées par `Image`.  

### Les attributs d'une image
La bibliothèque utilise le principe d'images matricielles c'est-à-dire que chaque élément de la matrice représente un point avec une couleur associée (= un pixel) selon différents modes possibles.  

Les modes les plus connus sont :

-  L (nuances de gris),
- RGB (couleur)
- et RGBA (couleur et transparence),

qui représentent respectivement les pixels sur 8 bits, 3x8 bits et 4x8 bits.

On ouvre un fichier avec la fonction `open(nom_fichier)`  où  `nom_fichier` est le nom complet du fichier (nom et extension) écrit entre guillemets ; cette instruction renvoie un objet `Image`  contenant les données du fichier que l'on pourra ensuite manipuler.

Voici quelques attributs d'un tel objet :

* `format` : indique le format de l'image PPM, PNG, JPEG, GIF, TIFF et BMP.
* `mode` : indique le mode L, RGB, RGBA
* `size` : indique la taille de l'image sous la forme d'un couple (largeur, hauteur)
* `width` : indique le nombre de pixels en largeur
* `height` : indique le nombre de pixels en hauteur

!!! abstract "Exemple"
	=== "Le code"
		En utilisant l'image sous le titre
		```python
		from PIL import Image

		img = Image.open("pillow.png")
		print("le format est", img.format)
		print("le mode est", img.mode)
		largeur, hauteur = img.size
		print("le nombre de pixels en largeur est", largeur)
		print("le nombre de pixels en hauteur est", hauteur)
		```
	=== "Le résultat"
		```
		le format est PNG
		le mode est RGBA
		le nombre de pixels en largeur est 160
		le nombre de pixels en hauteur est 161
		```

### Méthodes disponibles
Les méthodes à appliquer aux objets `Image` sont :

* `close()` ferme l'image chargée en mémoire ;
* `show()` afficher l'image dans un outil externe ;
* `save(nom_fichier, format)` sauvegarde l'image dans le format spécifié par l'extension ;
* `getpixel(x, y)`  récupère les attributs du pixel à la position  `x, y` ;
* `putpixel((x, y), (r, g, b))`  modifie les attributs du pixel à la position donnée ; par exemple, ici pour un mode RGB.

??? note "Remarque"
	Les coordonnées d'un pixel sont définies dans un repère où l'origine est le point en haut à gauche, l'axe des abscisses est orienté dans le sens gauche-droite et l'axe des ordonnées dans le sens haut-bas.

	![repere](/images/repere.png){.center width="30%"}

!!! abstract "Exemple"
	=== "Le code"
		```python
		from PIL import Image

		img = Image.open("pillow.png")
		img.show()

		print("le pixel (50, 50) est codé par :", img.getpixel((50, 50)))

		for x in range(60, 101):
			for y in range(60, 101):
				img.putpixel((x, y), (180, 180, 180, 255))
		img.show()
		# on ferme !
		img.close()
		```
	=== "Le résultat"
		![res](/images/resultat.png){ width=50%}

### Fonctions de traitement d'image prédéfinies
Il existe d'autres fonctions du module `Image` qui permettent de faire du traitement d'images automatiquement :

* `copy()` : permet de faire une copie de l'image
* `convert("L")` : permet de convertir en nuances de gris
* `convert("RGB")` : permet de convertir en RGB
* `convert("1")` : permet de  convertir en noir et blanc
* `resize((L, H))` : permet de modifier la taille de l'image
* `rotate(angle)` : permet de faire une rotation de angle dans le sens anti-horaire

!!! abstract "Exemple"
	=== "Le code"
		```python
		from PIL import Image

		img = Image.open("pillow.png")
		largeur, hauteur = img.size

		imgNB = img.convert("L")
		imgNB.show()

		imgPetit = img.resize((largeur // 2, hauteur // 2))
		imgPetit.show()

		imgR = img.rotate(45)
		imgR.show()

		# on ferme !
		img.close()
		```
	=== "Le résultat"
		![res](/images/resultat2.png){ width=20%}

??? info "En savoir plus"
    En savoir plus sur le module [Image](https://pillow.readthedocs.io/en/stable/reference/Image.html){: target="_blank"}

## 2. Parcours Manipulation d'images
### Sur Capytale
Se connecter à l'ENT puis [ouvrir le notebook sur Capytale](https://capytale2.ac-paris.fr/basthon/notebook/?id=388251)

### Sur Basthon
[Ouvrir le notebook dans Basthon](https://notebook.basthon.fr/?aux=https://raw.githubusercontent.com/reiamnat/SNTstage/main/kingfisher.jpg&aux=https://raw.githubusercontent.com/reiamnat/SNTstage/main/kingfisherNB.jpg&from=https://raw.githubusercontent.com/reiamnat/SNTstage/main/TraitementPhoto.ipynb)
