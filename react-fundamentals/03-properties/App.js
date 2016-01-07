import React from 'react';

class App extends React.Component {
  render() {
    let txt = this.props.txt;
    let cat = this.props.cat;
    return (
      <div>
        <h1>{txt}</h1>
        <h2>{cat}</h2>
      </div>
  );
  }
}

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired,
};

App.defaultProps = {
  txt: 'This is the default txt',
};

export default App;
