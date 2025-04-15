import ContentDiv from "./ContentDiv";
import HorizontalList from "./HorizontalList";
import NavLink from "./NavLink";

export default function Nav({}){
    return (
        <nav>
            <ContentDiv useSecondaryBg={true}>
                <HorizontalList className="px-64">
                    <NavLink to="/">Home</NavLink>  
                    <NavLink to="/projects">Projects</NavLink>  
                    <NavLink to="/education">Education</NavLink>  
                    <NavLink to="/skills">Skills</NavLink>  
                    <NavLink to="/contact">Contact</NavLink>  
                </HorizontalList>
            </ContentDiv>
        </nav>
    );
}