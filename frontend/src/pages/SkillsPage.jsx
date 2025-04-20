import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";
import API from "../environment/API";
import Header from "../components/Header";
import SkillCard from "../components/SkillCard";

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
            <div className="grid grid-cols-3">
                {skills.map((skill, index) => {
                    return (
                        <div key={index} className="px-4 pb-4">
                            <SkillCard skill={skill}/>
                        </div>
                    );   
                })}
            </div>
        </>
    );
}