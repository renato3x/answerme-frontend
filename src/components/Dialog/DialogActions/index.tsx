import { FC, HTMLAttributes } from "react";

const DialogActions: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  return (
    <div {...props} className={`mdl-dialog__actions ${props.className}`}>
      { props.children }
    </div>
  )
}

export default DialogActions
