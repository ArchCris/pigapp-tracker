import React from 'react'
import '../style/TopSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'
import oink from '../assets/oink_sound.mp3'
import useSound from 'use-sound';
import pigFace from '../assets/pig.png'

const TopSection = (props) => {

  const pigCounter__face = document.querySelector('.pigCounter__face')

  const [play] = useSound(oink);

  const{diners,setDiners}=props.props

  const soundMove = () =>{
    play()
    pigCounter__face.classList.add('pigAppear')
  }

  const hanldeDinerChange = (sign) => {
    if(diners===0){
      if(sign==='+'){
        setDiners(diners+1)
        soundMove()
      }
    }else{
      if(sign==='+'){
        setDiners(diners+1)
        soundMove()
      }else if(sign==='-'){
        setDiners(diners-1)
        soundMove()
      }
    }
    setTimeout(() => {
      pigCounter__face.classList.remove('pigAppear')
    }, 1000);
  }

  return (
    <div className='top__conteiner'>
      <FontAwesomeIcon className='top__left' icon={faCircleChevronLeft} onClick={()=>{hanldeDinerChange('-')}} size='2xl'/>
      <img className='pigCounter__face' alt='pig face' src={pigFace}></img>
      <div className='pigCounter'>
        <span className='pigCounter__number'>{diners}</span>
      </div>
      <FontAwesomeIcon className='top__right' icon={faCircleChevronRight} onClick={()=>{hanldeDinerChange('+')}} size="2xl" />
    </div>
  )
}

export default TopSection