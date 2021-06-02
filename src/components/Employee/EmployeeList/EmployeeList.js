import React from "react";
import Card from "../../UI/Card";
import classes from "./EmployeeList.module.css";

const EmployeeList = (props) => {
  const deleteEmployee = (props) => {
    props.onDelete(props.employees.map((emp) => emp.id));
  };

  return (
    <div>
      {props.employees.map((employee) => (
        <Card key={employee.id} className={classes.list_wrapper}>
          <div>{employee.name}</div>
          <div>{employee.age} (Years old)</div>
          <div className="position"> {employee.position} </div>
          <div className={classes.actions}>
            <p title="Edit">
              <img src="/images/icons/35-edit-outline.gif" alt="" />
            </p>
            <p title="Delete" onClick={() => props.onDelete(employee.id)}>
              <img src="/images/icons/185-trash-bin-outline.gif" alt="" />
            </p>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default EmployeeList;
