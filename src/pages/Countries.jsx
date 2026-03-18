import {useParams} from "react-router-dom"
import Title from "../components/Title.jsx";
import TContainer from "../components/TContainer.jsx";
import {Link} from "react-router";

function Countries() {

    let {info} = useParams();

    return (
        <>
            <Title>Countries</Title>
            <TContainer>
                <p>
                    The Taeko & Co Minecraft Server is territorially divided into countries (for a more in-depth explanation, see <Link to={'/overview'}>overview</Link>).
                    This page contains a list of all the current countries on the server as well as a brief summary of their inspiration, culture and place (geographically
                    and socially) on the server.<br/>
                </p>
            </TContainer>
            <Title/>
            <h3>Atteca, the Attecan Confederation</h3>
            <TContainer>
                <p>
                    Atteca is the largest and most developed country on the server. Its territory is nearly 150km north/south and 200km east/west.
                    Atteca is home to many of the largest cities on the server, such as Wengen and Atami, both of which are in the most important
                    metropolitan area on the server, the Central Sea region.<br/>
                    Atteca is also a major crossroads for the whole server, bordering every currently active country. Because of this, transportation infrastructure has
                    always been a cornerstone of Attecan innovation: The first roadway using ice/boat technology was built in northern Atteca in August of 2020, and about
                    two months later, the first proper expressway opened between Atami and Lyria.
                </p>
            </TContainer>
        </>
    )
}

export default Countries;