import React   from 'react';
import axios from 'axios';
import backarrow from '../svg/backarrow.svg';
import loadingicon from '../svg/loadingicon.svg';

import { Link } from "react-router-dom";

export class Results extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            podcasts: [],
            loading: true,
        };
    }

    componentDidMount() {
        axios.get(`https://listen-api.listennotes.com/api/v2/search?sort_by_date=0&type=podcast&language=English&safe_mode=1&q=${this.props.keyword}&only_in=title,description,author,audio`, {
            headers: {'X-ListenAPI-Key': process.env.REACT_APP_ListenNotesAPI_Key}
        })
      .then(response => {
        this.setState({ 
          podcasts: [response.data],
          loading: false,
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
    };

    handleResults = (event) => {
        event.preventDefault();
        this.props.reset();
    }

    handlePodcast = (event, id) => {
        event.preventDefault();
        this.props.handlePodcast(id);
    };

    render() {
        const { keyword, windowWidth } = this.props;
        const { podcasts, loading } = this.state;

        if (!keyword) return null;

        if (loading) {
            return (
                <div className="loadingShell">
                    <h1>Lo<img src={loadingicon} alt="seashell logo"/>ding...</h1>
              </div>
            );
        }

        return (
          <div className="results">
            <div className="results-control">
                <div className="results-backarrow">
                    <Link to="/" onClick={(event)=>this.handleResults(event)}>
                        <img src={backarrow} alt="back-arrow logo"/>
                    </Link>
                </div>
                <div className="results-header">
                    <h1>Results</h1>
                </div>
            </div>
            {podcasts.length > 0 &&  podcasts[0].count > 0 &&
                <div className="podcast-results">
                {this.state.podcasts.map((podcast,index) => 
                  <div key={index} className="podcast-list"> 
                    {podcast.results.map((result,index) =>
                        <div className="podcast" key={index} 
                            onClick={(event)=>this.handlePodcast(event,result.id)}>
                          <div className="podcast-left">
                            <img src={result.image} className="podcast-img" alt="podcast"/>
                          </div>
                          <div className="podcast-right">
                            { windowWidth <= 320 && 
                              <>
                                <h5>
                                  {result.title_original.length > 19 ? result.title_original.substring(0,20).concat('...')
                                  : result.title_original}
                                </h5>
                                <p className="podcast-desc">
                                  {result.description_original > 39 ? result.description_original.substring(0,40).concat('...')
                                    : result.description_original}
                                </p>
                              </>
                            }
                            { windowWidth > 320 &&  windowWidth <= 480 &&
                              <>
                                <h5>
                                  {result.title_original.length > 29 ? result.title_original.substring(0,30).concat('...')
                                  : result.title_original}
                                </h5>
                                <p className="podcast-desc">
                                  {result.description_original > 79 ? result.description_original.substring(0,80).concat('...')
                                    : result.description_original}
                                </p>
                              </>
                            }
                            { windowWidth > 480 &&  windowWidth <= 768 &&
                              <>
                                <h5>
                                  {result.title_original.length > 49 ? result.title_original.substring(0,50).concat('...')
                                  : result.title_original}
                                </h5>
                                <p className="podcast-desc">
                                  {result.description_original > 149 ? result.description_original.substring(0,150).concat('...')
                                    : result.description_original}
                                </p>
                              </>
                            }
                            { windowWidth > 768 && 
                              <>
                                <h5 className="podcast-header">{result.title_original}</h5>
                                <p className="podcast-desc">{result.description_original}</p>
                              </>
                            }
                            <p className="podcast-minutes">
                                { result.total_episodes } EPISODES
                            </p>
                          </div>
                        </div>
                    )}
                  </div>
                )}
            </div>
            }
            {podcasts.length > 0 &&  podcasts[0].count === 0 &&
                <div className="nopodcast">
                    <h2>
                        Empty <img src={loadingicon} alt="seashell logo"/> ! Podcast on <span>{keyword}</span> not found. Please search some other podcast!
                    </h2>
                </div>
            }
          </div>
        );
    }
}

export default Results;