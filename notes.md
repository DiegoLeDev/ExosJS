Pour instancier une variable on utilise : 
```js
var maVariable = "bonjour";
```

Il est possible de changer la valeur de la variable :
```js
maVariable = "au revoir";
```

Utiliser `var` est déconseillé car il est ancien, aujourd'hui il est conseillé d'utiliser let et const :
```js
let age = 30;
age = 31 //changera la la valeur que une variable let est modifiable

const age=30;
age=30; //affichera une erreur car const est une constante et il n'est pas modifiable
```

### Les types de données

Il existe plusieurs types de variable en JS :
	- les chaines de caractères (string)
	- les nombres (number)
	- les booléens (boolean)
	- les tableaux (array)
	- les objets (object)

Pour determiner les type de données on utilise l'opérateur `typeof`
``` js
var maVariable = "bonjour";
consol.log(typeof maVariable); //affichera "string" dans la console

var maVariable = 30;
consol.log(typeof maVariable); //affichera "number" dans la console
```

### calculs

Il est possible d'utiliser des opérateurs pour executer des calculs :
	- `+` pour effectuer des addition
	- `-` pour effectuer des soustraction
	- `*` pour effectuer des multiplications
	- `/` pour effectuer des division
	- `%` pour effectuer es modulo

```js
var maVariable1 = 30;
var maVariable2 = 31;

var resultat = maVariable1 + maVaraible2;
console.log(resultat); // affichera 61
```

### variable de type string

#### instancier

Pour instancier une variable de type String il est possible d'utiliser des simple quotes, des double quotes et des backtick
```js
const variable1 = 'a string';
const variable2 = "another string";
const variable3 = `yet another string`;
```

Il est possible de mettre des double quotes dans des simples quotes, inversement et également avec des backtick : 
```js
const variable1 = "bonjour je suis 'diego'";
```

#### concaténation

Il est possible de concaténéer plusieurs variable :
```js
const variable1 = 'a string';
const variable2 = "another string";

const concacatString = variable1 +' '+ variable2;
console.log(concactString); //affichera "a string another string"
```

```js
const variable3 = `yet another string`;

const concactMethod = variable3.concact(', that\'s so great'); // l'anti slash permet de forcer l'affichage de ' en caractères
console.log(concactMethod);// affichera "yet another string, that's so great"
```
