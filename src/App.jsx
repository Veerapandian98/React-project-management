import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectSideBar from "./components/ProjectSideBar.jsx";
import { useState } from "react";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProject: undefined,
    projects: [],
    tasks: []
  });

  function handleAddTask(text) {
    
    setProjectState(prevState => {
      const newTask = {
        name: text,
        projectId: prevState.selectedProject,
        id: Math.random()
      };
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks]
      }
    })
  }

  function handleDeleteTask(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter(
          task => task.id !== id)
      };
    })
  }

  function handleSelectProject(id) {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProject: id
      }
    })
  }

  function handleStartProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProject: null
      }
    })
  }

  function handleCreateProject(projectDetails) {
    const newProject = {
      ...projectDetails,
      id: Math.random()
    };
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProject: undefined,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  function handleCancelAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProject: undefined
      };
    })
  }

  function handleDeleteProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProject: undefined,
        projects: prevState.projects.filter(
          project => project.id !== prevState.selectedProject)
      };
    })
  }

  const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProject);

  let content = <SelectedProject 
    onDelete={handleDeleteProject} project={selectedProject}
    onAddTask={handleAddTask} onDeleteTask={handleDeleteTask}
    tasks={projectState.tasks}
  />;
  
  if (projectState.selectedProject === null) {
    content = <NewProject onAdd={handleCreateProject} onCancel={handleCancelAddProject}/>
  } else if (projectState.selectedProject === undefined) {
    content = <NoProjectSelected startProject={handleStartProject}/>
  }

 

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar 
      startProject={handleStartProject} projects={projectState.projects}
      selectProject={handleSelectProject} selectedProjectId={projectState.selectedProject}
      />
      {content}
    </main>
  );
}

export default App;
