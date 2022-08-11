import React from 'react'
import DefaultProps from '../../../interfaces/DefaultProps'
import './CardTitle.css'

const CardTitle: React.FC<DefaultProps> = ({ children }) => {
  return (
    <div className="mdl-card__title">
      <p className="mdl-card__title-text">{children}</p>
    </div>
  )
}

export default CardTitle
