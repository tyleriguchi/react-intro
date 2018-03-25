// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Appear,
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

import reactGoldStandard from './memes/react-gold-standard.jpg'
import dansHair from './memes/dan-abramovs-hair.jpg'

import * as codeExamples from './code-examples/examples'

// Import theme
import createTheme from 'spectacle/lib/themes/default';

import NotesHeader from './NotesHeader'

// Require CSS
require('normalize.css');


const theme = createTheme(
  {
    primary: '#7851a9',
    secondary: 'white',
    tertiary: '#03A9FC',
    quartenary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

const buttonStyle = {
  color: 'white',
  backgroundColor: '#7851a9',
  padding: '8px 15px',
  border: '1px solid #7851a9',
  fontSize: '1.2rem',
  borderRadius: '5px',
  outline: 'none',
  cursor: 'pointer'
}


export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} caps lineHeight={1} textColor="secondary">
            React
          </Heading>
          <Heading size={6} caps textColor="secondary">
             You, Me, And Dan Abramov's hair
          </Heading>
          <Appear>
            <img src={dansHair} style={{width: '200px', height: '200px'}}/>
          </Appear>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <img src={reactGoldStandard} />
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
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
              <ListItem>frameworks give you everything out of the box, or batteries included</ListItem>
              <ListItem>using a library allow you to pull in functionality as you need it</ListItem>
              <ListItem>things like routing, state management, data layer</ListItem>
            </List>

            <NotesHeader>
              One way data binding
            </NotesHeader>
            <List>
              <ListItem>
                can be easier to track how data changes through your application
              </ListItem>
              <ListItem>
                prevents some subtle bugs
              </ListItem>
            </List>

            <NotesHeader>
              virtual dom
            </NotesHeader>
            <List>
              <ListItem>stripped down version of a web page</ListItem>
              <ListItem>allows smart batching of dom updates</ListItem>
              <ListItem>uses a diffing algorithim to figure out the smallest number of dom operations needed to reflect data changes</ListItem>
              <ListItem>all major frameworks / libraries have adopted similar ideas as vdom</ListItem>
              <ListItem>allows a clean separation between react and the rendering engine allowing things like react native</ListItem>
            </List>

            <NotesHeader>
              its all javascript
            </NotesHeader>
            <List>
              <ListItem>
                small api size
              </ListItem>
              <ListItem>
                you learn javascript, not so much the framework
              </ListItem>

              <ListItem>
                knowledge is typically more transferable to other uses, with frameworks you can
                end up learning more about how to do something in the framework, which
                doesn't help too much down the line
              </ListItem>
            </List>

          </Notes>

        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>
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
            <ListItem>
              polyfills
            </ListItem>
            <ListItem>
              optimizations for the browser
            </ListItem>
            <ListItem>
              <a href="https://codemix.com/blog/why-babel-matters">
                codemix.com/blog/why-babel-matters
              </a>
            </ListItem>
          </List>

          <Notes>
            <NotesHeader>
              Babel?
            </NotesHeader>
            <List>
              <ListItem>
                babel is a transpiler, or language that compiles to another language
              </ListItem>

              <ListItem>
                Babel lets you write new javascript features before full browser compliance
              </ListItem>

              <ListItem>
                can backfill or polyfills feature for older browsers
              </ListItem>

              <ListItem>
                runs at compile time so is able to make optimizations for the jit, the thing that
                parses and runs javascript
              </ListItem>
            </List>
          </Notes>
        </Slide>


        <Slide transition={['fade']} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>
            useful es6+ features
          </Heading>

          <List>
            <ListItem>
              Const decleration
            </ListItem>

            <ListItem>
              Let decleration
            </ListItem>

            <ListItem>
              String interpolation
            </ListItem>

            <ListItem>
              Class declerations
            </ListItem>

            <ListItem>
              Import / Export
            </ListItem>

            <ListItem>
              Arrow function
            </ListItem>

            <ListItem>
              Spread operator
            </ListItem>

            <ListItem>
              Object destructuring
            </ListItem>

            <ListItem>
              Default arguments
            </ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>
            const deceleration
          </Heading>

          <CodePane
            lang="js"
            source={codeExamples.constExample}
            margin="20px auto"
            overflow = "overflow"
          />
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>
            let deceleration
          </Heading>

          <CodePane
            lang="js"
            source={codeExamples.letExample}
            margin="20px auto"
            overflow = "overflow"
          />
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>
            String interpolation
          </Heading>

          <CodePane
            lang="js"
            source={codeExamples.interpolationExample}
            margin="20px auto"
            overflow = "overflow"
          />
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>
            Class declerations
          </Heading>

          <Layout>
            <Fill>
              <CodePane
                lang="js"
                source={codeExamples.classExample.jsExample}
                padding="20px"
                overflow = "overflow"
              />
            </Fill>

            <Fill>
              <CodePane
                lang="ruby"
                source={codeExamples.classExample.rubyExample}
                padding="20px"
                overflow = "overflow"
              />
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>
            Import / Export
          </Heading>

          <CodePane
            lang="js"
            source={codeExamples.importExample}
            margin="20px auto"
            overflow = "overflow"
          />
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>
            Arrow function
          </Heading>

          <CodePane
            lang="js"
            source={codeExamples.arrowExample}
            margin="20px auto"
            overflow = "overflow"
          />
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>
            spread operator
          </Heading>

          <CodePane
            lang="js"
            source={codeExamples.spreadExample}
            margin="20px auto"
            overflow = "overflow"
          />
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>
            object destructuring
          </Heading>

          <CodePane
            lang="js"
            source={codeExamples.destructureExample}
            margin="20px auto"
            overflow = "overflow"
          />
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>
            Default arguments
          </Heading>

          <CodePane
            lang="js"
            source={codeExamples.argsExample}
            margin="20px auto"
            overflow = "overflow"
          />
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>
            JSX?
          </Heading>

          <List>
            <ListItem>
              XML like syntax to write html / react components
            </ListItem>

            <ListItem>
              Html attributes are camel cased
            </ListItem>
            <ListItem>
              allows you to use any javascript expression in the markup by wrapping
              it with curly brackets
            </ListItem>

            <ListItem>
              can treat it as a javascript object
            </ListItem>
          </List>

          <Notes>
            <NotesHeader>
              jsx
            </NotesHeader>
            <List>
              <ListItem>
                preprocessor step which translates the jsx into a javascript function call which returns an object
              </ListItem>

              <ListItem>
                jsx doesn't separate technologies but concerns
              </ListItem>

              <ListItem>
                When you pass an attribute to a component, it's called a property or prop
              </ListItem>

              <ListItem>
              </ListItem>
            </List>
          </Notes>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>
            Html
          </Heading>

          <ComponentPlayground
            code={codeExamples.basicHtml}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>
            Dynamic Html Attributes in jsx
          </Heading>

          <ComponentPlayground
            code={codeExamples.intermediateHtml}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>
            JSX
          </Heading>

          <ComponentPlayground
            code={codeExamples.basicJSX}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>
            Handling lists
          </Heading>

          <ComponentPlayground
            code={codeExamples.listComponent}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>
            Handling events
          </Heading>

          <ComponentPlayground
            code={codeExamples.basicEventHandler}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>
            how to make react react
          </Heading>

          <List>
            <ListItem>
              props are compared
            </ListItem>
          </List>
        </Slide>


        <Slide transition={['fade']} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>
            Stateful components
          </Heading>

          <ComponentPlayground
            code={codeExamples.basicStatefulComponent}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>
            Fetching data on events
          </Heading>

          <ComponentPlayground
            code={codeExamples.dataFetchingOnClick}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>
            Fetching data on mount
          </Heading>

          <ComponentPlayground
            code={codeExamples.dataFetchingOnMount}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>
            Passing data to other components
          </Heading>

          <ComponentPlayground
            code={codeExamples.passingData}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>
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

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>
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
