import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

/* logos and icons */
import logo from './svg/logo.svg';
import seashellicon from './svg/seashellicon.svg';
import hearticon from './svg/hearticon.svg';

/* components */
import Search from './components/search';
import Player from './components/player/player';
import Results from './components/results/results'; 
import Favorites from './components/favorites';

/* Style Sheet */
import './App.css';

export class App extends React.Component {

  constructor() {
    super();

    this.state = {
      searchKeyword: null,
      podcasts: [],
      podcastId: null,
      windowWidth: window.innerWidth,
      favorites: [],
    }
  }

  /* To get the user input from search.js component and pass it over to results.js */
  getKeyword = (keyword) => {
    this.setState({
      searchKeyword: keyword,
      podcastId: null,
    })
  }
  
  /* To get user chosen podcast from results.js and pass it over to player.js to 
    list their corresponding episodes*/
  handlePodcast = (id,offset) => {
    this.setState({
      podcastId: id,
    })
  }

  addToFavorites = (podcast) => {

    let exists = this.state.favorites.some(favorite => favorite.id === podcast.id);

    if (!exists) {
      this.setState(prevState=>({
        favorites: [...prevState.favorites,podcast]
      }))
    } else {
      this.setState({
        favorites: this.state.favorites.filter((favorite) => favorite.id !== podcast.id)
      })
    }
  }

  /* To rest all the state values upon 'seashell player' click */
  reset = () => {
    this.setState({
      searchKeyword: null,
      podcastId: null,
    })
  }

  handleResize = (e) => {
    this.setState({ windowWidth: window.innerWidth });
   };

  componentDidMount(){
    window.addEventListener("resize", this.handleResize);
  }

  // componentWillUnmount() {
  //   window.addEventListener("resize", this.handleResize);
  // } 

  render () {

    const { searchKeyword, podcastId, windowWidth } = this.state;

    return (
      <div className="App">
        <Router basename="/seashellplayer">
          <header className="App-header">
            <div className="logos"> 
              <div className="shellicon">
                <img src={seashellicon} alt="seashell logo"/>
              </div>
              <div className="app-logo">
                <Link to="/" onClick={this.reset}>
                  <img src={logo} alt="app logo"/>
                </Link>
              </div>
              <Link to='/fav'>
                <div className="hearticon">
                  <img src={hearticon} alt="heart logo"/>
                </div>
              </Link>
            </div> 
          </header>

          <Switch>
          <Route exact path="/" render={() => { 
            if (!searchKeyword) {
              return (
                <div className="search-screen">
                  <Search getKeyword={this.getKeyword}/>
                </div>
              );
            } else {
              return (
                <div className="results-screen">
                  <Results keyword={searchKeyword} reset={this.reset} 
                    handlePodcast={this.handlePodcast} windowWidth={windowWidth}/>
                </div>
              );
            }
          }}/>

          <Route path="/player" render={() => { 
            return (
              <div className="search-player">
                <Player podcastId={podcastId} windowWidth={windowWidth} addToFavorites={this.addToFavorites}/>
              </div>
            );
          }}/>

          <Route path="/fav" render={() => { 
              return (
                <div className="favorites-screen">
                  <Favorites favorites={this.state.favorites} handlePodcast={this.handlePodcast}/>
                </div>
              );
          }}/>
          </Switch>

        </Router>   
      </div>
    );
  }
}

export default App;