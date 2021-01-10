# View Contact <!-- omit in toc -->

- [Resume](#resume)
- [Prepare the programming work](#prepare-the-programming-work)
  - [Full design of the view **_(completed)_**](#full-design-of-the-view-completed)
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
    - [Improvements:](#improvements)
  - [Notification:](#notification)
    - [Types of notifications](#types-of-notifications)
  - [Messaging](#messaging)
  - [**Time spent on the view :**](#time-spent-on-the-view-)
  - [**Conclusion Visual implementation ended :**](#conclusion-visual-implementation-ended-)

# Resume

The Contact view allows the user to get in touch with the company, for this he can use the contact form or go through our contact information provided.

Here is the view design :

![contactPage](Contact%20page.png)

# Prepare the programming work

## Full design of the view **_(completed)_**

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

        chats: { unReadConversations: Number }
    }
```

<!-- chats: {
          conversations: [{
            intelocutors: [User],
            messages: [{ author: User._id, contentText: String, time: Date, topic: Farm }],
            unReadMessages: Number
          }],
        unReadConversations: Number
        } -->

## Efficient view splitting

Split the view into specific and generic component.

- Header
  - SearchBar
  - Notifications
  - ChatLink
  - ProfileShortcut
- ContactContent
  - ContactForm
- Footer
  - LanguageSwitch


## Describe the business logic

Identify the actions of the business logic implemented by each specific and generic components

### **ContactForm**

This component should:

- automatically fill in the existing information of the user (username, email) = *Populate the form*
- create a new resource **User.contactForm** in the DB

### **ContactContent**

This component contains the **ContactForm** component and contact information.

### **LanguageSwitch**

This component is a select button whose role is to change the language of the entire application.

### **Footer**

This component contains the **LanguageSwitch** component, some links to others page and some buttons to access modal content.

- Links to :
  - Home (url: '/')
  - Contact (url: '/contact')
- Modal content :
  - Term of use
  - Privacy Policy

# Coding

### Method to use for formatting views:

- **@material UI Core and Icon** will provide components. These components encapsulate the desired dynamics
- Icons will be mostly provided by **Font Awesome Icon**
- **Bootstrap classes** will be used for shaping and embellishment

### Notes of 19/12/2020:

- @material UI lacks many icons (brand type), so we'll use **@fontawesome icon** from now on.20+
- **In the development of this APP, we will start with the visual and then we will tackle the business logic**

### Issues:

- The header seems too large, it should be reduced by at least 40%

### Improvements:

- Grouped variant of notification types (taking into account the plural in the translation)
- The search bar could take into account nice templates displaying last reseach of the user
- We need to improve the concept of accessibility **a11y** of our interfaces

## Notification:

During data processing at the backend level, notifications are designed and assigned to users.
Any information has the potential to create a notification. The information is necessarily created by a first user, following this the data processing will filter all the other users having the preferences required for the creation of notifications related to this type of information, and graft them the new notifications.

So the preferences to be checked must be classified by type of notification to be created. The resulting notification creation system will constitute a business function : **Data processing for Notifications**

***NB:** At the frontend level, we will also have notification templates varying according to the type of notification.*

### Types of notifications

1. "followNewPost": **@user** published a news _(progress of his farm, video, article or photos)_
2. "followCommentedInterestingPost": **@user(s)** commented on a post that may interest you <!--commented on a post you liked-->
3. "followNewFarm": **@user** started a new farm **@Farm X** ~

4. "sharedMyPost": **@user(s)** shared your _post_
5. "commentedMyPost": **@user(s)** commented your _post_

6. "likedMyActivity": **@user(s)** like your _(post, comment)_

7. "respondedMe": **@user** responded to your comment
8. "identifiedMe": **@user** identified you in a _(post, comment)_ ~
9. "newFollower": **@user** started following you
10. "newFarmFollower": **@user** is tracking the progress of your farm **@Farm X**
11. "sharedMyFarm": **@user** shared the progress of your farm

12. "starCounter": Your farm **@Farm Y** has reached **n stars**

13. "trackFarmInvitation": **@user** invite you to track progress of the farm **@Farm X**

14. "trackedFarmProgress": The Farm **@Farm Y** you are tracking has made further progress
15. "trackedFarmEndedCycle": The Farm **@Farm Y** you are tracking has completed its production cycle

## Messaging

Two concepts come into play in the design of this messaging, it is fundamentally the conversation between interlocutors, and in an innovative way, the existence of conversation topics and the organization of a global communication around these topics.

With this objective, our proposal is a system where creating a conversation will consist in necessarily selecting one or more interlocutors and selecting or not any topic of conversation (agricultural project). New topics of conversation can be approached and in this case the discussion panel must differentiate the series of messages belonging to the same topic of conversation while respecting the chronology of emission of the messages. Thus several interlocutors can maintain a series of messages classified into conversation topics, but all accessible in a single discussion panel.

<!-- The term message appears during a private conversation between 2 users. In our solution we offer the possibility of starting the discussion under a topic. The conversation is of type *default* if it is open (without specific subject), the conversation is of type *Farm* if it is initiated under the subject of a particular farm. A differentiation of the visual exists between the 2 types of conversation. -->

## **Time spent on the view :**

- Complete and responsive Visual : **26days** (15 dec 2020 - 9 jan 2021)

## **Conclusion Visual implementation ended :**

Several reusable and important components have been designed, which has had the effect of increasing the work on this page, which is simple beforehand. The work in the direction of data transmission with the server (backend job & API consumption) will wait until the entire authentication service is finalized, to be implemented
