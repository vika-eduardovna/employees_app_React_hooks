import React from "react";
import './app.css'
import AppInfo from "../app-info";
import SearchPanel from "../search-panel";
import AppFilter from "../app-filter";
import EmployeesList from "../employees-list";
import EmployeesAddForm from "../add-form";
import {data} from '../../components/data/index'

function App() {
  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel/>
        <AppFilter/>
      </div>

      <EmployeesList data={data}/>
      <EmployeesAddForm/>
    </div>
  );
}

export default App;
