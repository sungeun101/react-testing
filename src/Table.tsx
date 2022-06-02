import React from "react";
import { IEmployee } from "./App";

const Table = (props: { employees: IEmployee[] }) => {
  const { employees } = props;
  return (
    <table className="table table-striped">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Department</th>
          <th scope="col">Title</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => {
          return (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.department}</td>
              <td>{employee.title}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
