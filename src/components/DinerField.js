import React, { useState } from 'react'
import '../style/DinerField.css'
import { useCalculateMoney } from '../hooks/useCalculateMoney'
import pigFace from '../assets/pig.png'

const DinerField = (props) => {

  const calculateMoney = useCalculateMoney()

  const[value,setValue]=useState('')
  const[name,setName]=useState('Diner '+props.props)


  return (
    <li  className='dinerField__conteiner'>
      <img className='dinerField__logo' alt='pig face' src={pigFace}></img>
      <div className='dinerField__name'>
        <p>Name</p>
        <input className='dinnerName' type='text' onClick={()=>{setName('')}} onChange={(e)=>{setName(e.target.value)}} value={name} />
      </div>
      <div className='dinerField__pay'>
        <p>Pague</p>
        <input className='paidMoney' type='number' onClick={()=>{setValue('')}} onChange={(e)=>{setValue(e.target.value);calculateMoney(props.props)}} value={value} />
      </div>
      <div className='dinerField__due'>
        <p>Me deben</p>
        <span className='restMoney'>0</span>
      </div>
    </li>
  )
}

export default DinerField