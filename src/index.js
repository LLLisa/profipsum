import React from 'react';
import ReactDOM from 'react-dom/client';
import Body from './body';

class Main extends React.Component {
  render() {
    return (
      <div>
        <Body />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);
