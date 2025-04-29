import PaddedView from "../components/PaddedView";
import FlexContainer from "../components/FlexContainer";
import FlexItem from "../components/FlexItem";
import SecondaryColorDiv from "../components/SecondaryColorDiv";
import Card from "../components/Card";
import SocialLinks from "../components/SocialLinks";

export default function HomePage({}){
    return (
        <>
            <PaddedView>
                <FlexContainer>
                    <FlexItem className='flex flex-col justify-center md:text-right'>
                        <h1 className="text-6xl text-center">Nicholas Howell</h1>
                        <br/>
                        <SecondaryColorDiv>
                            <h1 className="text-4xl text-center">Full Stack Developer</h1>
                        </SecondaryColorDiv>
                    </FlexItem>
                    <FlexItem>
                        <img src='../../me.jpg' alt='Picture of me' className='mt-8 mx-auto rounded-4xl max-w-2xs lg:mx-0 lg:mt-0 shadow-xl'/>
                    </FlexItem>
                </FlexContainer>
                <br/>
                <br/>
                <Card className="px-16 py-8">
                    <p className="text-2xl">
                        Hello, I am Nicholas Howell. I'm an ATU graduate with a Bachelor's of Art in Interactive Media and Game Design, and am about to graduate with a Bachelor's of Science in Computer Science.
                    </p>
                </Card>
                <br/>
                <br/>
                <br/>
                <SocialLinks/>
            </PaddedView>
        </>
    );
}