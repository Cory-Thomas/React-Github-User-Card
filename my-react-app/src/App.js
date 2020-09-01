import React from 'react';
import './App.css';
import axios from "axios";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      userFollowers: [],
    };
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/users/cory-thomas')
      .then(response => {
        console.log(response.data)
        this.setState({ user: response.data });
        axios.get("https://api.github.com/users/Cory-Thomas/followers")
          .then(response => {
            console.log(response.data)
            response.data.forEach(follower => {
              this.setState({
                      userFollowers: response.data
                    })
            })
          })
          .catch(error => {
            console.log(error)
          })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return (
      <div>
        hey
        {/* <RootUser user={this.state.user} />
        <FollowerList followers={this.state.followers} /> */}
      </div>
    );
  }
}
