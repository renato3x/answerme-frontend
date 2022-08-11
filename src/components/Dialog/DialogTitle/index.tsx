import { FC, HTMLAttributes } from 'react';

const DialogTitle: FC<HTMLAttributes<HTMLParagraphElement>> = (props) => {
  return (
    <p {...props} className={`mdl-dialog__title ${props.className}`}>
      { props.children }
    </p>
  )
}

export default DialogTitle
