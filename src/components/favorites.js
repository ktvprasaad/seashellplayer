import React from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

export class Favorites extends React.Component {

  constructor(props) {
      super(props);

      this.state = {
        podcasts: [],
        favorites: JSON.parse(localStorage.getItem("myFavorite")) || [],
    };
  }

  componentDidMount() {
    const { favorites } = this.state;
    if (favorites.length > 0 ) {
      let randomPodcast = favorites[Math.floor(Math.random() * favorites.length)].id;
      axios.get(`https://listen-api.listennotes.com/api/v2/podcasts/${randomPodcast}/recommendations?safe_mode=1`, {
        headers: {'X-ListenAPI-Key': process.env.REACT_APP_ListenNotesAPI_Key}
      })
        .then(response => {
          this.setState({ 
            podcasts: response.data.recommendations,
          });
        })
        .catch(function (error) {
          if(error.response) {
            console.log("Problem with response ", error.response.status);
          } else if(error.requests) {
            console.log("Problem with requests");
          } else {
            console.log("Error ", error.message);
          }
      });    
    }
  };


  handlePodcast = (event, id) => {
    event.preventDefault();
    this.props.handlePodcast(id);
  };

  render() {
    const { podcasts, favorites } = this.state;

    if (favorites.length < 1) {
      return (
        <div className="favorites">
          <div className="favorites-control">
              <div className="results-header">
                <h1>No Favorite Podcasts</h1>
              </div>
          </div>
        </div>
      )
    }

    return (
      <div className="favorites">
        <div className="favorites-control">
            <div className="results-header">
              <h1>Favorite Podcasts</h1>
            </div>
        </div>
        <div className="podcast-list">
          {favorites.map((favorite,index) =>
            <div key={index} 
              onClick={(event)=>this.handlePodcast(event,favorite.id)}>
                <Link to='/player' className="podcast">
                <div className="podcast-left">
                  <img src={favorite.image} className="podcast-img" alt="podcast"/>
                </div>
                <div className="podcast-right">
                  <h5 className="podcast-header">{favorite.title}</h5>
                  <p className="podcast-desc" dangerouslySetInnerHTML={{ __html: favorite.description}}></p>
                  <p className="podcast-episodes">
                    { favorite.total_episodes } EPISODES
                  </p>
                </div>
                </Link>
            </div>
          )}
        </div>
        <div className="recommended">
          <div className="results-header">
            <h1>Recommended Podcasts</h1>
          </div>
          <div className="recommended-podcast-list">
            {podcasts.map((favorite,index) =>
              <div key={index} className="recommended-podcast-list--item"
                onClick={(event)=>this.handlePodcast(event,favorite.id)}>
                  <Link to='/player'>
                    <img src={favorite.image} alt="podcast"/>
                  </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Favorites;