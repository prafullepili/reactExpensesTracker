import React from "react";

import Chart from "../Chart/Chart";

const ExpensesChart = ({ expenses }) => {
    //expenses comming from Expenses.js
    const chartDataPoints = [
        { label: 'Jan', monthCost: 0 },
        { label: 'Feb', monthCost: 0 },
        { label: 'Mar', monthCost: 0 },
        { label: 'Apr', monthCost: 0 },
        { label: 'May', monthCost: 0 },
        { label: 'Jun', monthCost: 0 },
        { label: 'Jul', monthCost: 0 },
        { label: 'Aug', monthCost: 0 },
        { label: 'Sep', monthCost: 0 },
        { label: 'Oct', monthCost: 0 },
        { label: 'Nov', monthCost: 0 },
        { label: 'Dec', monthCost: 0 },
    ];

    for (const expense of expenses) {
        const expenseMonth = expense.date.getMonth(); /*It return expenseMonth as Index of chartDataPoints array */
        chartDataPoints[expenseMonth].monthCost += expense.amount /** It get all expense by month and store as total expense of month */
    }

    return <Chart dataPoints={chartDataPoints} />
}

export default ExpensesChart;