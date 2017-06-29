import React, { Component, PropTypes } from 'react';
import fetchUser from 'twitter';
// takes in a username and returns a promise
// which will resolve with that username's data

class Twitter extends Component {
  state = {
    user: null,
  }

  static propTypes = {
    username: PropTypes.string.isRequired,
  }

  componentDidMount(){
    fetchUser(this.props.username)
      .then((user) => this.setState({user}))
  }

  render() {
    return this.props.children(this.state.user)
  }
}
