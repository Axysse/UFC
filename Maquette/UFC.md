# **UFC**
[![forthebadge](https://forthebadge.com/images/featured/featured-built-with-love.svg)](https://forthebadge.com)
## A PROPOS

Site réalisé dans le cadre d'un TD durant la formation développeur WEB à l'AFPA de Châtellerault.

# Table des matières

 - [A propos](##Apropos)
 - [Prérequis](#Prérequis)
 - [Contribution](#Contribution)
 - [Documentation](#Documentation)
 - [Licence](#Licence)


# Prérequis

Les ressources sont disponibles plus haut sur la page GitHub du projet.

# Contributions

Un grand merci à:

 - L'Ultimate Fighting Championship
 - Grid.js
 - FullCalendar ( et sa doc monumentale)
 - Splide

# Logiciels/Langages/Librairies

 - Visual Studio Code
 - Grid.js
 - FullCalendar
 - Splide
 - HTML/CSS
 - Javascript
 - Tailwind CSS

# Documentation

 - [Maquette](##Maquette) 
 - [Index](##Index)
 - [Evènements](##Evènements)
 - [Registre des combattants](##Registredescombattants)
 - [Contact](##Contact)

## Maquette

![Maquette](https://i.postimg.cc/qMvnsxsp/Maquette.png)
La maquette originelle omet la page contact qui n'était pas prévue à la base mais qui a été construite pour restecter la charte graphique du site. Comme on peut le constater des changements mineurs ont été operés sans trahir l'ésprit de l'original. 

De plus les pages ont finies par être toutes accessibles entre elles. Alors que la maquette prévoyait un retour à la page d'acceuil systématique ce qui rendait la navigation pénible et le site peu ergonomique.

## Index
 ![En-tête de la page d'accueil](https://i.postimg.cc/zBkbWy3L/index.png)
Bien que que dans l'ensemble quasi-identique à la maquette originelle, la page d’accueil a été maintes fois retravaillées pour au final donner un look internet-vintage style 2002 (totalement volontaire bien-sûr). Le combo jaune-vif/noir de base a été adouci par un moutarde/gris pour rester dans le même esprit sportif/energy drink tout en étant moins agressif à l’œil.

**Les barres d'annonce**
	
![textes déroulants](https://i.postimg.cc/pd95j5CL/texte-d-roulant.png)
L'ajout des barres d'annonces des matchs a été précoce dans le développement. Le but étant d'étoffer les fonctionnalités de la page d'accueil qui au départ n'était qu'une simple vitrine sans informations et aucun contenu dynamique. 

![annonces javascript](https://i.postimg.cc/0NTgkhry/annonces.png)

Les deux textes déroulants affichent les deux prochains matchs à venir. Pour ce faire, on récupère déjà la date du jour (ici stockée dans la variable "dateUTC") et on récupère dans le Json des événements à venir tout les matchs dont la date est postérieure à la date du jour.

    event.forEach(element  => {
    if (element.Day  >  dateUTC) { 
    all.push(element); 
    }

Ce code parcourt tout le fichier Json et récupère les dates de tout les éléments du fichier, On met ensuite dans un tableau vide préalablement déclaré les éléments du Json dont la date est supérieur à la date d'aujourd'hui.

On insère ensuite dans l'espace de texte (vide pour le moment) de la fenêtre de texte déroulant les noms des deux premiers éléments du tableau correspondant aux dates.

    main.innerText  =  all[0].Name;   
    upco.innerText  =  all[1].Name;

Le carrousel a été ajouté dans cette même volonté de rendre la page plus dynamique bien qu'il n'ait qu'une utilité uniquement cosmétique. 

**Le responsive**

Pour le responsive il était prévu dès le départ que la barre de navigation disparaitrait en format mobile pour alléger la page, mais serait néanmoins accessible au moyen d'un bouton situé dans l'en-tête. Le développement de la page s'est donc fait dans l'optique du "mobile first" et ensuite ajusté aux écrans plus large, la barre de navigation passant de la verticale à l'horizontale au changement de taille d'écran.

![navbar mobile](https://i.postimg.cc/hj7tnGfv/nav-mobile.png)

En haut: Navigation mobile/ en bas: navigation ordinateur.

![navbar ordinateur](https://i.postimg.cc/kG3Xgdbc/nav-ordi.png)
Le code JavaScript suivant est associé à la cette barre de navigation qui apparaît en mode "mobile" à l'appui sur un bouton. La barre de navigation est en faite toujours présente sur la page mais simplement cachée. On lui enlève donc sa classe CSS qui la masquait pour la faire apparaitre. A l'inverse, si on appuie à nouveau sur le bouton, la classe "cachée" est appliquée à nouveau et la barre disparait.

![variable navigation](https://i.postimg.cc/8ckLdx5G/navigation.png)
![code de la navbar cachée](https://i.postimg.cc/W1LQ27fV/code-menu.png)
Pour le reste de la page, les élements sont de base en classe "flex-column" de base ce qui donne une mise en page très "verticale". De même- certains éléments "superflues" ne sont pas affichés en format mobile. 

![index mobile](https://i.postimg.cc/8zTBTJDc/index-mobile.png)
Sur un écran d'ordinateur la mise en page prend plus de largeur et les éléments occupent plus d'espace. Mais la mise en page reste globalement la même.

![index ordinateur](https://i.postimg.cc/SRWChqvc/index-flex.png)
Changement notable: les deux textes défilant des matches passent en affichage vertical sur un écran mobile pour améliorer la visibilité.

![annonces mobiles](https://i.postimg.cc/4xnyvsQw/annonces-mobile.png)

## Evènements

La page des évènements affiche simplement un calendrier qui affiche au jour correspondant le match qui lui est associé.

![calendrier](https://i.postimg.cc/PJ7X2FH9/calendrier.png)

**Javascript**

Pour afficher ces dates on va chercher les informations dans le Json des évenements. On parcourt avec une boucle ce document pour récupérer des données de tout les évenements, mais pas tout! On récupère seulement ce qui nous intéresse, ici: le nom de l'évenement et le jour associé qu'on insére dans un tableau vide préalablement declaré.

    for ( let  j  =  0; j  <  datas.length; j++)
     { zbi.push({ title:  datas[j].ShortName, start:  datas[j].Day, color:  'red', });
    }

 On importe ensuite un tableau graçe à FullCalendar auquel on associe les évenements avec notre tableau. 

    events: zbi,

Par cette simple ligne on associe les évenements du calendrier au contenu du tableau (ici: zbi). Le calendrier affiche dorénavant tout les matchs pour lesquels l'API nous donne les dates. Donc nous avons les date pour un an.  

![calendrier javascript](https://i.postimg.cc/N0536BZ4/calendrier-javascript.png)

La page reste semsiblement la même en version movile à l'exception de la barre de navigation qui fonctionne de la même manière que sur la page d'accueuil.

## Registre des combattants

La page du registre (dans la navigation: "Nos guerriers") affiche un tableau construit avec Grid.js qui présente la liste cmpléte des combattants recupérés sur une API dans un fichier Json. Le tableau a été divisé en plusieurs catégories pour présenter un aperçu le plus complet et conscis possible des différents combattants.

![registre combattants](https://i.postimg.cc/HxZFvthb/registre.png)

**Javascript**

Sur le même pricipe que le calendrier les informations sont extraites du Json avec un "fetch" et traitées au moyen d'une boucle qui stocke dans un tableau les informations voulues.

    for (let  i  =  0; i  <  datas.length; i++) {
    all.push({ FirstName:  datas[i].FirstName, LastName:  datas[i].LastName, Birth:  datas[i].BirthDate, Height:  datas[i].Height, Weight:  datas[i].Weight, Wins:  datas[i].Wins, Losses:  datas[i].Losses });
    }
    
Ici on récupère et on stocke dans un tableau le prénom, le nom, la date de naissance, la taille, le poids, le nombre de victoires et le nombre de défaites.

![registre javascript1](https://i.postimg.cc/prdC4bFd/registre-js01.png)![registre javascript2](https://i.postimg.cc/9Fr1B228/registre-js02.png) 
Les infos issues du tableau sont insérées dans la grille par correspondance d'Id (l'Id de la première colonne "FirstName" correspond à l'information recherchée, le prénom qui se nomme FirstName), et cela pour toutes les colonnes. 

On constate aussi que la date de naissance a été "formatée" pour correspondre à une vrai date. Donc sans les informations UTC.

    formatter: (cell) =>  `${cell}`.replace("T00:00:00", "")

La grille comporte aussi un bouton qui affiche après appui dans une fenêtre (une alerte) le nom et prénom du combattant de la ligne correspondante.

    onClick: () =>  alert(`Guerrier "${row.cells[0].data}" "${row.cells[1].data}"`)

La fenêtre affiche le contenu de la première et deuxième case de la ligne.

**Le modal**

En dessous de la grille on trouve un bouton "Recherche". C'est un modal, une fenêtre qui va s'afficher en sur-impression de l'écran. 

![modal](https://i.postimg.cc/mr3DNsr5/modal.png)
Celle-ci comprend un champ de recherche. Si on tape le nom ou le prénom d'un combattant et qu'on appui sur le bouton "Recherche", Des informations sur le combattant voulu vont s'afficher au dessus du champ de saisie. 

![modal remplie](https://i.postimg.cc/ydbyBcz9/modal1.png)
Le résultat de la recherche affiche le prénom, le nom, le nombre de victoires et le nombre de défaites. Pour arriver à ce résultat on utiliste à nouveau un "fetch" pour récupérer les informations desirées dans l'API.

![modal javascript](https://i.postimg.cc/4Nq4tdX5/modal2.png)

On rajoute à notre boucle une condition: on recherche une concordance entre le texte saisie dans le champ de recherche et un prénom ou un nom dans le fichier Json.
A la première concordance trouvée on remplie le champ de texte (vide jusqu'à présent) avec le résultat de notre recherche. 
Si Il n'y a pas de concordance, le résultat renvoyé est un message d'erreur.

## Contact

La page de contact est la plus simple de toute les pages du site. Elle ne présente pas d'ajout en javascript notable à part, comme pour les autres pages, une inclusion du footer et la barre de navigation avec bouton en responsive.

![contact](https://i.postimg.cc/5Nn7kYXB/contact.png)
Comme il n'y a pas de PHP sur le site le formulaire n'est pas fonctionnel et le bouton d'envoi ne fait rien. 
Sinon la page contact ne présente aucune autre particularité. 

# Licence

Tout droits reservés Nicolas Vouillerot

Linkedin: https://www.linkedin.com/in/nicolas-vouillerot-a62402287/
CoursDuDev: https://www.coursdudev.com/profil/Axysse
GitHub: https://github.com/Axysse
> Written with [StackEdit](https://stackedit.io/).
