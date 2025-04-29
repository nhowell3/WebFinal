export default function FlexContainer({children, className}){
    return (
        <>
            <div className={'flex flex-col justify-center lg:flex-row lg:gap-24 ' + className}>
                {children}
            </div>
        </>
    );
}