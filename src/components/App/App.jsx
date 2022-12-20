import React, { Component } from "react";
import AppInfo from "../app-info";
import SearchPanel from "../search-panel";
import AppFilter from "../app-filter";
import EmployeesList from "../employees-list";
import EmployeesAddForm from "../add-form";
import { data } from '../../components/data/index'
import './app.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    }
  }

  onDelete = id => {
    this.setState(({ data }) => {
      return {
        data: data.filter(elem => elem.id !== id)
      }
    })
  }

  addEmployee = (first_name, last_name, salary) => {
    const newItem = {
      first_name,
      last_name,
      salary,
      increase: false,
      id: Date.now()
    }
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr
      }
    });
  }

  render() {
    return (
      <div className="app">
        <AppInfo />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList data={this.state.data} onDelete={this.onDelete} />
        <EmployeesAddForm addEmployee={this.addEmployee.bind(this)} />
      </div>
    );
  }
}

export default App;
