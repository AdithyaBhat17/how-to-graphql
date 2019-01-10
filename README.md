# learning-graphql

## What is GraphQL?

[GraphQL](https://graphql.org/) is an open-source query language developed by Facebook. It provides us with a more efficient way design, create, and consume our APIs. Basically, it’s the replacement for REST.  

### Schema

GraphQL has its own type of language that’s used to write schemas. This is a human-readable schema syntax called **Schema Definition Language (SDL)**. The SDL will be the same, no matter what technology you’re using — you can use this with any language or framework that you want.  

This schema language its very helpful because it’s simple to understand what types your API is going to have. You can understand it just by looking right it  

### Types

Types are one of the most important features of GraphQL. Types are custom objects that represent how your API is going to look. For example, if you’re building a social media application, your API should have types such as Posts, Users, Likes, Groups.  

Types have fields, and these fields return a specific type of data. For example, we’re going to create a User type, we should have some name, email, and age fields. Type fields can be anything, and always return a type of data as `Int`, `Float`,`String`, `Boolean`, `ID`, a List of Object Types, or Custom Objects Types.  

### In GraphQL, you will deal with three main concepts:  

* queries — the way you’re going to get data from the server.  

* mutations — the way you’re going to modify data on the server and get updated data back (create, update, delete).   

* subscriptions — the way you’re going to maintain a real-time connection with the server.  

## Playground for Github's GraphQL API

https://developer.github.com/v4/explorer/



