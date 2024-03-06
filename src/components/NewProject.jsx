import Input from "./Input.jsx";
import { useRef } from "react";
import Modal from "./Modal.jsx";

export default function NewProject({onAdd, onCancel}) {
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();
    const modal = useRef();

    function handleSave() {
        const titleValue = title.current.value;
        const descriptionValue = description.current.value;
        const dueDateValue = dueDate.current.value;

        if(titleValue.trim() === '' || descriptionValue.trim() === '' || dueDateValue.trim() === '') {
            modal.current.open();
            return
        }

        onAdd({
            title: titleValue,
            description: descriptionValue,
            dueDate: dueDateValue
        });
    }

    return (
        <>
            <Modal ref={modal} btnLabel="Cancel">
                <h2 className='text-xl font-bold text-stone-700 my-4'>Invalid Inputs</h2>
                <p className='text-stone-600 mb-4'>Please enter a valid inputs...</p>
            </Modal>
            <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li>
                        <button onClick={onCancel} className="text-stone-800 hover:text-stone-950">Cancel</button>
                    </li>
                    <li>
                        <button onClick={handleSave} className="px-6 py-2 rounded-md bg-stone-800 bg-stone-500 text-stone-200 hover:text-stone-950">Save</button>
                    </li>
                </menu>
                <div>
                    <Input type="text" ref={title} label="title" />
                    <Input ref={description} label="Description" textarea />
                    <Input type="date" ref={dueDate} label="Due Date" />
                </div>
            </div>
        </>
    )
}