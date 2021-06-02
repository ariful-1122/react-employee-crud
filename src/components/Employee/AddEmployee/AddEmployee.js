import React, { useState } from "react";
import Button from "../../UI/Button";
import Card from "../../UI/Card";
import classes from "./AddEmployee.module.css";
import ErrorModal from "../../UI/ErrorModal";

const AddEmployee = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [enteredPostion, setEnteredPostion] = useState("");
  const [isInvalid, setIsInvalid] = useState();

  const addHandler = (e) => {
    e.preventDefault();
    if (
      enteredName.trim().length === 0 ||
      enteredAge.trim().length === 0 ||
      enteredAge.trim().length > 3 ||
      enteredPostion.trim().length === 0 ||
      enteredAge < 0
    ) {
      setIsInvalid({
        title: "Invalid Input",
        message: "Please Enter all Valid Input",
      });
      return;
    }
    console.log(enteredName, enteredAge, enteredPostion);
    props.onAddEmployee({
      name: enteredName,
      age: enteredAge,
      position: enteredPostion,
      id: Math.random().toString(),
    });

    setEnteredName("");
    setEnteredAge("");
    setEnteredPostion("");
  };

  const errroHandler = () => {
    setIsInvalid(false);
  };

  return (
    <>
      {isInvalid && (
        <ErrorModal
          title={isInvalid.title}
          message={isInvalid.message}
          onConfirm={errroHandler}
        />
      )}
      <Card className={classes.wrapper}>
        <form className={classes.form} onSubmit={addHandler}>
          <div
            className={`${classes.form_controls} ${
              isInvalid && classes.invalid
            }`}
          >
            <label htmlFor="name">Employee Name</label>
            <input
              id="name"
              value={enteredName}
              onChange={(e) => setEnteredName(e.target.value)}
              type="text"
            />
          </div>
          <div
            className={`${classes.form_controls} ${
              isInvalid && classes.invalid
            }`}
          >
            <label htmlFor="age">Employee Age</label>
            <input
              id="age"
              value={enteredAge}
              onChange={(e) => setEnteredAge(e.target.value)}
              type="number"
            />
          </div>

          <div
            className={`${classes.form_controls} ${
              isInvalid && classes.invalid
            }`}
          >
            <label htmlFor="position">Employee Position</label>
            <select
              id="position"
              value={enteredPostion}
              onChange={(e) => setEnteredPostion(e.target.value)}
            >
              <option>Select Position</option>
              <option value="CEO">CEO</option>
              <option value="Graphic Desiner">Graphic Desiner</option>
              <option value="Web Desiner">Web Desiner</option>
              <option value="Web Developer">Web Developer</option>
              <option value="Software Developer">Software Developer</option>
              <option value="FullStack Developer">FullStack Developer</option>
            </select>
          </div>

          <div className={classes.form_controls}>
            <Button type="submit">Add Employee</Button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default AddEmployee;
