import React from 'react'
import './App.css'
import DrinkSearch from './DrinkSearch'
import EmployeeEmail from './EmployeeEmail'
import Jumbotron from './Jumbotron'
import Table from './Table'
import VoteBtn from './VoteBtn'

export interface IEmployee {
  id: number
  name: string
  department: string
  title: string
}

function App() {
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

  return (
    <div className="App">
      {/* <VoteBtn
        handleVote={stubHandleVote}
        hasVoted={false}
        stubText={stubText}
      /> */}
      <Jumbotron />
      <DrinkSearch />
      <Table employees={employees} />
      <EmployeeEmail />
    </div>
  )
}

export default App
