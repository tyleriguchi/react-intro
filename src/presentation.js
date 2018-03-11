// Import React
import React from 'react';

import codeExample from './thing.example'

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Fill,
  Fit,
  Heading,
  Layout,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Notes,
  ComponentPlayground
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

import NotesHeader from './NotesHeader'

// Require CSS
require('normalize.css');


const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Intro to react
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={1} textColor="secondary">
            What's react?
          </Heading>
          <List>
            <ListItem>Library not a framework</ListItem>
            <ListItem>One way data binding</ListItem>
            <ListItem>Virtual Dom</ListItem>
            <ListItem>It's all javascript</ListItem>
          </List>

          <Notes>
            <NotesHeader>
              Library not a framework
            </NotesHeader>
            <List>
              <ListItem>frameworks: ember, angular, rails</ListItem>
              <ListItem>libraries: jquery, vuejs</ListItem>
              <ListItem>frameworks give you everything out of the box, or as they say batteries included</ListItem>
              <ListItem>using a library allow you to pull in whatever functionality you need</ListItem>
              <ListItem>things like client side routing, form management, state management</ListItem>
            </List>

            <NotesHeader>
              One way data binding
            </NotesHeader>
            <List>
              <ListItem>
                easier to track how changes move through your application
              </ListItem>
              <ListItem>
                Similar to how callbacks are considered anti patterns in rails,
                makes it harder to follow the code path, more difficult to test
              </ListItem>

            </List>

            <NotesHeader>
              virtual dom
            </NotesHeader>
            <List>
              <ListItem>buzz word</ListItem>
              <ListItem>an html page is a tree strucutre, the virtual dom is a stripped down version</ListItem>
              <ListItem>allows batching of dom updates</ListItem>
              <ListItem>uses a diffing algorithim to figure out the smallest number of dom operations needed to reflect changes</ListItem>
              <ListItem>all the major frameworks / libraries do something similar</ListItem>
              <ListItem>allows a clean separation between react and the rendering engine which allows things like react native</ListItem>
            </List>

            <NotesHeader>
              its all javascript
            </NotesHeader>
            <List>
              <ListItem>
                small api size
              </ListItem>
              <ListItem>
                you learn javascript, not the framework
              </ListItem>
              <ListItem>
                similar to being a rails dev vs ruby dev
              </ListItem>
              <ListItem>
                knowledge is typically more transferable to other uses, with frameworks you can
                end up learning more about the internals of the framework which
                while useful, doesn't help too much down the line
              </ListItem>
            </List>

          </Notes>

        </Slide>

        {/*<Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            some downsides of react
          </Heading>

          <List>
            <ListItem>tooling can be complicated</ListItem>
            <ListItem>need to know javascript</ListItem>
            <ListItem>can require more code for simple things</ListItem>
          </List>

          <Notes>
            <NotesHeader>
          tooling can be complicated
            </NotesHeader>
            <List>
          <ListItem>
          most react projects use babel / jsx, which requires a build tool such as webpack
          </ListItem>
          <ListItem>
          awhile back there wasn't a community supported solution for
          getting started quickly with a react project
          </ListItem>
          <ListItem>
          now there is create react app, a cli project generator that abstracts
          the build tools away
          </ListItem>
            </List>

            <NotesHeader>
          can require more code for simple things
            </NotesHeader>
            <List>
          <ListItem>
          to show or hide a div, jquery is much simpler
          </ListItem>
          <ListItem>
          for more complex ui, jquery becomes harder to manage
          </ListItem>
          <ListItem>
          for example,
          </ListItem>
            </List>

            <NotesHeader>
          need to know javascript
            </NotesHeader>
            <List>
          <ListItem>
          both good and bad,
          </ListItem>
            </List>
          </Notes>
        </Slide>*/}

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            whats babel?
          </Heading>

          <List>
            <ListItem>
              Transpiler
            </ListItem>
            <ListItem>
              Allows you to use the new features of javascript before browsers
              support it natively
            </ListItem>

          </List>

          <Notes>
            <NotesHeader>
              what is babel / jsx
            </NotesHeader>
            <List>
              <ListItem>
                babel is a transpiler, or languages that compile to another language
              </ListItem>

              <ListItem>
                in this case babel is compiled into javascript the browser can understand it
              </ListItem>
              <ListItem>
                Reason is so the code can run in older browsers as well
              </ListItem>
            </List>
          </Notes>
        </Slide>

        

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            jsx example
          </Heading>

          <Layout>
            <Fill>
              <CodePane
                lang="jsx"
                padding="10px"
                source={`const element = (
                  <h1 className="greeting">
                    Hello, world!
                  </h1>
                );`
                } />
            </Fill>
            <Fill>
              <CodePane
                lang="js"
                padding="10px"
                source={
                `const element = React.createElement(
                  'h1',
                  {className: 'greeting'},
                  'Hello, world!'
                );`
                }/>
            </Fill>
          </Layout>

          <Notes>
            <NotesHeader>
              what is babel / jsx
            </NotesHeader>
          </Notes>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            how do i use it
          </Heading>
          <Heading size={1} textColor="secondary">
            Heading 1
          </Heading>
          <Heading size={2} textColor="secondary">
            Heading 2
          </Heading>
          <Heading size={3} textColor="secondary">
            Heading 3
          </Heading>
          <Heading size={4} textColor="secondary">
            Heading 4
          </Heading>
          <Heading size={5} textColor="secondary">
            Heading 5
          </Heading>
          <Text size={6} textColor="secondary">
            Standard text
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Standard List
          </Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
