
function Title({children}) {
    return (
        <>
            <div className='container-top'>
                <div className='section-title'>
                    <h1 className='sitetitle'>{children}</h1>
                </div>
            </div>
            <hr></hr><br/>
        </>
    )
}
export default Title;