import React, { useState } from 'react'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter'
import Card from '../UI/Card'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022');

  const changeFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.expenses.filter((expense)=>{
    return expense.date.getFullYear().toString() === filteredYear;
  })

  return (
    <Card className='expenses'>
      <ExpensesFilter 
        selected={filteredYear} 
        onChangeFilter={changeFilterHandler}
      />
      <ExpensesChart filteredExpensesForChart={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}/>
    </Card>
  )
}

export default Expenses
