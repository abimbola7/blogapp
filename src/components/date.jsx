"use client"
import React from 'react'

const DateTime = () => {
  const days  = [
    { id :0, day : "Monday" },
    { id :1, day : "Tuesday" },
    { id :2, day : "Wednesday" },
    { id :3, day : "Thursday" },
    { id :4, day : "Friday" },
    { id :5, day : "Saturday" },
    { id :6, day : "Sunday" },
  ]

  const date = new Date()
  const month = date.toLocaleString("en-US", {month:"long"})
  const day = date.toLocaleString("en-US", {day:"2-digit"})
  const dates =  date.getDay()
  const year = date.getFullYear()
  console.log(month, day, year, dates)
  
  const dateHandler = (dates) => {
    const foundDay = days.find(day=>day.id  === dates);
    if (foundDay) {
      return foundDay.day
    }
  }
  const weekDays  = dateHandler(dates)
  console.log(weekDays)
  
  return (
    <div className='flex font-light text-darkGray'>
      <span className='pb-4 text-lg font-light uppercase border-b border-black'>{weekDays}</span>
      <div className='flex pb-4 space-x-2 border-b border-[rgba(171, 171, 171)]'>
        <span className='ml-2 text-lg font-light uppercase'>{day}</span>
        <span className='text-lg font-light uppercase'>{month}</span>
        <span className='text-lg font-light uppercase'>{year}</span>
      </div>
    </div>
  )
}

export default DateTime