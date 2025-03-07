import React from 'react'
import './ExpenseDate.css'

const months = [
    "January",
    "Febrary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const ExpenseDate = (props) => {
 
  const month= months[props.date.getMonth()];
  const year= props.date.getFullYear();
  const date= props.date.getDate();  

  return (
    <div className='expense-date'>
        <div className='expense-date__month'>{month}</div>
        <div className='expense-date__year'>{year}</div>
        <div className='expense-date__day'>{date} </div>     
    </div>
  )
}

export default ExpenseDate


