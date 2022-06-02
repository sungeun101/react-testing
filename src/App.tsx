import React from "react";
import "./App.css";
import Jumbotron from "./Jumbotron";
import Table from "./Table";

export interface IEmployee {
  id: number;
  name: string;
  department: string;
  title: string;
}

function App() {
  const employees: IEmployee[] = [
    {
      id: 1,
      name: "John Smith",
      department: "Sales",
      title: "Senior Sales Agent",
    },
    {
      id: 2,
      name: "Sarah Jenkins",
      department: "Engineering",
      title: "Senior Full-Stack Engineer",
    },
  ];

  return (
    <div className="App">
      <Jumbotron />
      <Table employees={employees} />
    </div>
  );
}

export default App;
