import {useParams} from "react-router-dom"
import Title from "../components/Title.jsx";
import TSection from "../components/TSection.jsx";
import TContainer from "../components/TContainer.jsx";

function Infrastructure() {

    let {info} = useParams();

    return (
        <>
            <Title>Infrastructure</Title>
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

export default Infrastructure;