import { forwardRef, HTMLAttributes } from 'react';
import DefaultProps from '../../interfaces/DefaultProps';
import DialogTriggerButton from './DialogTriggerButton';

interface DialogProps extends DefaultProps, HTMLAttributes<HTMLDialogElement> {}

export const Dialog = forwardRef<HTMLDialogElement, DialogProps>((props, ref) => {
  return (
    <dialog {...props} ref={ref} className={`mdl-dialog ${props.className}`}>
      { props.children }
    </dialog>
  )
})

export { DialogTriggerButton }
