import React, { Component } from 'react';
import ReactDom from 'react-dom';
import yTSearch from 'youtube-api-search';

import API_KEY from '../config/API_KEY';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] };

    yTSearch({ key: API_KEY, term: 'Surfboards' }, (videos) => {
      // same as doing ({ videos: videos})
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

// making an instance of our component
ReactDom.render(<App />, document.querySelector('.container'));
