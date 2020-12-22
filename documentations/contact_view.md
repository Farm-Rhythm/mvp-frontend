# View Contact <!-- omit in toc -->

- [Resume](#resume)
- [Prepare the programming work](#prepare-the-programming-work)
  - [Full design of the view ***(In progress => 90%)***](#full-design-of-the-view-in-progress--90)
  - [Which data models to use?](#which-data-models-to-use)
  - [What focal information?](#what-focal-information)
  - [Efficient view splitting](#efficient-view-splitting)
  - [Describe the business logic](#describe-the-business-logic)
    - [**ContactForm**](#contactform)
    - [**ContactContent**](#contactcontent)
    - [**LanguageSwitch**](#languageswitch)
    - [**Footer**](#footer)
- [Coding](#coding)
    - [Method to use for formatting views:](#method-to-use-for-formatting-views)
    - [Notes of 19/12/2020:](#notes-of-19122020)
    - [Issues:](#issues)
  - [Notification:](#notification)
  - [**Time spent on the view :**](#time-spent-on-the-view-)

# Resume
The Contact view allows the user to get in touch with the company, for this he can use the contact form or go through our contact information provided.

Here is the view design :

![contactPage](Contact%20page.png)

# Prepare the programming work

## Full design of the view ***(In progress => 90%)***
**Remaining:** *Notifications behaviors, ProfileShorcuts behaviors, ChatBox interface*

## Which data models to use?
Establish the data models used on the view

```
    User
```

## What focal information?
Identify all the information variables that require a call to the server.

```
 User: {
        personalData: { username: String, imgUrl: String, },

        contactForms: [{ fullName: String, email: String, message: String }],

        search: {
            currentWord: String,
            quickResults: [{ data: Object, type: String }]
        }, 

        notifications: [{ data: Object, type: String, unread: Boolean }],

        chats: [Object]
    }
```

## Efficient view splitting
Split the view into specific and generic component.

- Header 
  - SearchBar *(more splitting needed)*
  - Notifications *(more splitting needed)*
  - ChatIndicator
  - ProfileShortcut
- ContactContent
   - ContactForm
- Footer
  - LanguageSwitch
- ChatBox *(more splitting needed)*


## Describe the business logic
Identify the actions of the business logic implemented by each specific and generic components

### **ContactForm**
This component should:
- automatically fill in the existing information of the user (username, email)
- create a new resource **User.contactForm** in the DB 

### **ContactContent**
This component contains the **ContactForm** component and contact information.

### **LanguageSwitch**
This component is a select button whose role is to change the language of the entire application.

### **Footer**
This component contains the **LanguageSwitch** component, some links to others page and some buttons to access modal content. 
 - Links to :
   - Home (url: '/')
   - Contact-us (url: '/contact')
 - Modal content :
   - Term of use
   - Privacy Policy



# Coding

### Method to use for formatting views:
- **@material UI Core and Icon** will provide components. These components encapsulate the desired dynamics
- **Bootstrap classes** will be used for shaping and embellishment

### Notes of 19/12/2020:
- @material UI lacks many icons (brand type), so we'll use **@fontawesome icon** from now on.20+
- **In the development of this APP, we will start with the visual and then we will tackle the business logic**


### Issues:
- nothing to report

## Notification: 
During data processing at the backend level, notifications are designed and assigned to users.
Any information has the potential to create a notification. The information is necessarily created by a first user, following this the data processing will filter all the other users having the preferences required for the creation of notifications related to this type of information, and graft them the new notifications.

So the preferences to be checked must be classified by type of notification to be created. The resulting notification creation system will constitute a business function : **Data processing for Notifications**

***NB:** At the frontend level, we will also have notification templates varying according to the type of notification.*


## **Time spent on the view :**
- Complete and responsive Visual : **7days** (15 - 22 dec 2020)