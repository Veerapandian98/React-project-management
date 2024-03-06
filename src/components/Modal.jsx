import { createPortal } from "react-dom"
import { useRef, useImperativeHandle, forwardRef } from "react"
import Button from "./Button.jsx";

const Modal =  forwardRef(function Modal({children, btnLabel}, ref) {
    const dialog = useRef();
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal()
            }
        }
    })
    return createPortal(
        <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadw-md">
            {children}
            <form method="dialog" className="mt-4 text-right">
                <Button>{btnLabel}</Button>
            </form>
        </dialog>,
        document.getElementById('modal-root')
    )
});

export default Modal;