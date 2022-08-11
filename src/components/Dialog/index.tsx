import { forwardRef, HTMLAttributes } from 'react';
import DialogContent from './DialogContent'
import DialogTitle from './DialogTitle';
import DialogActions from './DialogActions';
import DialogTriggerButton from './DialogTriggerButton';

interface DialogProps extends HTMLAttributes<HTMLDialogElement> {}

export const Dialog = forwardRef<HTMLDialogElement, DialogProps>((props, ref) => {
  return (
    <dialog {...props} ref={ref} className={`mdl-dialog ${props.className}`}>
      { props.children }
    </dialog>
  )
})

export { DialogContent, DialogTitle, DialogActions, DialogTriggerButton }
