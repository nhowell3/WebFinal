import DarkModeTheme from "../themes/DarkModeTheme";
import ContentDiv from "./ContentDiv";
import HorizontalList from "./HorizontalList";
import NavLink from "./NavLink";
import DarkModeToggle from "./DarkModeToggle";
import { useState } from "react";
import Hamburger from "./Hamburger";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'; 

export default function Nav({}){
    const [hamOpen, setHamOpen] = useState(false);

    return (
        <nav>
            <br/>
            <ContentDiv className="pl-8">
                <div className="hidden sm:block">
                    <HorizontalList className="justify-start">
                        <NavLink to="/">Home</NavLink>  
                        <NavLink to="/projects">Projects</NavLink>  
                        <NavLink to="/education">Education</NavLink>  
                        <NavLink to="/skills">Skills</NavLink>  
                        <NavLink to="/contact">Contact</NavLink> 
                        <div className="grow"></div>
                        <DarkModeToggle/>
                        <div className="mr-8"></div>
                    </HorizontalList>
                </div>
                <div className="flex sm:hidden">
                    <div className="cursor-pointer" onClick={() => setHamOpen(!hamOpen)}>
                        <FontAwesomeIcon className="scale-200" icon={faBars}/>
                    </div>
                    <Hamburger isOpen={hamOpen} setter={setHamOpen}>
                        <NavLink onClick={() => setHamOpen(false)} to="/">Home</NavLink>  
                        <NavLink onClick={() => setHamOpen(false)} to="/projects">Projects</NavLink>  
                        <NavLink onClick={() => setHamOpen(false)} to="/education">Education</NavLink>  
                        <NavLink onClick={() => setHamOpen(false)} to="/skills">Skills</NavLink>  
                        <NavLink onClick={() => setHamOpen(false)} to="/contact">Contact</NavLink>
                        <hr className="my-2"/>
                        <DarkModeToggle/>
                    </Hamburger>
                </div>
            </ContentDiv>
        </nav>
    );
}