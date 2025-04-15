export default function HorizontalList({children, className = ''}){
    return (
        <div className={"flex justify-between gap-4 " + className}>
            {children}
        </div>
    );
}