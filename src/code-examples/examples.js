export const jsExample =  `
  class MyObject extends OtherObject {
    constructor(str) {
      super()

      this.str = str
    }

    myMethod() {
      console.log(\`hey \${str}\`)
    }
  }

  const myObject = new MyObject('snap')
  myObject.myMethod()

  // "hey snap"
`

export const rubyExample = `
  class MyObject < OtherObject
    def initialize(str)
      super

      @str = str
    end

    def my_method
      puts "#{@str}"
    end
  end

  myObject = MyObject.new 'snap'
  myObject.my_method

  # "hey snap"
`

export const classExample = {
  jsExample,
  rubyExample
}

export const importExample = `
  // my-module.js
  export const namedExport = "Jon Snow"
  export default "Arnold"

  // consuming file

  import MyModule, { namedExport } from './my-module'
`

export const arrowExample = `
  var myFunc = function() {
    return 'hey snap'
  }.bind(this)

  const myFunc = () => {
    return 'hey snap'
  }

  const myFunc = () => 'hey snap'
`

export const constExample = `
  var x = 1;

  if (x === 1) {
    var x = 2;

    console.log(x);
    // 2
  }

  console.log(x);
  // 2

  const x = 1;

  if (x === 1) {
    const x = 2;

    console.log(x);
    // 2
  }

  console.log(x);
  // 1
`

export const letExample = `
  let x

  if (someValue) {
    x = someValue()
  }
  else {
    x = someOtherValue()
  }
`

export const spreadExample = `
  const doloresHost = {
    name: 'dolores',
    status: 'alive'
  }

  const update = {
    status: 'dead'
  }

  const newObj = Object.assign({}, doloresHost, update)
  // { name: 'dolores', status: 'dead'}

  const spreadObj = { ...doloresHost, ...update}
  // { name: 'dolores', status: 'dead'}
`

export const destructureExample = `
  const doloresHost = {
    name: 'dolores',
    status: 'alive'
  }

  const status = oldObject.status

  const { status } = oldObject
`

export const interpolationExample = `
  "www.giphy.com/search=" + search
  \`www.giphy.com/search=\${search}\`
`

export const argsExample = `
  function myFunc (str) {
    console.log(str || 'hey snap')
  }

  function myFunc (str = 'hey snap') {
    console.log(str)
  }

  function myFunc (obj = {foo: "hey snap"}) {
    console.log(obj.foo)
  }
`

export const basicHtml = `
  const styles = {
    color: 'magenta',
    fontSize: '32px',
    fontWeight: 'bold'
  }

  render(
    <div
      className='my-class-name'
      style={styles}
    >
      <h1>Hey Snap</h1>
    </div>
  )
`

export const intermediateHtml = `
  const styles = {
    color: 'magenta',
    fontSize: '32px',
    fontWeight: 'bold'
  }

  const someConditional = true

  const imageSrc = "https://www.fillmurray.com/400/300"

  render(
    <div
      className={ someConditional ? 'my-class-name' : ''}
      style={styles}
    >
      <h1>Hey Snap</h1>
      <img
        src={imageSrc}
        alt='bill effin murray'
      />
    </div>
  )
`
export const basicJSX = `
// const SnapButton = (props) => {
//  const { text } = props

const SnapButton = ({text}) => {
  return (
    <button type="button">
      Hey {text}
    </button>
  )
}

render(
  <SnapButton text="Snap" />
);
`

export const basicEventHandler = `
const SnapButton = ({text}) => {
  const handleEvent = (e) => {
    alert("you clicked the button")
  }

  return (
    <button
      onClick={handleEvent}
    >
      Hey {text}
    </button>
  )
}

render(
  <SnapButton text="Snap" />
);
`

export const basicStatefulComponent = `
const buttonStyle = {
  color: 'white',
  backgroundColor: 'rebeccapurple',
  padding: '8px 15px',
  border: '1px solid rebeccapurple',
  fontSize: '1.2rem',
  borderRadius: '5px',
  outline: 'none',
  cursor: 'pointer'
}

class Counter extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    this.setState({
      counter: this.state.counter += 1
    })
  }

  render() {
    // const text = this.props.text
    // const counter = this.state.counter

    const { text } = this.props
    const { counter } = this.state

    return (
      <div>
        <button
          style={buttonStyle}
          onClick={this.handleClick}>
          {text}
        </button>
        <div style={{
          marginTop: '20px',
          color: 'rebeccapurple',
          fontSize: '3rem'
        }}>
          {counter}
        </div>
      </div>
    )
  }
}


render(
  <Counter text="click here" />
);
`

