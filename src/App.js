// import ExpenseItem from "./components/ExpenseItem";
import Expenses  from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React,{useState} from "react";

const DummyExpense = [
  {
    title: "Car Insurances",
    price: 6000,
    date:new Date(2023, 6, 28),
  },
  {
    title: "Car Insurances",
    price: 1457,
    date:new  Date(2023, 6, 28),
  },
  {
    title: "Car Insurances",
    price: 8500,
    date: new Date(2023, 6, 28),
  },
  {
    title: "Car Insurances",
    price: 4000,
    date: new Date(2023, 6, 28),
  },
];
function App() {
 const [expenses,setExpenses]= useState(DummyExpense)
const addExpenseHandler=expense=>{
  console.log(expense)
  setExpenses((prevExpenses)=>{
    return [expense,...prevExpenses]
  })
}


  return (
    <div>
      {/* <h2>Let's get started!</h2> */}
      <NewExpense onAddExpense={addExpenseHandler}/>
     <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
