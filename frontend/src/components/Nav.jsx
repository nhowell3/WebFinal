import DarkModeTheme from "../themes/DarkModeTheme";
import ContentDiv from "./ContentDiv";
import HorizontalList from "./HorizontalList";
import NavLink from "./NavLink";
import DarkModeToggle from "./DarkModeToggle";

export default function Nav({}){
    return (
        <nav>
            <br/>
            <ContentDiv className="pl-8">
                <HorizontalList className="justify-start">
                    <NavLink to="/">Home</NavLink>  
                    <NavLink to="/projects">Projects</NavLink>  
                    <NavLink to="/education">Education</NavLink>  
                    <NavLink to="/skills">Skills</NavLink>  
                    <NavLink to="/contact">Contact</NavLink>  
                </HorizontalList>
                {/* <DarkModeToggle/> */}
            </ContentDiv>
        </nav>
    );
}