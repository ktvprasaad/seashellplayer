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
            iphone: (/iphone|ipod|ipad/i.test(navigator.userAgent.toLowerCase())) ? true : false,
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

    reformat = (description) => {

        const { width } = this.props.windowWidth;

        if ( width <= 320 ) {
            return description.substring(0,40).concat('...');
        } else if ( width > 321 && width <= 480 ) {
            return description.substring(0,80).concat('...');
        } else if ( width > 480 && width <= 768 ) {
            return description.substring(0,150).concat('...');
        }
        return description;
    }

    render() {
        const { podcast, playing, iphone } = this.state;
        const { windowWidth } = this.props;

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
                                <h4>{playing.title}</h4>
                                <p dangerouslySetInnerHTML={{ __html: this.reformat(playing.description)}}></p>
                            </div>
                        </div>
                        <div className="audio-control">
                            {  iphone ? 
                                <AudioPlayer className="i-player"
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
                                    customVolumeControls={[]}
                                    customAdditionalControls={[]}
                                /> :
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
                            }
                        </div>
                    </div>
                    <div className="nextEpisode"><h3>Next Episodes</h3></div>
                    <div className="nextEpisode-list">
                        {podcast.episodes.filter(e => e.id !== playing.id).map(episode => 
                            <div key={episode.id} className="nextEpisode-list-item">
                                <div className="nextEpisode-list-item-left"> 
                                    { windowWidth <= 320 && 
                                        <h5>
                                            {episode.title.length > 19 ? episode.title.substring(0,20).concat('...')
                                            : episode.title}
                                        </h5>

                                    }
                                    { windowWidth > 321 &&  windowWidth <= 480 &&
                                        <h5>
                                            {episode.title.length > 29 ? episode.title.substring(0,30).concat('...')
                                            : episode.title}
                                        </h5>

                                    }
                                    { windowWidth > 480 && <h5>{episode.title}</h5> }
                                    <p dangerouslySetInnerHTML={{ __html: this.reformat(episode.description)}}></p>
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