import Button from "./Button.jsx";

export default function ProjectSideBar({startProject, projects, selectProject, selectedProjectId}) {
    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Project</h2>
            <div>
                <Button onClick={startProject}>
                    + Add Project
                </Button>
            </div>
            <ul className="mt-8">
                {projects.map(project => {
                    let classes = "w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800";
                    if (project.id === selectedProjectId) {
                        classes += " bg-stone-800 text-stone-200"
                    } else {
                        classes+= "text-stone-400"
                    }
                    return (
                        <li key={project.id}>
                            <button 
                            onClick={() => selectProject(project.id)}
                            className={classes}
                            >
                                {project.title}
                            </button>
                        </li>
                    )
                })}
            </ul>
        </aside>
    )
}