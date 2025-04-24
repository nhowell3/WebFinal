import { useState, useEffect } from "react";
import axios from "axios";
import API from "../environment/API";
import Header from "../components/Header";
import Card from "../components/Card";

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
                        <Card>
                            <img src={project.image}/>
                            {project.title}
                        </Card>
                    </div>
                );   
            })}
        </>
    );
}