import React, { HTMLAttributes } from 'react'
import './CardContent.css'

const CardContent: React.FC<HTMLAttributes<HTMLDivElement>> = ({ children }) => {
  return (
    <div className="mdl-card__supporting-text card-content">
      {children}
    </div>
  )
}

export default CardContent
