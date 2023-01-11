import React, { useState } from "react";

import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";


const NewExpense = ({onSaveAddExpense}) => {
    const [isEditing,setisEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString().split(".")[1]
        }
        onSaveAddExpense(expenseData); //executing on App.js
        setisEditing(true)
    }
  
    const startEditingHandler = () => {
        setisEditing((prevState) => !prevState)
    }
    return <div className="new-expense">
        {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
        {isEditing && <ExpenseForm 
                closeEditing ={startEditingHandler} 
                onSaveExpenseData={saveExpenseDataHandler}/>}
    </div>
}

export default NewExpense;