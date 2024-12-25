import { createEvent, createStore, sample } from 'effector'

export const addExpense = createEvent();
export const editExpense = createEvent();
export const removeExpense = createEvent();
export const setFilter = createEvent();

const initialExpenses = []
const initialFilter = "all"

const $expences = createStore(initialExpenses)
.on(
  addExpense, (state, expense) => [...state, expense]
)
.on(editExpense, (state, updatedExpense) => {
  return state.map(expense => (
    expense.id === updatedExpense.id ? {...expense, ...updatedExpense}: expense
  ))
})
.on(removeExpense, (state, id) => state.filter(expense => expense.id !== id))

export const $filter = createStore(initialFilter).on(setFilter, (_, category) => category)

export const $filteredExpenses = createStore(initialExpenses)

sample({
  source: {expences : $expences, filter: $filter},
  clock: [setFilter, editExpense, addExpense, removeExpense],
  fn: ({expences, filter}) => 
    {
      if (filter == "all")
        return expences.map(expense => expense)

      return expences.filter(expense => expense.category === filter)
    },
    target: $filteredExpenses
})
addExpense.watch(expense => console.log('expense added', expense))
removeExpense.watch(expense => console.log('expense removed', expense))
editExpense.watch(expense => console.log('expense edited', expense))
setFilter.watch(expense => console.log('filter changed', expense))

export const $totalAmount = $expences.map(expences => expences.reduce((total, expense) => total + expense.amount, 0))
export const $totalFunds = $expences.map(expences => expences.reduce((total, expense) => total + expense.funds * expense.amount, 0))
