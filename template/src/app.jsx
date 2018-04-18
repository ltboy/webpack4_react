import React, { Component } from 'react'

import Test from './test.jsx'

class App extends Component {
  constructor(props) {
    super(props)
  }
  a = () => {
    console.log(12321)
  }
  render() {
    return (
      <div>
        <p>react</p>
        <Test text="这是测试的文字" />
      </div>
    )
  }
}

export default App
