import ContentDiv from "./ContentDiv";
import NoPaddingCard from "./NoPaddingCard";

export default function Card({children, className = ''}){
    return (
        <>
            <NoPaddingCard className={"py-2 px-4 " + className}>
                {children}
            </NoPaddingCard>
        </>
    );
}