import React, { useState } from 'react'
import './App.css'
import DrinkSearch from './DrinkSearch'
import EmployeeEmail from './EmployeeEmail'
import Jumbotron from './Jumbotron'
import Table from './Table'
import Vote from './Vote'

export interface IEmployee {
  id: number
  name: string
  department: string
  title: string
}

const employees: IEmployee[] = [
  {
    id: 1,
    name: 'John Smith',
    department: 'Sales',
    title: 'Senior Sales Agent'
  },
  {
    id: 2,
    name: 'Sarah Jenkins',
    department: 'Engineering',
    title: 'Senior Full-Stack Engineer'
  }
]

function App() {
  return (
    <div className="App">
      <Jumbotron />
      <Vote />
      <DrinkSearch />
      <Table employees={employees} />
      <EmployeeEmail />
    </div>
  )
}

export default App
