# ![Sea Shell Player Logo](https://github.com/ktvprasaad/seashellplayer/blob/master/public/seashellicon.svg) Sea Shell Player: A Podcast Player React App

A simple podcast player that lets users at all ages to listen to variety of podcasts on their choice. This app was built on [create-react-app](https://create-react-app.dev/), [react-h5-audio-player](https://github.com/lhz516/react-h5-audio-player), and the [ListenNotes API](https://www.listennotes.com/api/).


## Installation

1. To install: **`npx create-react-app <'app name'>`**

2. API key: Make a .env folder in the root of your project. *Include the following line with your own API key:* 
```
REACT_APP_ListenNotesAPI_Key=<'Your API Key'>
```

3. To run: **`npm start`**
    * Runs the app in the development mode 
    * In Windows, it automatically starts development server and opens the app in the internet explorer in [http://localhost:3000](http://localhost:3000).
    * The page will reload if you make edits and save it.

4. To deploy: **`npm run deploy`**


## Project Depedencies & Installation Procedure
```
    npm i axios --save
    npm i react-h5-audio-player --save
    npm i react-router-dom --save
```


## Deployment

Followed the proceedures provided in the [link](https://create-react-app.dev/docs/deployment/#github-pages) to host it in GitHub Pages.


## How To Use The App?

![High Fidelity Wireframe](https://github.com/ktvprasaad/seashellplayer/tree/master/src/svg/HFWireframes.png)
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
* Here is the [link](https://ktvprasaad.github.io/seashellplayer/) to view the app!