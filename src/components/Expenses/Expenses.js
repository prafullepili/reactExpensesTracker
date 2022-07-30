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

    return <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFileter={filterChangeHandler} />
        {props.items.map((expense) =>
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />)
        }
    </Card>
}

export default Expenses;