import React, { HTMLAttributes } from 'react'

const CardContent: React.FC<HTMLAttributes<HTMLDivElement>> = ({ children }) => {
  return (
    <div className="mdl-card__supporting-text">
      {children}
    </div>
  )
}

export default CardContent
