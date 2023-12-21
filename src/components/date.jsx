"use client"
import React from 'react'

const DateTime = () => {
  const days  = [
    { id :1, day : "Monday" },
    { id :2, day : "Tuesday" },
    { id :3, day : "Wednesday" },
    { id :4, day : "Thursday" },
    { id :5, day : "Friday" },
    { id :6, day : "Saturday" },
    { id :7, day : "Sunday" },
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
    <div>
      <span className='text-lg font-light uppercase text-lightGray'>{weekDays}</span>
    </div>
  )
}

export default DateTime