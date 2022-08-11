import React, { HTMLAttributes } from 'react'

const CardTitle: React.FC<HTMLAttributes<HTMLDivElement>> = ({ children }) => {
  return (
    <div className="mdl-card__title">
      <p className="mdl-card__title-text">{children}</p>
    </div>
  )
}

export default CardTitle
