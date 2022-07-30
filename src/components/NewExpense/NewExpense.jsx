import React from "react";

import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";


const NewExpense = ({onSaveAddExpense}) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString().split(".")[1]
        }
        onSaveAddExpense(expenseData);
        
    }

    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
}

export default NewExpense;