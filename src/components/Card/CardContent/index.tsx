import React from 'react'
import DefaultProps from '../../../interfaces/DefaultProps'
import './CardContent.css'

const CardContent: React.FC<DefaultProps> = ({ children }) => {
  return (
    <div className="card-content">
      {children}
    </div>
  )
}

export default CardContent
