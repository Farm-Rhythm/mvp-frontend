# Farm Rhythm: *the App*
Farm Rhythm est une application web et mobile qui permet à un agriculteur de documenter l'exécution de son projet agricole et de rendre cet ouvrage accessible à plusieurs autre personnes.

**<ins>NB :** *Le document actuel est à caractère technique et sert de proposition de la **version 1.0** de l'application.* 🧑‍💻


## Composants réutisables
### Composant Header
- ### Design proposé :
    ![header](documentations/imgsDoc/overall%20header.png)

- ### Fonctionnalités (sous-composants) : 
  - **SearchBarHeader** : Permettre de lancer la recherche d'un mot ou d'une catégories dans la base de donnée de l'application. Exécuter la recherche d'un mot redirige la page vers la page **Search**.
  - **NotificationsShortcut** : affichage du nombre de notification non lues et ouverture/fermeture (*click* 🖱️) d'un sous-menu contenant les 20 dernieres notifications
  - **MessagesBox** : affichage du nombre de conversations non lues et redirection (*click* 🖱️) à la page **Messages**
  - **ProfileShorcut** : ouverture/fermeture (*click* 🖱️) d'un sous-menu contenant un lien de redirection à la page Profile et un bouton de déconnexion du compte.

### Composant Footer
- ### Design proposé :
    ![footer](documentations/imgsDoc/footer.png)

- ### Fonctionnalités (sous-composants) : 
  - **LanguageSwitch** : Sélectionner un nouvelle langue pour l'affichage du contenu de l'application.
  - **Contracts** : 02 buttons d'ouverture (*click* 🖱️) d'une fenêtre modale contenant les contracts : **Conditions d'Utilisation** et **Politique de Confidentialité**.
  - **Liens vers pages** : 02 liens de redirection vers les pages **Accueil** et **Contact**
  

## Composants spécifiques aux pages

### **Contact page**
- ### Design proposé :
    ![contact page](documentations/imgsDoc/Contact%20page.png)

- ### Fonctionnalité : 
  Cette page a pour but principale de permettre à l'utilisateur de contacter notre compagnie. Il peut nous contacter au travers d'un formulaire ou bien accéder à nos pages sur les réseaux sociaux.

- ### Découpage de la page :
![layout contact](documentation/../documentations/imgsDoc/layout%20contact%20page.png)


### **Sign page**
- ### Design proposé :
    ![sign page](documentations/imgsDoc/registration%20page.png)

- ### Fonctionnalité : 
  Cette page est la première interaction avec un nouvel utilisateur. C'est une page de connexion et d'enregistrement où l'utilisateur remplir et soumet un des formulaires. L'utilisateur a également la possibilité de se connecter en utlisant l'API d'authentification d'autre réseaux sociaux.
  

- ### Découpage de la page :
![sign contact](documentation/../documentations/imgsDoc/layout%20sign%20page.png)