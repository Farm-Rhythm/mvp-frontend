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
  - **ProfileShorcut** : ouverture/fermeture (*click* 🖱️) d'un sous-menu contenant un bouton permettant de faire apparaître le composant **BlocNotes**, un lien de redirection à la page Profile et un bouton de déconnexion du compte.

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


### **Messages page**
- ### Design proposé :
    ![message page](documentations/imgsDoc/Message%20page.png)

- ### Fonctionnalité : 
  Il s'agit de la boîte de messagerie de l'application. L'utilisateurs peut y initier une conversation ou continuer à dialoguer avec ses interlocuteurs. Les conversations sont de 02 types (privée ou de groupe).

  Ses **sous-composants** importants sont les suivants :
    - ### ConversationsPanel:
      - **CreateConversationBtn** : bouton de lancement d'une fenêtre modale où va se dérouler le processus de création d'une conversation
      - **SearchConversationBar** : champ de recherche d'une conversation par mot clé
      - **ConversationsNavBar**: Block de navigation entre les conversations
    - ### DiscussionBox: 
      - **Description** : affichage du titre de la conversation et lors d'un click, apparition d'un block de description plus détailée de la conversation.
      - **SettingBtn** : button faisant apparaître un menu rassemblant les interactions possibles sur le box de discussion et son contenu.
      - **SearchInDiscussionBtn** : champ de recherche de mots dans une discussion.
      - **MessagesScreen** : block d'affichage des messages d'une discussion.
      - **SendMessage** : champ d'insertion de texte, bouton d'envoi de message, d'enregistrement vocal, de sélection d'émoji.
  

- ### Découpage de la page :
![sign contact](documentation/../documentations/imgsDoc/layout%20messages%20page.png)


### **Search page**
- ### Design proposé :
    ![search page](documentations/imgsDoc/search%20page.png)

- ### Fonctionnalité : 
  L'objectif générale de la page est de permettre à l'utilisateur de trouver l'information qui lui est utile dans note base de donnée. Nos recherches portent sur 3 grandes catégories (publications, farms, personnes)

  Les **sous-composants** importants de cette page sont :
    - **SearchPanelMenu** :
      - **FilterOverview** : aperçu de la recherche éffectuée et 
      - **FilterBlock** : interface de selection des paramètres des filtres
      
    - **SearchResult** : affichage des resultats de recherche sous forme de block d'infos
      
  

- ### Découpage de la page :
![sign contact](documentation/../documentations/imgsDoc/layout%20search%20page.png)