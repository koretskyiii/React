import { createEvent, createStore } from 'effector'

const addExpense = createEvent();
const editExpense = createEvent();
export const removeExpense = createEvent();
const setFilter = createEvent();

const initialExpenses = []
const initialFilter = "all"

const $expences = createStore(initialExpenses)
.on(
  addExpense, (state, expense) => [...state, expense]
)
.on(editExpense, (state, updatedExpense) => {
  state.map(expense => (
    expense.id === updatedExpense.id ? updatedExpense : expense
  ))
})
.on(removeExpense, (state, id) => state.filter(expense => expense.id !== id))

$filter = createStore(initialFilter).on(setFilter, (_, category) => category)

export const $filteredExpenses = $expences.map((expences) => {
  const filter = $filter.getState()
  if (filter === "all") {
    return expences
  }
  return expences.filter(expense => expense.category === filter)
})

const $totalAmount = $expences.map(expences => expences.reduce((total, expense) => total + expense.amount, 0))