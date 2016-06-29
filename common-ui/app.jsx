import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Router, Route, hashHistory} from 'react-router';
import Hello from './views/Hello/index.jsx';
import Card from './views/Card/index.jsx';
import Button from './views/Button/index.jsx';
import Bar from './views/Bar/index.jsx';

injectTapEventPlugin();

export class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Router history={hashHistory}>
        <Route path="/" component={Hello} />
        <Route path="/card" component={Card} />
        <Route path="/bar" component={Bar} />
        <Route path="/button" component={Button} />
      </Router>
      </MuiThemeProvider>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('content'));
