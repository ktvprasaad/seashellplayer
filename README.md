# ![Sea Shell Player Logo](https://github.com/ktvprasaad/seashellplayer/blob/master/public/seashellicon.svg) Sea Shell Player: A React App

A simple podcast player that lets users at all ages to listen to variety of podcasts on their choice. This app was built on [create-react-app](https://create-react-app.dev/), [react-h5-audio-player](https://github.com/lhz516/react-h5-audio-player), and the [ListenNotes API](https://www.listennotes.com/api/).

![SPA-React](https://github.com/ktvprasaad/seashellplayer/blob/master/public/player.png)

## Installation

1 Clone this repository
```
$ git clone https://github.com/ktvprasaad/seashellplayer.git
$ cd seashellplayer
```

API key: Make a .env folder in the root of your project. *Include the following line with your own API key:* 
```
REACT_APP_ListenNotesAPI_Key=<'Your API Key'>
```

2. To run: **`npm start`**
    * Runs the app in the development mode 
    * In Windows, it automatically starts development server and opens the app in the internet explorer in [http://localhost:3000/seashellplayer](http://localhost:3000/seashellplayer).
    * The page will reload if you make edits and save it.

3. To deploy: **`npm run deploy`**

## Project Dependencies

```
  "dependencies": {
    "axios": "^0.21.0",
    "gh-pages": "^3.1.0",
    "react": "^17.0.1",
    "react-dom": "^17.0.1",
    "react-h5-audio-player": "^3.5.0",
    "react-pagination-js": "^2.0.0",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.1",
    "web-vitals": "^0.2.4"
  },
```

## Deployment

Procedure to host the app in the GitHub Pages - [link](https://create-react-app.dev/docs/deployment/#github-pages)

Step 1: Add ```homepage``` to ```package.json```
```
"homepage": "https://<your user name>.github.io/<project name>",
```

Step 2: Add ```gh-pages``` and add ```deploy``` to ```scripts``` in ```package.json```
Now, whenever you run ```npm run build```, you will see a cheat sheet with instructions on how to deploy to GitHub Pages.

To publish it at [GitHub](https://github.com/ktvprasaad/seashellplayer), run:
```
npm install --save gh-pages
```

Add the following scripts in your ```package.json```:
```
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
```
The ```predeploy``` script will run automatically before ```deploy``` is run.

Step 3: Deploy the site by running ```npm run deploy```

Step 4: For a project page, ensure your project’s settings use ```gh-pages```

## How To Use The App?

![High Fidelity Wireframe](https://github.com/ktvprasaad/seashellplayer/blob/master/public/HFWireframes.png)
* Key-in the podcast in the search input text box you like to listen and hit enter/click forward arrow. 
* It results maximum 10 podcasts and each one is clickable.
* Any clicked podcast shows 10 episodes having the first episode playable along with the below listed options.
    * Play
    * Pause
    * Forward a few seconds
    * Rewind a few seconds
    * Skip to next episode
    * SKip to previous episode
    * Volume control for the devices other than ipad/iphone. The in built volume control of apple products prefectly works.


## Future Development
We will be developing the following functionality soon.

* Responsive views to tablet/ipad and desktop.
* Login Page through third party like Google/Facebook/Instagram accounts.
* Ability to add episodes to the favorites lists.
* Include pagination to navigate to other podcasts/episodes.
* Show recommended and best podcasts/episodes based on users' interests.
* Option to search podcast through voice commands.
* Offline access.
* Progressive Web Application.


## Live App
* Listen to the [podcasts](https://ktvprasaad.github.io/seashellplayer/) and enjoy!