import React from 'react'
import DefaultProps from '../../../interfaces/DefaultProps'
import './CardActions.css'

const CardActions: React.FC<DefaultProps> = ({ children }) => {
  return (
    <div className="card-action">
      {children}
    </div>
  )
}

export default CardActions
