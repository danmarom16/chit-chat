
![Readme-logo](https://user-images.githubusercontent.com/92876036/165103657-3b21e78e-27db-4285-a503-7f6d207bb110.png)

# ChitChat

#### Like WhatsApp - But BETTER (way better)

## Installation and getting started
1) Install react and create a new react project (call it chit-chat or we will sue you).
   If you don't know how to do so, click this link -> https://reactjs.org/docs/create-a-new-react-app.html
2) Download the source files
<img width="285" alt="image" src="https://user-images.githubusercontent.com/92876036/165104799-f27f7434-078c-41f3-83e5-5046914e0bda.png">
3) Navigate to the directory in which you have downloaded the source files, open command line prompt and type:

```bash
npm start
```
If you see the following message:

<img width="386" alt="image" src="https://user-images.githubusercontent.com/92876036/165111483-9c27447d-f35e-47e6-8382-320c11d4db0b.png">

just type:
```bash
npm install react-scripts --save
```

and then again:
```bash
npm start
```
#### now you should see this login screen:
<img width="960" alt="image" src="https://user-images.githubusercontent.com/92876036/165112739-56b93710-d5b6-4287-b619-6fb5c9f7da78.png">



## Usage
### context
#### Right now we are in phase 1 in our 4 level journey to fully build ChitChat, so for now, here is what you can do with this web app
### Intro
ChitChat consist 3 Pages:
1) Login page - this is the page when you see when you 1st log in to the app. To log in, user must be already registered.
2) Register page - in this page the user can register himself and add create a new account.
3) Chats page - the page of the chats of the user.

**MUST READ NOTE BEFORE USING THE APP -**
In the current version there are 5 hard coded registered users: dani, asi, conor, adesanya and khamzat. The password to all of them is "12345678!a".
The user dani has no hard coded chats, asi has 3 hard coded but the rest does have one chat that contains 2 hard coded catchphrase messages of each fighter with the user asi.

### Registration and login
To create a new account you must go through the registration page:
<img width="959" alt="image" src="https://user-images.githubusercontent.com/92876036/165116525-37879e09-b02b-48c3-8255-55f111087001.png">

when you finish the registration, your will be redirected to the Login page and you will need to log in with your username and password.
When you will log in successfully, you will be redirected to the Chat page, and you won't have chat with anyone.
To add a new chat, you can add one of the already created accounts (dani, asi, conor, adesanya and khamzat) by clicking the add button on the side bar:

![ezgif com-gif-maker](https://user-images.githubusercontent.com/92876036/165117719-920a8f21-66b5-4840-8daa-4a41853e6e92.gif)

note that you WONT be able to add unregistered user or your user of course.

### Chats
The supported messages are:
1) Text message - by clicking the type filed and after you finish typing press the send icon or press the Enter key.

(All the listed below are accesible through the pop-up menue)
![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/92876036/165119208-ecd8dd50-7a75-4343-92f2-59823c38ac1f.gif)

2) Image message - by clicking the image icon in the pop-up menu and adding the desired image.
3) Video message - by clicking the video icon.
4) Audio message - by clicking the audio icon and holding the record button in the opened modal.

## Used packages
React-bootstrap is the main building block we used to build the current version.

Adding to that we also used bootstrap to improve the design and increase the responsivness of the app and:



Last, we used React-router-dom for navigation without refreshing, and bootstrap-icons for the icons in the app. 

## What knowledge this project implements?
This project is designed with React, and mainly with react-bootstrap.
It includes advanced react concepts and some important programming concepts:
### React Hooks
We used hooks almost in every costum component that we have created, and took advantage of it's rerendering to make changes appear on the screen.

Few examples:

* On the login page, we used useState and passed it's setter to onChange function in the login form to set the live values that the user put into the values state:

<img width="322" alt="image" src="https://user-images.githubusercontent.com/92876036/165164889-3312e696-9d3a-4ee2-be99-f75f8d0709fb.png">

* Here we've created a costum hook that is responsible to update the Sidebar component when a message was sent:

<img width="514" alt="image" src="https://user-images.githubusercontent.com/92876036/165166063-09862aa3-8322-4ea7-864d-fc72ac16c6b9.png">

### React Routes
To avoid reload of the whole page, we imported some components like Route, Link and BrowserRouter from 'react-router-dom' and wrapped our pages/app/components with them, one example of such usage:

<img width="763" alt="image" src="https://user-images.githubusercontent.com/92876036/165174876-547ef906-6461-4274-8036-42c02e6226d1.png">

note: you can see in the last route that if the user did not enter username he, the app will render EmptyDashboard. This takes care of cases when the url of dashboard was inserted manually or in case of page reload, and let the user choose between login and registration

<img width="918" alt="image" src="https://user-images.githubusercontent.com/92876036/165175340-b6c28d26-d789-4f7b-b19f-6252bf95ddd0.png">

### Decoupling
We've defined a Database is a js file and using facede design pattern we've incapsulated all the implementation of the DB from it's client.
Thanks to that we made our code close to changes but open for extensions in the near future.

<img width="293" alt="image" src="https://user-images.githubusercontent.com/92876036/165166526-c55db65e-1a15-4ee0-a873-85bbd2b830f4.png">

## Authors
Asaf Mesilaty, Dan Marom
