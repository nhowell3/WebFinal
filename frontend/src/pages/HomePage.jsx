import ContentDiv from "../components/ContentDiv";
import PaddedView from "../components/PaddedView";
import Header from "../components/Header";
import FlexContainer from "../components/FlexContainer";
import FlexItem from "../components/FlexItem";
import SubHeader from "../components/SubHeader";
import AccentDiv from "../components/AccentDiv";
import HorizontalList from "../components/HorizontalList";

export default function HomePage({}){
    return (
        <>
            <PaddedView>
                <FlexContainer>
                <FlexItem className='flex flex-col justify-center md:text-right'>
                    <Header>Nicholas Howell</Header>
                    <SubHeader>Full Stack Developer</SubHeader>
                </FlexItem>
                    <FlexItem className='overflow-hidden'>
                        <img src='../../me.jpg' alt='Picture of me' className='mt-8 mx-auto rounded-4xl max-w-2xs md:mx-0 md:mt-0 shadow-xl'/>
                    </FlexItem>
                </FlexContainer>
                <div className='text-left mx-auto'>
                    Hello, I am Nicholas Howell. I'm an ATU graduate with a Bachelor's of Art in Interactive Media and Game Design, and am about to graduate with a Bachelor's of Science in Computer Science.
                </div>
                <AccentDiv>
                    <HorizontalList className="mb-4">
                        <a href="mailto:nhowell3@atu.edu">nhowell3@atu.edu</a>
                        <a href="https://github.com/nhowell3">https://github.com/nhowell3</a>
                    </HorizontalList>
                </AccentDiv>
            </PaddedView>
        </>
    );
}