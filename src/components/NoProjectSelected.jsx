import noProjectImg from '../assets/no-projects.png'
import Button from './Button.jsx';
export default function NoProjectSelected({startProject}) {
    return (
        <div className="mt-2 text-center w-2/3">
            <img src={noProjectImg} className='w-16 h-15 object-contain mx-auto' alt="no project"/>
            <h2 className='text-xl font-bold text-stone-500 my-4'>No Project Selected</h2>
            <p className='text-stone-400 mb-4'>Select a Proect or start with a new one</p>
            <p className='mt-8'>
                <Button onClick={startProject}>Create new Project</Button>
            </p>
        </div>
    )
}