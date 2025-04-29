import { useState, useEffect } from "react";
import axios from "axios";
import API from "../environment/API";
import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";
import PaddedView from "../components/PaddedView";
import ContentDiv from "../components/ContentDiv";
import GenericModal from "../components/GenericModal";
import Card from "../components/Card";
import AccentDiv from "../components/AccentDiv";
import NoPaddingCard from "../components/NoPaddingCard";


export default function ProjectsPage({}){
    const [projects, setProjects] = useState([]);
    const [currentProject, setCurrentProject] = useState(null);

    useEffect(() => {
        axios.get(API + 'projects').then((response) => {
            setProjects(response.data);
        });
    }, []);

    return (
        <>
            <PaddedView>
                <Header>Projects</Header>
                {projects.map((project, index) => {
                    return (
                        <div key={index}>
                            <ProjectCard
                                project={project}
                                setter={setCurrentProject}
                            />
                        </div>
                    );   
                })}
            </PaddedView>
            <GenericModal
                isOpen={currentProject !== null}
                onRequestClose={() => setCurrentProject(null)}
            >
                {currentProject !== null &&
                    <ContentDiv className="flex flex-col gap-4">
                        <NoPaddingCard className="w-full overflow-hidden pt-4">
                            <Header>
                                {currentProject.title}
                            </Header>
                            <img className="object-contain" src={currentProject.image} alt="project image"/>
                        </NoPaddingCard>
                        <Card className="w-full">
                            <p>{currentProject.description}</p>
                        </Card>
                        <Card className="w-full">
                            <Header>Technologies Used:</Header>
                            <div className="grid grid-cols-3">
                                {
                                    currentProject.technologies.map((tech, index) => (
                                        <p key={index}>&bull; {tech}</p>
                                    ))
                                }
                            </div>
                        </Card>
                        <Card className="w-full">
                            <AccentDiv>
                                <a className="text-center text-2xl" href={currentProject.link}><p>Link to Project</p></a>
                            </AccentDiv>
                        </Card>
                    </ContentDiv>
                }
            </GenericModal>
        </>
    );
}