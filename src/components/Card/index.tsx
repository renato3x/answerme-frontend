import React, { HTMLAttributes } from 'react'
import CardTitle from './CardTitle'
import CardContent from './CardContent'
import CardActions from './CardActions'
import './Card.css'

const Card: React.FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  return (
    <div {...props} className={`card mdl-card mdl-shadow--2dp ${props.className}`}>
      {props.children}
    </div>
  )
}

export { Card, CardTitle, CardContent, CardActions }
