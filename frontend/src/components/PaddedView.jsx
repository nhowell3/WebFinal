export default function PaddedView({children}){
    return (
        <div className="max-w-[950px] mx-auto">
            {children}
        </div>
    );
}