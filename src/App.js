import React, { Component } from 'react';
import axios from "axios";
import './App.css';

class App extends Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get("https://randomuser.me/api/?results=10")
      .then(res => this.setState({persons: res.data.results}))
  }

  render() {
    return (
      <div>
        <h1>Employee Database</h1>
        <ul>
          {this.state.persons.map((person) => 
           <li>
             {person.name.first}
           </li> 
          )}
        </ul>
        {console.log(this.state.persons)}
      </div>
    )
  }
}


export default App;