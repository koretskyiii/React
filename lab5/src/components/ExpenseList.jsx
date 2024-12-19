import React from "react"
import { useStore } from "effector-react"
import { $filteredExpenses, removeExpenses } from "../store"    

const ExpenseList = () => {
    const expenses = useStore($filteredExpenses)

    const handleRemove = (id) => {
        removeExpenses(id)
    }

    return (
        <>
            <h2>Expenses</h2>
            {expenses.map(expense => (
                <div key={expense.id}>
                    <span>{expense.description}</span>
                    <span>{expense.category}</span>
                    <span>{expense.amount}</span>
                    <button onClick={() => handleRemove(expense.id)}>Remove</button>
                </div>
            ))}
        </>
    )
}
export default ExpenseList