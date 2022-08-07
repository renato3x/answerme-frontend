import React from 'react'
import DefaultProps from '../../../interfaces/DefaultProps'
import './CardTitle.css'

const CardTitle: React.FC<DefaultProps> = ({ children }) => {
  return <p className="card-title truncate">{children}</p>
}

export default CardTitle
