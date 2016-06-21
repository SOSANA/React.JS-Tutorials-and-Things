import React from 'react';

// passing video same as passing in props parameter and setting variable to const video = props.video;
const VideoListItem = ({ video, onVideoSelect }) => {
  // console.log(video); // looking up object to get info for imageUrl and video title
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" alt={video.snippet.title} src={imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
