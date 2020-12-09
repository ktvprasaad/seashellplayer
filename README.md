# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

Add project folder to GitHub and commit the changes.

### `npm run deploy` 
To build and deploy the project in GitHub

### `npm i axios`
To install axios to access api urls. 

### .env
Create .env file inside the project folder to include the security keys if any

Syntax: 
    REACT_APP_<keyname>=<actualvalue>
        where 'keyname' -> Key name to be used in the header given by APi provider
        & 'actualvalue' -> Actual security key given by APi provider

This REAC_APP_<keyname> to be passed in the headers during the CRUD processes.

Syntax/Example: 
    axios.get('https://listen-api.listennotes.com/', {
    headers: {<Key>: process.env.<keyname>}

### `npm i react-h5-audio-player`
To install to use <AudioPlayer> where customized props can be passed.


### .gitignore
Include the following files in the .gitignore file to avoid moving the unwanted and sensitive information to the public repository along with the existing set of files and folders.
    .env
    .eslintcache