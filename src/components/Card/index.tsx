import React from 'react'
import DefaultProps from '../../interfaces/DefaultProps'
import CardTitle from './CardTitle'
import CardContent from './CardContent'
import CardActions from './CardActions'
import './Card.css'

const Card: React.FC<DefaultProps> = ({ children }) => {
  return (
    <div className="card mdl-card mdl-shadow--2dp">
      {children}
    </div>
  )
}

export { Card, CardTitle, CardContent, CardActions }
