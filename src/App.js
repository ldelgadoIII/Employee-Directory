import React, { Component } from 'react';
import axios from "axios";
import './App.css';
import EmployeeTable from "./components/EmployeeTable"

class App extends Component {
  state = {
    persons: []
  }

  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = async () => {
    const { data } = await axios.get("https://randomuser.me/api/?results=10")
  
    this.setState({ persons: data.results })
  }

  render() {
    return (
      <div>
        <h1>Employee Database</h1>
        <h2>Search Bar</h2>
        <EmployeeTable>
          {this.state.persons.map((person, index) => {
            return (
              <tr key={index}>
                <th scope="row"><img src={person.picture.thumbnail} alt="thumbnail"/></th>
                <td>{person.name.first}</td>
                <td>{person.name.last}</td>
                <td>{person.phone}</td>
                <td>{person.email}</td>
                <td>{person.dob.date}</td>
              </tr> 
            )} 
          )}
        </EmployeeTable>      
        {console.log(this.state.persons)}
      </div>
    )
  }
}


export default App;
