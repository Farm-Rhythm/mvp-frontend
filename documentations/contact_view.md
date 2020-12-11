# View Contact


The Contact view allows the user to get in touch with the company, for this he can use the contact form or go through our contact information provided.

Here is the view design :

![contactPage](Contact%20page.png)


## contact.P1.G1
Establish the data models used on the view

```
    User
```

## contact.P1.G2
Identify all the information variables that require a call to the server.

```
 User: {
        personalData: { username: String, imgUrl: String, },

        contactForms: [{ fullName: String, email: String, message: String }],

        search: {
            searchWord: String,
            recentResults: [{ data: Object, type: String }]
        }, 

        notifications: [{ data: Object, type: String, unread: Boolean }],

        mailbox: [Object]
    }
```