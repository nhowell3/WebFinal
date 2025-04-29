import AccentDiv from "./AccentDiv";
import Card from "./Card";
import HorizontalList from "./HorizontalList";
import SecondaryColorDiv from "./SecondaryColorDiv";
import NoPaddingCard from "./NoPaddingCard";

export default function ProjectCard({project, setter}){
    return (
        <div className="w-full flex justify-center">
            <NoPaddingCard className="w-full mb-4 overflow-hidden">
                <div className="block sm:hidden mb-4">
                    <img className="object-contain" src={project.image} alt="project image"/>
                </div>
                <HorizontalList>
                    <div className="w-full text-center sm:w-1/2 sm:text-left flex flex-col pb-2 py-2 px-4">
                        <h1 className="text-2xl md:text-4xl pb-0 sm:pb-4">
                            {project.title}
                        </h1>
                        <SecondaryColorDiv className="hidden sm:block text-xs md:text-sm">
                            {project.description}
                        </SecondaryColorDiv>
                        <AccentDiv className="mt-auto">
                            <button 
                                className="cursor-pointer text-2xl "
                                onClick={() => setter(project)}
                            >
                                View More
                            </button>
                        </AccentDiv>
                    </div>
                    <div className="hidden w-1/2 sm:block">
                        <img className="h-full object-cover" src={project.image} alt="project image"/>
                    </div>
                </HorizontalList>
            </NoPaddingCard>
        </div>
    );
}