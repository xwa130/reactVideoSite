import React, {Component} from 'react';

class VideoListItem extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    console.log('Rendering <VideoListItem />');
    return (
      <li className='list-group-item'>
        <div className='video-list media'>
          <div className='media-left'>
            <img className='media-object'
                 src={this.props.video.snippet.thumbnails.default.url} />
          </div>

          <div className='media-body'>
            <div className='media-heading'>
              {this.props.video.snippet.title}
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default VideoListItem;