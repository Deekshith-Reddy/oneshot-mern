<h1 align="center"> An Interactive application to find colleges and students from various cities </h1>

## What is this

This is a full stack application which allows users to search for various colleges from different parts of the country using an interactive city chart board. It even allows users
to find students from a specific college and know details about a specific student.

## Features

- Full colleges Summary
- An interactive chart on the left showing the colleges frequency by city
- A Chart on the right showing frequency of the courses offered by the college
- Search functionality while searching for colleges and searching for students
- Sort functionality by founded year in colleges
- Sort functionality by graduation year for students
- Easy navigation between colleges and students through links


## Libraries used
- React
- React Router
- Axios
- Express
- Mongoose
- Material UI
- Ant



## Setting up on your local machine

- Install [NodeJS](https://nodejs.org/en/) if you don't have it already and check if npm is installed by running npm command in your terminal.
- `git clone https://github.com/Deekshith-Reddy/oneshot-mern.git`
- Create an empty `.env` file in root and add `MONGODB_URI=` with the URI provided from MONGODB connect.
- Make sure your data object is similar in structure to the schema defined in the models folder.
- Make sure you are in the directory which contains `package.json` file and run `npm run install`
- Go in the `frontend` directory and do the same i.e run `npm run install`
- After the libraries are installed use `node server.js` command to start the express server and run `npm start` inside frontend directory to start the react development server.
- If you want to directly view the site it is hosted on heroku at [https://oneshot-mern.herokuapp.com/](https://oneshot-mern.herokuapp.com/).



## What's missing ?

- This application is built by sending props through links whenever we go back a page by browser the data is reset and we don't see anything.
- I learned that we can use react context to make it work, I will work on it soon and the changes will be added.



## Mentions

- A fun api for generating avatars based on a random seed [DiceBear Avatars](https://avatars.dicebear.com/).
- The loading icon is generated from [loading.io](https://loading.io/)


