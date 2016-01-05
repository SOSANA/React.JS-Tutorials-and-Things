import React from 'react';

// one way to create a component, called a 'class component' which has state
/*
class App extends React.Component {
  render() {
    return <h1>Hello World</h1>;
  }
}
*/

// another way to create a component called a 'stateless component' which will
// not have state
const App = () => <h1>Hello Guys</h1>;

export default App;
