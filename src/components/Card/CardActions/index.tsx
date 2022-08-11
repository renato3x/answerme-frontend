import React, { HTMLAttributes } from 'react'

const CardActions: React.FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  return (
    <div className="mdl-card__actions" {...props}>
      {props.children}
    </div>
  )
}

export default CardActions
