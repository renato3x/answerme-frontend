import { forwardRef, HTMLAttributes } from 'react';
import DialogContent from './DialogContent'
import DialogTitle from './DialogTitle';
import DialogActions from './DialogActions';
import DialogTriggerButton from './DialogTriggerButton';

export const Dialog = forwardRef<HTMLDialogElement, HTMLAttributes<HTMLDialogElement>>((props, ref) => {
  return (
    <dialog {...props} ref={ref} className={`mdl-dialog ${props.className}`}>
      { props.children }
    </dialog>
  )
})

export { DialogContent, DialogTitle, DialogActions, DialogTriggerButton }
