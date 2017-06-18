import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTsearch from 'youtube-api-search';
import config from '../.env.js';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list/video_list';
import VideoDetail from './components/video_details';

if (!process.env.API_KEY) {
  process.env.API_KEY = config.API_KEY;
}

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('surfboards');
  }

  videoSearch (term) {
    YTsearch({key: process.env.API_KEY, term}, videos => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    });
  }

  render () {
    console.log('Rendering <App />');
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          videos={this.state.videos}
          onVideoSelect={selectedVideo => this.setState({selectedVideo})} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));