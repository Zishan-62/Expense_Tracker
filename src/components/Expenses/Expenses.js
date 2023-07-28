import Card from "../UI/Cards";
import React, { useState } from "react";

import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });


  // let expenseContent=<p>No expenses found.</p>
  
  return (
    
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {/* {filteredExpenses.length===0 &&<p>No expenses found.</p>}
      {filteredExpenses.length > 0 && (
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            price={expense.price}
            date={expense.date}
          />
        ))
      )} */}
<ExpenseList items={filteredExpenses}/>
      {/* <ExpenseItem
        title = {props.items[0].title}
        price = {props.items[0].price}
        date = {props.items[0].date}
      ></ExpenseItem> */}
    </Card>
  );
}
export default Expenses;
