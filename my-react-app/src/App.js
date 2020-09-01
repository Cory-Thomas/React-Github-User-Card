import React from 'react';
import './App.css';
import axios from "axios";
import User from './Components/User';
import Followers from './Components/Followers';

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
        this.setState({ user: response.data });
        axios.get("https://api.github.com/users/Cory-Thomas/followers")
          .then(response => {
            this.setState({
              userFollowers: response.data
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
        <User />
        <Followers />
      </div>
    );
  }
}
