import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Cards";
import React, {useState} from "react";
// const ExpenseDate=Date(2023,6,28)
// const ExpenseDesc='Car Insurance'
// const ExpensePrice=6000
// We can use any name for arugment eg props or data
function ExpenseItem(props) {
  // let title=props.title
  const [title,setTitle]=useState(props.title)
 const eventHandler=()=>{
  setTitle("Updated")
  console.log(title)
 }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">RS {props.price}</div>
        <button onClick={eventHandler}>Change title</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
