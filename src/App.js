import './index';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
import { useState } from 'react';

const App = () => {
  const dummyData = [
    { id: 'e1', title: 'Keyboard', amount: 30, date: new Date(2023, 0, 12) },
    { id: 'e2', title: 'Keyboard1', amount: 40, date: new Date(2023, 1, 12) },
    { id: 'e3', title: 'New TV', amount: 799.49, date: new Date(2023, 2, 12) },
    { id: 'e4', title: 'Mouse', amount: 50, date: new Date(2023, 3, 12) },
    { id: 'e5', title: 'TouchPad', amount: 70, date: new Date(2023, 4, 12) },
    { id: 'e6', title: 'Toilet Paper', amount: 94.12, date: new Date(2023, 5, 14) },
    { id: 'e7', title: 'Car Insurance', amount: 294.67, date: new Date(2023, 6, 28) },
    { id: 'e8', title: 'New Desk (Wooden)', amount: 450, date: new Date(2023, 7, 12) },
    { id: 'e9', title: 'phone', amount: 1, date: new Date(2023, 8, 12) },
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
