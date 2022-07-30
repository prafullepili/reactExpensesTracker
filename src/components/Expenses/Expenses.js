import Card from '../UI/Card.js';
import ExpenseItem from './ExpenseItem.js';

import "./Expenses.css"
import ExpensesFilter from '../NewExpense/ExpensesFilter.js';
import { useState } from 'react';


const Expenses = (props) => {
    const [filteredYear, setfilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setfilteredYear(selectedYear)
    }

    const filteredExpenses = props.items.filter(expense =>
        expense.date.getFullYear().toString() === filteredYear)

    let expensesContentWithFilter = <p>No expenses found.</p>;

    if (filteredExpenses.length > 0) {
        expensesContentWithFilter = filteredExpenses.map((expense) =>
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />)
    }
    return <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFileter={filterChangeHandler} />
        {expensesContentWithFilter}
    </Card>
}

export default Expenses;