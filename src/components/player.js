import React from 'react';
import axios from 'axios';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import heartoutlineicon from '../svg/heartoutlineicon.svg';
import playbutton from '../svg/playbutton.svg';
import pausebutton from '../svg/pausebutton.svg';

export class Player extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            id: null,
            podcast: null,
            playing: null,
            currentIndex: 0,
            len: -1,
        };
    }

    componentDidMount() {
        axios.get(`https://listen-api.listennotes.com/api/v2/podcasts/${this.props.podcastId}`, {
        headers: {'X-ListenAPI-Key': process.env.REACT_APP_ListenNotesAPI_Key}
    })
      .then(response => {
        this.setState({ 
          podcast: response.data,
          playing: response.data.episodes[0],
          len: response.data.episodes.length,
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

    skipEpisode = async (event, flag) => {
        const { podcast, currentIndex, len } = this.state;
        event.preventDefault();
        let i;
        if (!flag) {
            i = currentIndex === 0 ? len - 1 : (currentIndex - 1);
        } else {
            i = currentIndex === len - 1 ? 0 : (currentIndex + 1);
        }
        await this.setState({
            currentIndex: i,
            playing: podcast.episodes[i],
        })
    }

    playNextEpisode = async(event, episode) => {
        event.preventDefault();
        await this.setState({
            playing: episode,
            currentIndex: this.state.podcast.episodes.findIndex(e => e.id === episode.id),
        })
    }

    render() {
        const { podcast, playing } = this.state;

        if (!podcast) { return null }

        return (
          <div className="player">
            <div className="player-episodes">
                <div className="podcast-player">
                    <div className="episode-playing">
                        <div className="episode-favicon">
                            <img src={heartoutlineicon} alt="heart outline icon"/>
                        </div> 
                        <div className="episode-detail">
                            <div className="episode-img">
                                <img src={playing.image} alt="episode"/>
                            </div>
                            <div className="episode-desc">
                                <h4>{playing.title.substring(0,50)}</h4>
                                <p dangerouslySetInnerHTML={{ __html: playing.description.substring(0,200)}}></p>
                            </div>
                        </div>
                        <div className="audio-control">
                            <AudioPlayer className="audio-player"
                                autoPlay={false}
                                src={playing.audio}
                                muted={true}
                                showSkipControls={true} showJumpControls={true}
                                onClickPrevious={event => this.skipEpisode(event,false)}
                                onClickNext={event => this.skipEpisode(event,true)}
                                customIcons={{
                                    play: <img src={playbutton} alt="play button"/>,
                                    pause: <img src={pausebutton} alt="pause button"/>
                                }}
                                customAdditionalControls={[]}
                            />
                        </div>
                    </div>
                    <div className="nextEpisode"><h3>Next Episodes</h3></div>
                    <div className="nextEpisode-list">
                        {podcast.episodes.map(episode => 
                            <div key={episode.id} className="nextEpisode-list-item">
                                <div className="nextEpisode-list-item-left"> 
                                    <h5>{episode.title.substring(0,25)}...</h5>
                                    <p dangerouslySetInnerHTML={{ __html: episode.description.substring(0,75)}}></p>
                                </div>
                                <div className="nextEpisode-list-item-right">
                                    <button id="play" onClick={(event)=>this.playNextEpisode(event,{...episode})}>
                                        <img src={playbutton} alt="play button"/>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
		    </div>
          </div>
        );
    }
}

export default Player;