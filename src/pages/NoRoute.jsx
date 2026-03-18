import Title from "../components/Title.jsx";

function NoRoute() {
    return (
        <>
        <Title>Page Not Found</Title>
            <p>The provided URL does not match a page on this website. Are you sure you entered it correctly?</p>
        </>
    )
}

export default NoRoute;