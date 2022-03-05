import React, { Component } from 'react'

export default class Button extends Component {
    constructor(props){
        super(props);
    }
  render() {
      const {children,clickHandler} = this.props
    return (
      <button onClick={clickHandler}>{children}</button>
    )
  }
}
