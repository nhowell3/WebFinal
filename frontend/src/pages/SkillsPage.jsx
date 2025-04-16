import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";
import API from "../environment/API";
import Header from "../components/Header";

export default function SkillsPage({}){
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        axios.get(API + 'skills').then((response) => {
            setSkills(response.data);
        });
    }, []);
    
    return (
        <>
            <Header>Skills</Header>
            {skills.map((skill, index) => {
                return (
                    <div key={index}>
                        <Card>
                            <div dangerouslySetInnerHTML={{__html: skill.logo}} />
                            {skill.tool_name}
                            {skill.level}
                        </Card>
                    </div>
                );   
            })}
        </>
    );
}