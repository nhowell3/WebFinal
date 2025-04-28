import { useState, useEffect } from "react";
import axios from "axios";
import API from "../environment/API";
import Header from "../components/Header";
import Card from "../components/Card";
import ProjectCard from "../components/ProjectCard";

export default function ProjectsPage({}){
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get(API + 'projects').then((response) => {
            setProjects(response.data);
        });
    }, []);

    return (
        <>
            <Header>Projects</Header>
            {projects.map((project, index) => {
                return (
                    <div key={index}>
                        <ProjectCard
                            project={project}
                        />
                    </div>
                );   
            })}
        </>
    );
}