import React from 'react';
import "./ExpensesFilter.css";

const ExpensesFilter = ({ chartOnOffHandler, onChangeFileter, selectedYear, isChartOnOff }) => {

    const dropdownChangeHandler = (event) => {
        onChangeFileter(event.target.value);
    }
    const currentYear = new Date().getFullYear();

    //date options generator
    let datesOptions = [];
    for (let date = currentYear; date >= currentYear - 5; date--) {
        datesOptions.push(<option value={date} key={date}>{date}</option>)
    }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year <button type='button' onClick={chartOnOffHandler}>{isChartOnOff ? 'Hide chart' : 'Show chart'}</button></label>
                <select value={selectedYear} onChange={dropdownChangeHandler}>
                    {datesOptions}
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;