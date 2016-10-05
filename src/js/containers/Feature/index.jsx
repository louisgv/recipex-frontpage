import './index.scss';
import React, {Component} from 'react';

import Section from 'grommet/components/Section';

import IphoneFrame from '../../components/IphoneFrame';

import Header from 'grommet/components/Header';

import Heading from 'grommet/components/Heading';

import Box from 'grommet/components/Box';

import Split from 'grommet/components/Split';

import Tiles from 'grommet/components/Tiles';

import Tile from 'grommet/components/Tile';

import Accordion from 'grommet/components/Accordion';

import AccordionPanel from 'grommet/components/AccordionPanel';

const Features = [
  {
    title: "Feature 1",
    img: "some url",
    desc: "Cool feature 1",
  }, {
    title: "Feature 2",
    img: "some url",
    desc: "Cool feature 1",
  }, {
    title: "Feature 3",
    img: "some url",
    desc: "Cool feature 1",
  },
].map((item, index) => {
  return (
    <Tile align="center" basis="small" flex={false} key={item.title}>
      <Header size="small" pad={{
        "horizontal": "small"
      }}>
        <Heading tag="h4">
          <strong>
            {item.title}
          </strong>
        </Heading>
      </Header>
      <Box pad="small">
        <p>
          {item.desc}
        </p>
      </Box>
    </Tile>
  )
})

export default class Feature extends Component {

  state : {
    currentSlide: "Intro"
  }

  constructor() {
    super()
  }

  render() {

    return (
      <div className="Feature">
        <Split priority="left">
          <Box alignSelf="stretch" full="vertical" justify="center">
            <IphoneFrame/>
          </Box>
          <Box alignSelf="stretch" full="vertical" justify="center">
            <Tiles fill={true} selectable={true}>
              {Features}
            </Tiles>
          </Box>
        </Split>
        {/*<Accordion>
          <AccordionPanel heading="First Panel">
            <p>First Panel contents</p>
          </AccordionPanel>
          <AccordionPanel heading="Second Panel">
            <p>First Panel contents</p>
          </AccordionPanel>
        </Accordion>*/}
      </div>
    );
  }
};
