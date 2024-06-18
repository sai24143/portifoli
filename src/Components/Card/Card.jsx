import React from 'react'
import './Card.css'

const Card = ({ img,tittle,text }) => {
  return (
    <div className='Cards'>
    <img src={img} alt=""/>
    <span> {tittle}</span>
    <span>{text}</span>
    <button className='button'>Lear more</button>

      
    </div>
  )
}

export default Card
