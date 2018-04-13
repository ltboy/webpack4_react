import React, { Component } from 'react'
import Styled from 'styled-components'

class Test extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <Text>{this.props.text}</Text>
  }
}

const Text = Styled.div`
  color:red;
  display:flex;
`

export default Test
