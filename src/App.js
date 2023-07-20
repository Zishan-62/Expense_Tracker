// import ExpenseItem from "./components/ExpenseItem";
import Expenses  from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const expenses = [
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
const addExpenseHandler=expense=>{
  console.log(expense)
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
