import './index';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
// import ExpensesFilter from './components/NewExpense/ExpensesFilter';
import { useState } from 'react';

const App = () => {
  const dummyData = [
    { id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14) },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    { id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28) },
    { id: 'e4', title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 9, 12) },
  ]
  const [expenses, setExpenses] = useState(dummyData);


  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return {
        ...prevExpense,
        ...expense
      }
    }
    )
  }
  return (
    <div className="App">
      <NewExpense onSaveAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
