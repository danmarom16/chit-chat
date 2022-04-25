
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
#### Right now we are in phase 1 in our 4 level journey to fully build 'Chit-Chat', so for now, here is what you can do with this web app
### Intro
ChitChat consist 3 Pages:
1) Login page - this is the page when you see when you 1st log in to the app. To log in, user must be alreaedy registered.
2) Register page - in this page the user can register himself and add create a new account.
3) Chats page - the page of the chats of the user.

In the current version there are 5 hard coded redistered users: dani, asi, conor, adesanya and khamzat. The password to all of them is "12345678!a".
The users asi and dani has no hard coded chats, but the rest does have one chat with hard coded chatch fraizes of each fighter with the user asi.
### Registration and login
To create a new account you must go through the registration page:
<img width="959" alt="image" src="https://user-images.githubusercontent.com/92876036/165116525-37879e09-b02b-48c3-8255-55f111087001.png">

when you finish the registration, your will be redirected to the Login page and you will need to logg in with your username and password.
When you will log in successfully, you will be redirected to the Chat page, and you won't have chat with anyone.
To add a new chat, you can add one of the already created accounts (dani, asi, conor, adesanya and khamzat) by clicking the add button on the side bar:

![ezgif com-gif-maker](https://user-images.githubusercontent.com/92876036/165117719-920a8f21-66b5-4840-8daa-4a41853e6e92.gif)

### Chats
The supported messages are:
1) Text message - by clicking the type filed and press the send icon or press the Enter key

(All the listed below are accesible through the pop-up menue)
![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/92876036/165119208-ecd8dd50-7a75-4343-92f2-59823c38ac1f.gif)

2) Image message - by clicking the image icon in the pop-up menu and adding the desired image
3) Video message - by clicking the video icon
4) Audio message - by clicking the audio icon and holding the record button in the opened modal.

## Used packages
React-bootstrap whas the main building block we used to build the current version. Adding to that we also used bootstrap to increase the responsivness of the app and improve the design.
Last, we user React-router-dom for navigation without refreshing, and bootstrap-icons for the icons in the app. 

## Authors
Asaf Mesilaty, Dan Marom
