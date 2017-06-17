import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTsearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list/video_list';

const API_KEY = 'AIzaSyAn1eLEjKUlBwKQuOm97NIODYYSQBgY-4g';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {videos: []};
    YTsearch({key: API_KEY, term: 'surfboards'}, videos => {
      this.setState({videos});
    });
  }

  render () {
    console.log('Rendering <App />');
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));