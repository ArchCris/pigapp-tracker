import React from 'react'
import '../style/MiddleSection.css'
import DinerField from './DinerField'

const MiddleSection = ({diners}) => {

  return (
    <ul className='middle__conteiner'>
      {[...Array(diners)].map(()=>{
        return <DinerField props={diners}/>
      })}
    </ul>
  )
}

export default MiddleSection