import React, { useState } from 'react'
import './App.css'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'

const DUMMY_EXPENSES = [    
  {id:'1', date: new Date(2022, 7, 15), title:'Insurance', price: 100},
  {id:'2', date: new Date(2023, 3, 25), title:'Book', price: 10},
  {id:'3', date: new Date(2024, 10, 11), title:'Pen', price: 1},
  {id:'4', date: new Date(2023, 1, 15), title:'Laptop', price: 200}
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses} />
    </div>
  )
}

export default App
