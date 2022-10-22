# Mémo $\LaTeX$
Comment afficher une formule $\LaTeX$ dans une cellule Markdown d'un notebook Jupyter ?

!!! info
    Les affichages sont obtenus en saisissant la syntaxe précisée entre deux symboles $ dans une cellule au format Markdown.

## Symboles courants
  |syntaxe|affichage|
  | :-- | :--:|
  |\times|$\times$ |
  |\approx, \neq|$\approx,  \neq$|
  |\leqslant,\geqslant|$\leqslant,\geqslant$|
  |\sqrt{x}|$\sqrt{x}$|
  |\in, \notin|$\in, \notin$ |
  |\subset, \not \subset|$\subset, \not \subset$|
  |\emptyset|$\emptyset$|
  |\cap|$\cap$|
  |\cup|$\cup$|
  |\infty|$\infty$|
  |\Bbb{N}, \Bbb{R}|$\Bbb{N,  R}$|
  |\alpha, \beta|$\alpha, \beta$|
  |\pi|$\pi$|
  |\sigma|$\sigma$|
  |\perp|$\perp$|
  |\dots, \cdots|$\dots, \cdots$|

## Indices, exposants
  |syntaxe|affichage|
  | :-- | :--:|
  |u_n |$u_n$ |
  |u_{n+1} |$u_{n+1}$|
  |2^3|$2^3$|
  |2^{n+1}|$2^{n+1}$|
  |{2^3 }^4|  ${2^3}^4$ |
  |\sqrt[3]{8}|$\sqrt[3]{8}$|

## Fractions
  |syntaxe|affichage|
  | :-- | :--: |
  |\dfrac{a+1}{b+1} |$\dfrac{a+1}{b+1}$ |
  |\dfrac{\frac{a}{b}+1}{\frac{c}{d}+1} |$\dfrac{\frac{a}{b}+1}{\frac{c}{d}+1}$ |

## Flèches
|syntaxe|affichage|
| :-- | :--:|
|\Leftrightarrow|$\Leftrightarrow$|
|\leftrightarrows|$\leftrightarrows$|
|\Longleftrightarrow|$\Longleftrightarrow$|
|\iff|$\iff$|
|\Rightarrow|$\Rightarrow$|
|\rightarrow|$\rightarrow$|
|\to|$\to$|
|\Longrightarrow|$\Longrightarrow$|
|\implies|$\implies$|
|\Leftarrow|$\Leftarrow$|
|\leftarrow|$\leftarrow$|
|\mapsto|$\mapsto$|
|\longmapsto|$\longmapsto$|
|\uparrow, \downarrow|$\uparrow, \downarrow$|
|\nearrow,\searrow|$\nearrow,\searrow$|

## Vecteur, angle, etc.
|syntaxe|affichage|
| :-- | :--: |
|\overrightarrow{AB}|$\overrightarrow{AB}$ |
|\vec{u}|$\vec{u}$|
|(O,\vec{\imath},\vec{\jmath})|$(O, \vec{\imath},\vec{\jmath})$|
|\widehat{ABC}|$\widehat{ABC}$|
|\hat{a}|$\hat{a}$|
|\overline{A}|$\overline{A}$|

## Coordonnées, matrice, coefficient binomial, etc.
|syntaxe|affichage|
| :-- | :--: |
|\binom n k|$\binom n k$ |
|\dbinom n k|$\dbinom n k$|
|\begin{pmatrix} <br> a  \\\\  b  <br> \end{pmatrix} | $\begin{pmatrix} a \\ b \end{pmatrix}$ |
|\begin{matrix} <br> a & b \\\\ c & d <br>  \end{matrix}|$\begin{matrix} a & b \\ c & d \end{matrix}$ |
|\begin{bmatrix} <br> a & b \\\\ c & d <br> \end{bmatrix} |$\begin{bmatrix} a & b \\ c & d \end{bmatrix}$ |

## Sommes, intégrales, limites
|syntaxe|affichage|
| :-- | :--: |
|\sum _{k=1}^{n}k|$\sum _{k=1}^{n}k$ |
|\int _{1}^{n}f(x) \ \mathrm{d} x|$\int _{1}^{n}f(x)\,\mathrm{d}x$ |
| \lim_{n \to +\infty}x_n=\ell|$\lim_{n \to +\infty}x_n=\ell$|
|\lim\limits_{x \to -\infty} f(x)| $\lim\limits_{x \to -\infty} f(x)$|
|\lim\limits_{\substack{x \to 0 \\ x<0}} \dfrac{1}{x}|$\lim\limits_{\substack{x \to 0 \\ x<0}} \dfrac{1}{x}$|

En mode display, (`$$ formule $$`),  `\sum _{k=1}^{n}k` s'affiche :

$$ \sum _{k=1}^{n}k$$

et `\int _{1}^{n}f(x)\,\mathrm{d}x`  s'affiche :

$$ \int _{1}^{n}f(x)\,\mathrm{d}x$$


## Délimiteurs
|syntaxe|affichage|
| :-- | :--: |
|\cos\left(\dfrac{\pi}{6}\right)|$\cos\left(\dfrac{\pi}{6}\right)$ |
|\left\vert x-3 \right \vert |$\left\vert x-3 \right \vert$|
|\left \\\| u-v \right \\\||$\left\| u-v \right \|$|
|\left( \dfrac{1}{2} +2(x + 1) \right)|$\left( \dfrac{1}{2} +2(x + 1) \right)$ |
|\left \{\begin{array}{rcl} <br> x + y & = & a \\\\ <br> x - y & = & b <br>\end{array} \right.|$\left \{\begin{array}{rcl} x+y&=&a \\ x-y&=&b \end{array} \right.$|
