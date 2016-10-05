import './index.scss';
import React, {Component} from 'react';

import Sidebar from 'grommet/components/Sidebar';

import Title from 'grommet/components/Title';

import Box from 'grommet/components/Box';

import Form from 'grommet/components/Form';

import Header from 'grommet/components/Header';

import FormFields from 'grommet/components/FormFields';

import FormField from 'grommet/components/FormField';

import Footer from 'grommet/components/Footer';

import Button from 'grommet/components/Button';
import Headline from 'grommet/components/Headline';

import Heading from 'grommet/components/Heading';

export default class Feature extends Component {

  constructor() {
    super()
  }

  render() {

    return (
      <div className="Signup">
        <Box alignSelf="stretch" align="baseline" full="vertical" justify="center" pad="medium">
          <Header>
            <h1>Farci</h1>
          </Header>
          <Headline>
            <h2>Cook different.</h2>
          </Headline>
        </Box>
      </div>
    );
  }
};
