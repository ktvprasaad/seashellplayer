import React from 'react';
import searchicon from '../svg/searchicon.svg';
import forwardarrow from '../svg/forwardarrow.svg';

export class Search extends React.Component {

  constructor() {
    super();

    this.state = {
      searchKeyword: '',
    }
  }

  async handleSubmit(event,searchKeyword){
    event.preventDefault();
    await this.props.getKeyword(searchKeyword);
  } 

  componentWillUnmount() {
    this.setState({ 
        searchKeyword: '',
    });
  }

  render () {
    const { searchKeyword } = this.state;

    return (
        <div className="search">
            <h1 className="explore">Explore Podcasts</h1>
            <div className="search-section">
                <div className="search-top">
                    <div className="search-icon">
                    <img src={searchicon} alt="search logo"/>
                    </div>
                    <div className="search-podcasts">
                    <h4>Search Podcasts</h4>
                    </div>
                </div>
                <div className="search-keyword">
                    <form className="search-keyword-form" onSubmit={(event)=>this.handleSubmit(event,searchKeyword)}>
                        <input type="text" required
                        value={searchKeyword}
                        onChange={(event) => this.setState({searchKeyword: event.target.value})}
                        />
                        {/* <span className="searchButton" type="button" onClick={(event)=>this.handleSubmit(event,searchKeyword)}> */}
                            <img className="search-keyword-form forwardarrow" src={forwardarrow} alt="forward-arrow logo"
                            onClick={(event)=>this.handleSubmit(event,searchKeyword)}/>
                        {/* </span> */}
                    </form>
                </div>
            </div>
        </div>
        );  
    }
}

export default Search;