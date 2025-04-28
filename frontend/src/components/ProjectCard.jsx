import Card from "./Card";
import HorizontalList from "./HorizontalList";
import SecondaryColorDiv from "./SecondaryColorDiv";

export default function ProjectCard({project}){
    return (
        <div className="w-full flex justify-center">
            <Card className="w-full mb-4">
                <HorizontalList>
                    <div className="grow">
                        <h1 className="text-4xl">
                            {project.title}
                        </h1>
                        <br/>
                        <SecondaryColorDiv className="max-w-3/4">
                            {project.description}
                        </SecondaryColorDiv>
                    </div>
                    <div>
                        <img className="max-h-48 object-contain" src={project.image} alt="project image"/>
                    </div>
                </HorizontalList>
            </Card>
        </div>
    );
}