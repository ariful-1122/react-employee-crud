import React, { useState } from "react";
import AddEmployee from "./components/Employee/AddEmployee/AddEmployee";
import "./App.css";
import EmployeeList from "./components/Employee/EmployeeList/EmployeeList";

const App = () => {
  const Dummy_List = [
    {
      id: "one",
      name: "Ariful",
      age: 20,
      position: "Web Designer",
    },
    {
      id: "two",
      name: "Tariful",
      age: 20,
      position: "Web Designer",
    },
    {
      id: "three",
      name: "Rakibul",
      age: 20,
      position: "Web Designer",
    },
  ];

  const [employees, setEmployees] = useState(Dummy_List);

  const addHandler = (employee) => {
    setEmployees((prev) => {
      return [employee, ...prev];
    });
  };

  const deleteHandler = (id) => {
    setEmployees((prevEmp) => {
      const updated = prevEmp.filter((emp) => emp.id !== id);
      return updated;
    });
    console.log(id);
  };

  return (
    <>
      <div className="main-header">
        <h1>Employee Info</h1>
      </div>
      <AddEmployee onAddEmployee={addHandler} />
      <EmployeeList onDelete={deleteHandler} employees={employees} />
    </>
  );
};

export default App;
