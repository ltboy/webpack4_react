import React, { Component } from 'react'

import Test from './test.jsx'

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <p>react</p>
        <Test text="这是测试的文字 测试内容styled" />
      </div>
    )
  }
}

export default App
