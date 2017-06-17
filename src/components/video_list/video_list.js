import React, {Component} from 'react';
import VideoListItem from './video_list_item';

class VideoList extends Component {
  constructor (props) {
    super(props);
    this.generateVideoListItem = this.generateVideoListItem.bind(this);
  }

  generateVideoListItem () {
    return (
      this.props.videos.map((video, index) => {
        return (
          <VideoListItem
            onVideoSelect={this.props.onVideoSelect}
            key={video.etag}
            video={video} />
        );
      })
    );
  }

  render () {
    console.log('Rendering <VideoList />');
    return (
      <ul className='col-md-4 list-group'>
        {this.generateVideoListItem()}
      </ul>
    );
  }
}

export default VideoList;