export const listComponent = `
const data = [
  {
    name: 'Snap',
    color: 'lightblue'
  },
  {
    name: 'Tyler',
    color: 'indigo'
  },
  {
    name: 'Arnold',
    color: 'fuschia'
  }
]

const ListComponent = ({data}) => {
  return (
    <ul style={{listStyle: 'none'}}>
      {data.map( (item) => {
        return (
          <li
            key={item.name}
            style={{
              padding: '10px',
              fontSize: '1.5em',
              color: item.color
            }}
          >
            {item.name}
          </li>
        )
      })}
    </ul>
  )
}
render(
  <ListComponent data={data} />
)
`

export const dataFetchingOnClick = `
const data = [
  {
    name: 'Snap',
    color: 'lightblue'
  },
  {
    name: 'Tyler',
    color: 'indigo'
  },
  {
    name: 'Arnold',
    color: 'fuschia'
  }
]

const fetch = (url) => {
  return new Promise( (resolve) => {
    setTimeout( () => {
      resolve(data)
    }, 1000)
  })
}

const Loading = ({isLoading}) => {
  if (!isLoading) { return null }

  return (
    <div style={{marginTop: '20px'}}>
      Loading...
    </div>
  )
}

class DataList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      loading: false
    }

    this.loadData = this.loadData.bind(this)
  }

  loadData(e) {
    this.setState({
      loading: true
    })

    fetch().then( data => {
      this.setState({
        // data: data
        data,
        loading: false
      })
    })
  }

  render() {
    const { data, loading } = this.state

    return (
      <div>
        <button
          onClick={this.loadData}
        >
          Load Data
        </button>

        <Loading isLoading={loading} />
        <ul style={{listStyle: 'none', paddingLeft: 0}}>
          {data.map( (item) => {
            return (
              <li
                key={item.name}
                style={{
                  padding: '10px',
                  fontSize: '1.5em',
                  color: item.color
                }}
              >
                {item.name}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

render(
  <DataList />
)
`

export const dataFetchingOnMount = `
const data = [
  {
    name: 'Snap',
    color: 'lightblue'
  },
  {
    name: 'Tyler',
    color: 'indigo'
  },
  {
    name: 'Arnold',
    color: 'fuschia'
  }
]

const fetch = (url) => {
  return new Promise( (resolve) => {
    setTimeout( () => {
      resolve(data)
    }, 3000)
  })
}

class DataList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      loading: true
    }
  }

  componentDidMount() {
    fetch('some-url.com').then( data => {
      this.setState({
        // data: data
        data,
        loading: false,
      })
    })
  }

  render() {
    const { data, loading } = this.state

    if (loading) {
      return (
        <div>
          Loading...
        </div>
      )
    }

    return (
      <ul style={{listStyle: 'none'}}>
        {data.map( (item) => {
          return (
            <li
              key={item.name}
              style={{
                padding: '10px',
                fontSize: '1.5em',
                color: item.color
              }}
            >
              {item.name}
            </li>
          )
        })}
      </ul>
    )
  }
}

render(
  <DataList />
)
`

export const passingData = `
const data = [
  {
    name: 'Snap',
    color: 'lightblue'
  },
  {
    name: 'Tyler',
    color: 'indigo'
  },
  {
    name: 'Arnold',
    color: 'fuschia'
  }
]

const fetch = (url) => {
  return new Promise( (resolve) => {
    setTimeout( () => {
      resolve(data)
    }, 3000)
  })
}

const ListComponent = ({data}) => {
  return (
    <ul style={{listStyle: 'none'}}>
      {data.map( (item) => {
        return (
          <li
            key={item.name}
            style={{
              padding: '10px',
              fontSize: '1.5em',
              color: item.color
            }}
          >
            {item.name}
          </li>
        )
      })}
    </ul>
  )
}

class FetchListData extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      loading: true
    }
  }

  componentDidMount() {
    fetch('some-url.com').then( data => {
      this.setState({
        // data: data
        data,
        loading: false,
      })
    })
  }

  render() {
    const { data, loading } = this.state

    if (loading) {
      return (
        <div>
          Loading...
        </div>
      )
    }

    return (
      <ListComponent data={data} />
    )
  }
}

render(
  <FetchListData />
)
`
