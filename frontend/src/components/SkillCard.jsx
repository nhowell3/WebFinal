import Card from "./Card";
import SecondaryColorDiv from "./SecondaryColorDiv";

export default function SkillCard({skill}){
    return  (
        <Card className="text-center flex flex-col w-full h-32">
            <div dangerouslySetInnerHTML={{__html: skill.logo}} className="justify-items-center"/>
            <p className="mt-auto">{skill.tool_name}</p>
            <SecondaryColorDiv>
                <p>{skill.level}</p>
            </SecondaryColorDiv>
        </Card>
    );
}