import { forwardRef } from 'react';
import DefaultProps from '../../interfaces/DefaultProps';
import DialogTriggerButton from './DialogTriggerButton';

export const Dialog = forwardRef<HTMLDialogElement, DefaultProps>(({ children }, ref) => {
  return (
    <dialog ref={ref} className="mdl-dialog">
      {children}
    </dialog>
  )
})

export { DialogTriggerButton }
