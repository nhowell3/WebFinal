import { useState, useEffect } from "react";
import API from "../environment/API";
import axios from 'axios'
import DegreeCard from "../components/DegreeCard";
import Header from "../components/Header";
import PaddedView from "../components/PaddedView";

export default function EducationPage({}){
    const [degrees, setDegrees] = useState([]);

    useEffect(() => {
        axios.get(API + 'education').then((response) => {
            setDegrees(response.data);
        });
    }, []);
    
    return (
        <>
            <Header>Education</Header>
            <PaddedView>
                {degrees.map((degree, index) => {
                    return (
                        <div key={index}>
                            <DegreeCard degree={degree}/>
                        </div>
                    );   
                })}
            </PaddedView>
        </>
    );
}