import { useState } from 'react';
import ExpensesFilter from '../NewExpense/ExpensesFilter.js';
import ExpensesList from './ExpensesList.js';

import "./Expenses.css"
import Card from '../UI/Card.js';
import ExpensesChart from './ExpensesChart.js';


const Expenses = (props) => {
    const [filteredYear, setfilteredYear] = useState(new Date().getFullYear().toString());
    const [isChartOnOff, setChartOnOff] = useState(true);

    const chartOnOffHandler = () => {
        setChartOnOff((prevState) => !prevState)
    }
    const filterChangeHandler = selectedYearTemp => {
        setfilteredYear(selectedYearTemp)
    }

    const filteredExpenses = props.items.filter(expense =>
        expense.date.getFullYear().toString() === filteredYear)


    return <Card className='expenses'>
        <ExpensesFilter
            chartOnOffHandler={chartOnOffHandler}
            selectedYear={filteredYear}
            onChangeFileter={filterChangeHandler}
            isChartOnOff={isChartOnOff}
        />
        {isChartOnOff && <ExpensesChart expenses={filteredExpenses} />}
        <ExpensesList filteredExpenses={filteredExpenses} />
    </Card>
}

export default Expenses;