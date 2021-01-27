# View Contact <!-- omit in toc -->

- [Resume](#resume)
- [Prepare the programming work](#prepare-the-programming-work)
  - [Full design of the view **_(99% completed)_**](#full-design-of-the-view-99-completed)
  - [Which data models to use?](#which-data-models-to-use)
  - [What focal information?](#what-focal-information)
  - [Efficient view splitting](#efficient-view-splitting)
  - [Describe the business logic](#describe-the-business-logic)
    - [**LanguageSwitch**](#languageswitch)
    - [**SignFormTabs**](#signformtabs)
    - [**RegisterForm**](#registerform)
    - [**SignInForm**](#signinform)
    - [**Contracts**](#contracts)
- [Coding](#coding)
    - [Method to use for formatting views:](#method-to-use-for-formatting-views)
    - [Notes of 19/12/2020:](#notes-of-19122020)
    - [Issues:](#issues)
    - [Improvements:](#improvements)
  - [**Time spent on the view :**](#time-spent-on-the-view-)
  - [**Conclusion Visual implementation ended :**](#conclusion-visual-implementation-ended-)

# Resume

The sign page is the first page seen by a new user. It should be simple in highlighting information and captivating attention. Being the page where the user gives their information for the very first time, it must allow a simple and fast experience.

Here is the view design :

![signPage](sign%20page.png)

# Prepare the programming work

## Full design of the view **_(99% completed)_**
Remaining a little improvement on the background illustration, add an illustration of a workspace and sharing space

## Which data models to use?

Establish the data models used on the view

```
    User
```

## What focal information?

Identify all the information variables that require a call to the server.

```
 User: {
        personalData: { 
                firstName: String, 
                lastName: String, 
                mobile_email: String, 
                password: String, 
                gender: String 
              },
    }
```

## Efficient view splitting

Split the view into specific and generic component.

- LanguageSwitch
- SignFormTabs
  - RegisterForm
  - SignInForm
- Contracts


## Describe the business logic

Identify the actions of the business logic implemented by each specific and generic components

### **LanguageSwitch**

This component is a select button whose role is to change the language of the entire application.

### **SignFormTabs**

Display interface to switch between login and registration form

### **RegisterForm**

Registration form and process

### **SignInForm**

Login form and process

### **Contracts**

Component interfacing access to "Term of use" and "Privacy Policy" content displayed under a modal component.


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

- Register form should be more bigger


## **Time spent on the view :**

- Complete and responsive Visual : **3days** (10 - 14 jan 2021)

## **Conclusion Visual implementation ended :**

A simple and beautiful page, the result was appreciated by several people.
