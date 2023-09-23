import React from 'react'
import '../style/MiddleSection.css'
import DinerField from './DinerField'

const MiddleSection = ({diners}) => {

  return (
    <ul className='middle__conteiner'>
      {[...Array(diners)].map((node,key)=>{
        return <DinerField key={key} props={diners}/>
      })}
    </ul>
  )
}

export default MiddleSection