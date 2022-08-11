import React, { HTMLAttributes } from 'react'
import DefaultProps from '../../../interfaces/DefaultProps'
import './CardActions.css'

interface CardActionsProps extends DefaultProps, HTMLAttributes<HTMLDivElement> {}

const CardActions: React.FC<CardActionsProps> = (props) => {
  return (
    <div className="mdl-card__actions" {...props}>
      {props.children}
    </div>
  )
}

export default CardActions
