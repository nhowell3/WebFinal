import ContentDiv from "./ContentDiv";

export default function Hamburger({children, isOpen, setter}){
    return (
        <div className={(isOpen ? 'absolute': 'hidden')}>
            <div className="w-[100vw] h-[100vh] fixed top-0 left-0" onClick={() => setter(false)}>

            </div>
            <ContentDiv className="px-4 py-2 shadow-[0_5px_5px_rgba(0,0,0,0.25)] absolute rounded-2xl" useSecondaryBg={true}>
                {children}
            </ContentDiv>
        </div>
    );
}