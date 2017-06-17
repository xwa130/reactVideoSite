import React, {Component} from 'react';

class VideoDetail extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    console.log('Rendering <VideoDetail />');
    const video = this.props.video;
    if (video.length === 0) {
      return (<div>Loading...</div>);
    } else {
      console.log('vieo', video[0].id.videoId);
      const url = `https://www.youtube.com/embed/${video[0].id.videoId}`;
      return (
        <div className='video-detail col-md-8'>
          <div className='embed-responsive embed-responsive-16by9'>
            <iframe className='embed-responsive-item' src={url}></iframe>
          </div>
          <div className='details'>
            <div>{video[0].snippet.title}</div>
            <div>{video[0].snippet.description}</div>
          </div>
        </div>
      );
    }
  }
}

export default VideoDetail;