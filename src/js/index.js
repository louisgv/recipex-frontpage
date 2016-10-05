import '../scss/index.scss';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from 'grommet/components/App';

import Split from 'grommet/components/Split';

import Feature from './containers/Feature';

import Signup from './containers/Signup';

class Main extends Component {
  render() {
    return (
      <App centered={false}>

        <Split flex="right">
          <Signup></Signup>
          <Feature></Feature>
        </Split>


        {/*<Footer primary={true} appCentered={true} direction="column" align="center" pad="small" colorIndex="grey-1">
          <p>
            Built with
            <a href="http://grommet.io" target="_blank">Grommet</a>
          </p>
        </Footer>*/}
      </App>
    );
  }
};

let element = document.getElementById('content');
ReactDOM.render(React.createElement(Main), element);

document.body.classList.remove('loading');
