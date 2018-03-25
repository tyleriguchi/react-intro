import React from 'react'

import { Heading } from 'spectacle'

export default class NotesHeader extends React.Component {
  render() {
    return (
      <Heading size={6} textColor="secondary">
        {this.props.children}
      </Heading>
    )
  }
}
