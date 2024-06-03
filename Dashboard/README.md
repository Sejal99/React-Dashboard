# Rounder-Counter React Application

## Techstack
<img width="100" src="https://static-00.iconduck.com/assets.00/react-icon-512x512-u6e60ayf.png" alt="React">
<img width="100" src="https://cdn-images-1.medium.com/max/1600/1*Vo5RDpNkOsfDn8sx06mthA.png" alt="React">
<img width="100" src="https://static-00.iconduck.com/assets.00/javascript-icon-512x512-q5abze8k.png" alt="React">
<img width="100" src="https://miro.medium.com/v2/resize:fit:300/1*R4c8lHBHuH5qyqOtZb3h-w.png">



## Overview

This is a Counter/Form application built using React which makes use of libraries like `react-spring` for smooth animations, `material-UI` for text editor.

## Planning of the applicaiton design
<img width="3366" alt="Counter" src="https://github.com/saikiran76/RounderCounter/assets/80874246/4e03d1b1-e16a-474f-b7c8-a840aaefcf09">


For more visit the official docs of react-spring, Firebase, material-ui(mui-rte): 
`https://www.react-spring.dev/docs/getting-started`
`https://firebase.google.com/docs/auth/web/start?hl=en&authuser=0`
`https://firebase.google.com/docs/database/web/start?hl=en&authuser=0`
`https://www.npmjs.com/package/mui-rte`

## Report on Component Structure and Managament of states 
### Component Structure
- Pages(Parent Components) : Home, Login
- Home Page with following child components(along with small chunk resusable components)
### Home Page Components
- Counter: For counter functionality and react-spring animation
- Form: For User data, also with Local storage functionality (global states & action dispatches)
- Rich Text Editor: Text Editor with options Bold, italic and more built with Material UI
- User Result component: Displays the result as JSON object
- Beizer Footer: Footer section to showcase animations with Beizer curve easing (Back and Forth animations of Background Gradient) 
### Bunch of Reusable Components
- Input Field components for Log in Form and User Form
- Button Component with hover effect
- ...  

### State Management Choices 
- Global state management using Redux Toolkit for storing user data from the form as an object and also be used to display on Result component
- login/signup management states in the 
Login component for google provided auth and global states for Email/Password auth
- count state for keeping track of Counter number along wih add, deduct and Reset Handler

### Hooks Used for State management
- useState (local state management) 
- useSelector (for subscribing with components) and useDispatch(dispatching actions to store) for Global state management using RTK


## Snaps of the project
![image](https://github.com/saikiran76/RounderCounter/assets/80874246/9228111a-8455-4097-96a9-3633550e4548)

![image](https://github.com/saikiran76/RounderCounter/assets/80874246/29128ed6-7b9a-4ccc-95ab-08097177e1ff)
Login to use the application
![image](https://github.com/saikiran76/RounderCounter/assets/80874246/d666191c-10e5-49fe-8def-b03337b546cb)


## Local Setup

1) Clone the project using the command `git clone https://github.com/saikiran76/RounderCounter.git`
2) cd into the project: `cd RounderCounter`
3) Install the required dependencies using: `npm install`
4) Start and run the project on local host: `npm start`
