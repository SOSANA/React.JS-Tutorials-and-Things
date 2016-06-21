import React, { Component } from 'react';
import ReactDom from 'react-dom';
import yTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import API_KEY from '../config/API_KEY';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
    };
    this.videoSearch('Surfboards');
  }

  videoSearch(term) {
    // kicking off a request to go get a list of videos
    yTSearch({ key: API_KEY, term }, (videos) => {
      this.setState({
        // same as doing videos: videos
        videos,
        selectedVideo: videos[0],
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

// making an instance of our component
ReactDom.render(<App />, document.querySelector('.container'));
