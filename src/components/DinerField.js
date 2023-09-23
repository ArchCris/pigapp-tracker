import React from 'react'
import '../style/DinerField.css'

const DinerField = ({props}) => {

 
console.log(props)
  return (
    <li key={props} className='dinerField__conteiner'>
      <div className='dinerField__diner'>

      </div>
      <div className='dinerField__name'>

      </div>
      <div className='dinerField__pay'>

      </div>
    </li>
  )
}

export default DinerField