import React from 'react';
import axios from 'axios';
import Pagination from 'react-pagination-js';

import "react-pagination-js/dist/styles.css";
import './results.css'; 

import backarrow from '../../svg/backarrow.svg';
import loadingicon from '../../svg/loadingicon.svg';

import { Link } from "react-router-dom";

export class Results extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            podcasts: [],
            loading: true,
            windowWidth: window.innerWidth,
            currentPage: 1,
        };
    }

    componentDidMount() {
      axios.get(`https://listen-api.listennotes.com/api/v2/search?sort_by_date=0&type=podcast&language=English&safe_mode=1&q=${this.props.keyword}&only_in=title,description,author,audio`, {
          headers: {'X-ListenAPI-Key': process.env.REACT_APP_ListenNotesAPI_Key}
      })
      .then(response => {
        this.setState({ 
          podcasts: [response.data],
          offset: response.data.next_offset,
          totalPodcasts: response.data.total,
          loading: false,
        });
        window.addEventListener("resize", this.handleResize);
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

    changeCurrentPage = numPage => {
      let nextOffset = (numPage * 10) - 10 ;
      axios.get(`https://listen-api.listennotes.com/api/v2/search?sort_by_date=0&type=podcast&offset=${nextOffset}&language=English&safe_mode=1&q=${this.props.keyword}&only_in=title,description,author,audio`, {
        headers: {'X-ListenAPI-Key': process.env.REACT_APP_ListenNotesAPI_Key}
      })
      .then(response => {
        this.setState({ 
          podcasts: [response.data],
          offset: numPage * 10,
          loading: false,
          currentPage: numPage
        });
        window.addEventListener("resize", this.handleResize);
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

    handleResults = (event) => {
        event.preventDefault();
        this.props.reset();
    }

    handlePodcast = (event, id) => {
        event.preventDefault();
        this.props.handlePodcast(id);
    };

    handleResize = (e) => {
      this.setState({ windowWidth: window.innerWidth });
    };
  
    // componentWillUnmount() {
    //   window.addEventListener("resize", this.handleResize);
    // } 

    render() {
        const { keyword } = this.props;
        const { windowWidth, podcasts, loading, currentPage, totalPodcasts } = this.state;

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
                <Link href="/seashellplayer" onClick={(event)=>this.handleResults(event)}>
                  <img src={backarrow} alt="back-arrow logo"/>
                </Link>
              </div>
                <div className="results-header">
                  <h1>Podcasts</h1>
                </div>
                { windowWidth < 768 &&
                  <div className="page">
                    <Pagination
                      currentPage={currentPage}
                      totalSize={totalPodcasts >= 1000 ? 100 : totalPodcasts}
                      sizePerPage={10}
                      changeCurrentPage={this.changeCurrentPage}
                      theme="border-bottom"
                    />
                  </div>
                }
            </div>
            {podcasts.length > 0 &&  podcasts[0].count > 0 &&
                <div className="podcast-results">
                {this.state.podcasts.map((podcast,index) => 
                  <div key={index} className="podcast-list"> 
                    {podcast.results.map((result,index) =>
                        <div key={index} onClick={(event)=>this.handlePodcast(event,result.id)}>
                          <Link to='/player' className="podcast">
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
                            <p className="podcast-episodes">
                                { result.total_episodes } EPISODES
                            </p>
                          </div>
                          </Link>
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
            { windowWidth >= 768 &&
              <div className="page-bottom">
                <Pagination
                  currentPage={currentPage}
                  totalSize={totalPodcasts >= 1000 ? 100 : totalPodcasts}
                  sizePerPage={10}
                  changeCurrentPage={this.changeCurrentPage}
                  theme="border-bottom"
                />
              </div>  
            }
          </div>
        );
    }
}

export default Results;