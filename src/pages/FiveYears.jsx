import {useParams} from "react-router-dom"
import Title from "../components/Title.jsx";
import TSection from "../components/TSection.jsx";
import TContainer from "../components/TContainer.jsx";

function FiveYears() {

    let {info} = useParams();

    return (
        <>
            <Title text='Celebrating 5 Years of Taeko & Co' />
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

export default FiveYears;