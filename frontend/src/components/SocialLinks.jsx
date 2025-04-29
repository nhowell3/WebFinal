import HorizontalList from "./HorizontalList";
import Card from "./Card";
import AccentDiv from "./AccentDiv";

export default function SocialLinks({}){
    return (
        <HorizontalList className="lg:flex-row lg:mb-0 flex-col mb-4">
            <Card className="lg:w-fit lg:mb-4 mb-0 w-full">
                <AccentDiv>
                    <a className="text-center text-3xl" href="mailto:nhowell3@atu.edu"><p>nhowell3@atu.edu</p></a>
                </AccentDiv>
            </Card>
            <Card className="lg:w-fit lg:mb-4 mb-0 w-full">
                <AccentDiv className="px-16">
                    <a className="text-center text-3xl" href="https://www.linkedin.com/in/nick-howell-3a9bb122a/"><p>Linkedin</p></a>
                </AccentDiv>
            </Card>
            <Card className="lg:w-fit lg:mb-4 mb-0 w-full">
                <AccentDiv className="px-16">
                    <a className="text-center text-3xl" href="https://github.com/nhowell3"><p>Github</p></a>
                </AccentDiv>
            </Card>
        </HorizontalList>
    );
}