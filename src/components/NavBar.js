import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import { Link, withRouter } from 'react-router-dom';


export default class Nav extends React.Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary>
      <Menu.Item
        name='home'
        as={Link}
        to='/home' />
      <Menu.Item
        name='Add Feeling'
        as={Link}
        to='/new_feeling' />
      <Menu.Item
        name='Previous Feelings'
        as={Link}
        to='/feelings' />
      </Menu>
    )
  }
}
