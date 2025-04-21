import Card from "./Card";
import HorizontalList from "./HorizontalList";
import SecondaryColorDiv from "./SecondaryColorDiv";

export default function DegreeCard({degree}){
    return (
        <div className="w-full flex justify-center">
            <Card className="w-full mb-4">
                <HorizontalList>
                    <h1 className="text-4xl">
                        {degree.description}
                    </h1>
                    <h2 className="text-3xl">
                        {degree.graduation_year}
                    </h2>
                </HorizontalList>
                <HorizontalList>
                    <SecondaryColorDiv>
                        <h3 className="text-2xl">
                            {degree.degree}
                        </h3>
                    </SecondaryColorDiv>
                    <SecondaryColorDiv>
                        <p>
                            {degree.institution}
                        </p>
                    </SecondaryColorDiv>
                </HorizontalList>
            </Card>
        </div>
    );
}