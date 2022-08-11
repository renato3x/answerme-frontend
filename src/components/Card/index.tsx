import React from 'react'
import DefaultProps from '../../interfaces/DefaultProps'
import CardTitle from './CardTitle'
import CardContent from './CardContent'
import CardActions from './CardActions'
import './Card.css'

interface CardProps extends DefaultProps {
  className: string
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`card mdl-card mdl-shadow--2dp ${className}`}>
      {children}
    </div>
  )
}

export { Card, CardTitle, CardContent, CardActions }
