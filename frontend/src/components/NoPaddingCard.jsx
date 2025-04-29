import ContentDiv from "./ContentDiv";

export default function NoPaddingCard({children, className = ''}){
    return (
        <>
            <ContentDiv
                useSecondaryBg={true}
                className={"w-fit rounded-2xl shadow-2xl " + className}
            >
                {children}
            </ContentDiv>
        </>
    );
}