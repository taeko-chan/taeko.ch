import {useParams} from "react-router-dom"
import Title from "../components/Title.jsx";
import TContainer from "../components/TContainer.jsx";
import TSection from "../components/TSection.jsx";

function Overview() {

    let {info} = useParams();

    return (
        <>
            <Title>Overview</Title>
            <TContainer>
                <TSection>
                    <p>{info}</p>
                </TSection>
                <TSection>
                    <p>{info}</p>
                </TSection>
            </TContainer>
        </>
    )
}

export default Overview;