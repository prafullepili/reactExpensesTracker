import React, {useState} from "react";

import "./ExpenseForm.css";


const ExpenseForm = ({onSaveExpenseData,closeEditing}) => {

    // const [userInput,setUserInput] = useState({
    //     enteredTitle : '',
    //     enteredAmount : '',
    //     enteredDate : ''
    // })

    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredAmount,setEnteredAmount] = useState('');
    const [enteredDate,setEnteredDate] = useState('');


    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title : enteredTitle,
            amount : +enteredAmount, /** why +?-> becouse without + '23'+'22' = '2322' chart are miss behave*/
            date : new Date(enteredDate)
        }
        onSaveExpenseData(expenseData); //function from NewExpense.jsx (saveExpenseDataHandler)
        // setEnteredAmount('');
        // setEnteredTitle('');
        // setEnteredDate('');
    }

    return (<form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label htmlFor="">Title</label>
                <input type="text" onChange={titleChangeHandler} value={enteredTitle} />
            </div>

            <div className="new-expense__control">
                <label htmlFor="">Amount</label>
                <input type="number" min="0.01" step="0.01"  onChange={amountChangeHandler} value={enteredAmount}  />
            </div>
            <div className="new-expense__control">
                <label htmlFor="">Date</label>
                <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="button" onClick={closeEditing}>Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
    </form>
    )
}

export default ExpenseForm;