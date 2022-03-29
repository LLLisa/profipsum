import React from 'react';
import ReactDOM from 'react-dom';
import Body from './body';

class Main extends React.Component {
  render() {
    return <Body />;
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
