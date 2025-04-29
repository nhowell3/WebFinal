export default function FlexItem({children, className}){
    return (
        <>
            <div className={'lg:w-[50%] ' + className}>
                {children}
            </div>
        </>
    );
}