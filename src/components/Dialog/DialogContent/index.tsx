import { FC, HTMLAttributes } from 'react';

const DialogContent: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  return (
    <div {...props} className={`mdl-dialog__content ${props.className}`}>
      { props.children }
    </div>
  )
}

export default DialogContent
