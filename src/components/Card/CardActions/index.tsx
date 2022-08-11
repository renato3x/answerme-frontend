import React, { HTMLAttributes } from 'react'
import DefaultProps from '../../../interfaces/DefaultProps'
import './CardActions.css'

interface CardActionsProps extends DefaultProps, HTMLAttributes<HTMLDivElement> {}

const CardActions: React.FC<CardActionsProps> = (props) => {
  return (
    <div className="card-action" {...props}>
      {props.children}
    </div>
  )
}

export default CardActions
