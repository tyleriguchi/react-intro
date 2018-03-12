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
