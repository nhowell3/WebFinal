import Card from "./Card";
import SecondaryColorDiv from "./SecondaryColorDiv";

export default function SkillCard({skill}){
    return  (
        <Card className="text-center flex flex-col w-full max-w-[264px] mx-auto">
            <div dangerouslySetInnerHTML={{__html: skill.logo, }} className="justify-items-center h-30 content-center px-6"/>
            <p className="mt-auto text-xl">{skill.tool_name}</p>
            <SecondaryColorDiv>
                <p>{skill.level}</p>
            </SecondaryColorDiv>
        </Card>
    );
}