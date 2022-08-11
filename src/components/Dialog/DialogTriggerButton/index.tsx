import { FC, HTMLAttributes } from 'react';

interface DialogTriggerButtonProps extends HTMLAttributes<HTMLButtonElement> {
  dialogRef: HTMLDialogElement,
  type: 'open' | 'close'
}

const DialogTriggerButton: FC<DialogTriggerButtonProps> = (props) => {

  function loadHtmlAttributes(keysToRemove: string[]) {
    return Object.keys(props)
    .filter(key => {
      return !keysToRemove.includes(key)
    })
    .reduce<{ [key: string]: any }>((object, key) => {
      object[key] = (props as any)[key]

      return object
    }, {})
  }

  function handleOpenOrCloseDialog() {
    if (props.type === 'open') {
      props.dialogRef.showModal()
    } else {
      props.dialogRef.close()
    }
  }

  return (
    <button {...loadHtmlAttributes(['dialogRef', 'type'])} className={`mdl-button mdl-js-button mdl-js-ripple-effect ${props.className}`} onClick={handleOpenOrCloseDialog}>
      { props.children }
    </button>
  )
}

export default DialogTriggerButton
