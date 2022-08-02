import './index';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
import { useState } from 'react';

const App = () => {
  const dummyData = [
    { id: 'e1', title: 'Keyboard', amount: 300, date: new Date(2022, 0, 12) },
    { id: 'e2', title: 'Keyboard1', amount: 400, date: new Date(2022, 1, 12) },
    { id: 'e3', title: 'New TV', amount: 799.49, date: new Date(2022, 2, 12) },
    { id: 'e4', title: 'Mouse', amount: 500, date: new Date(2022, 3, 12) },
    { id: 'e5', title: 'TouchPad', amount: 700, date: new Date(2022, 4, 12) },
    { id: 'e6', title: 'Toilet Paper', amount: 94.12, date: new Date(2022, 5, 14) },
    { id: 'e7', title: 'Car Insurance', amount: 294.67, date: new Date(2022, 6, 28) },
    { id: 'e8', title: 'New Desk (Wooden)', amount: 450, date: new Date(2022, 7, 12) },
    { id: 'e9', title: 'phone', amount: 1000, date: new Date(2022, 8, 12) },
  ]
  const [expenses, setExpenses] = useState(dummyData);


  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    })
  }
  return (
    <div className="App">
      <NewExpense onSaveAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
