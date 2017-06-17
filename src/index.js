import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTsearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list/video_list';
import VideoDetail from './components/video_details';

const API_KEY = 'AIzaSyAn1eLEjKUlBwKQuOm97NIODYYSQBgY-4g';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
    YTsearch({key: API_KEY, term: 'surfboards'}, videos => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    });
  }

  render () {
    console.log('Rendering <App />');
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          videos={this.state.videos}
          onVideoSelect={selectedVideo => this.setState({selectedVideo})} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));