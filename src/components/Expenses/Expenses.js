import { useState } from 'react';
import ExpensesFilter from '../NewExpense/ExpensesFilter.js';
import ExpensesList from './ExpensesList.js';

import "./Expenses.css"
import Card from '../UI/Card.js';


const Expenses = (props) => {
    const [filteredYear, setfilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setfilteredYear(selectedYear)
    }

    const filteredExpenses = props.items.filter(expense =>
        expense.date.getFullYear().toString() === filteredYear)


    return <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFileter={filterChangeHandler} />
        <ExpensesList filteredExpenses={filteredExpenses} />
    </Card>
}

export default Expenses;