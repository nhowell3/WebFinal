export default function Header({children, className = ''}){
    return (
        <h1 className={"text-4xl text-center mb-8 " + className}>
            {children}
        </h1>
    );
}