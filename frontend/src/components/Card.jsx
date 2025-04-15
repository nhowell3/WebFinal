import ContentDiv from "./ContentDiv";

export default function Card({children, className = ''}){
    return (
        <>
            <ContentDiv
                useSecondaryBg={true}
                className={"w-fit py-2 px-4 rounded-2xl shadow-2xl " + className}
            >
                {children}
            </ContentDiv>
        </>
    );
}