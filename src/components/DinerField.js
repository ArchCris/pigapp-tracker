import React, { useState } from 'react'
import '../style/DinerField.css'
import { useCalculateMoney } from '../hooks/useCalculateMoney'
import pigFace from '../assets/pig.png'
import { useEffect } from 'react'

const DinerField = ({props}) => {

  

  

  const calculateMoney = useCalculateMoney()

  const[value,setValue]=useState('')
  const[name,setName]=useState('Diner '+props)

  useEffect(() => {
    calculateMoney(props)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);


  return (
    <li  className='dinerField__conteiner'>
      <img className='dinerField__logo' alt='pig face' src={pigFace}></img>
      <div className='dinerField__name'>
        <p>Name</p>
        <input className='dinnerName' type='text' onClick={()=>{setName('')}} onChange={(e)=>{setName(e.target.value)}} value={name} />
      </div>
      <div className='dinerField__pay'>
        <p>Paid</p>
        <input className='paidMoney' type='number' onClick={()=>{setValue('')}} onChange={(e)=>{setValue(e.target.value);calculateMoney(props)}} value={value} />
      </div>
      <div className='dinerField__due'>
        <p>They owe me</p>
        <span className='restMoney'>0</span>
      </div>
    </li>
  )
}

export default DinerField