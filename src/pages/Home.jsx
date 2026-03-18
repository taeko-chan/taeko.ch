import fiveYear from "../assets/img/5y.svg";
import imgWengenHB from "../assets/img/wengenHB.png";
import {HiDownload, HiOutlineExternalLink} from "react-icons/hi";

function Home() {
    return (
        <>
            <div className='container-top'>
                <div className='section-title'>
                    <h1 className='sitetitle'>A diversely disciplined <br/> creative collective.</h1>
                </div>
                <div className='section-icon'>
                    <img src={fiveYear} className="logo" alt="Taeko & Co Logo"/>
                </div>
            </div>
            <hr></hr>
            <div className='container' style={{marginTop: '50px'}}>
                <div className='section'>
                    <p className='blockText'><h3>Since 2020...</h3> ...the Taeko & Co. Creative Collective has been an outlet
                        for its members to
                        exercise their manifold forms of creative expression and hobbies, be it posters, logos,
                        architecture, or even urban planning. We can do all this through the medium of our Minecraft
                        server; the beginning
                        of our project. Here, three countries spearhead server development:
                        Atteca, Lyria, and Swarovski. These countries each contain their own architecture, industry,
                        and culture. We boast a serverwide network of roads and railway lines.
                    </p>
                    <p>We would love to help you with your next project with our plethora of
                        skills. For business inquiries, please visit the commissions page.</p>
                    <p>We hope to see you in our Discord or on the server soon!</p>
                </div>
                <div className='section'>
                    {/*    <iframe src="https://discord.com/widget?id=1118461204281696258&theme=dark" width="400"*/}
                    {/*            height="500" allowTransparency="true" frameBorder="0"*/}
                    {/*            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>*/}
                    <a href='http://map.taeko-and-co.ch:3876/#world:-5871:109:7689:0:0.58:1.33:0:0:free'><img
                        src={imgWengenHB} alt='Wengen HB'/></a>
                </div>
            </div>
            <h3>New Here?</h3>
            <div className='container'>
                <div className='section'>
                    <p>...and interested? Good news! There are many ways to keep tabs on what we're up to, be that in
                        Minecraft or elsewhere. For one, you could apply
                        to join the server! We're a fairly tightly knit community, so understand that it's not as simple
                        as installing the mods and entering the IP :)<br/>
                        We'd love to get to know you over on our Discord server. If you scroll to the bottom of the
                        page, you'll see a widget you can click that will open
                        up your Discord with an invite link. <br/> See you there!
                    </p>
                </div>
                <div className='section'>
                    <p>
                        Seem like a lot of effort? No problem! Feel free to enjoy our work published on this website and
                        don't forget to check out the
                        <a href='http://map.taeko-and-co.ch:3876'> BlueMap<HiOutlineExternalLink/></a> to experience the
                        server right here in your web browser!<br/><br/>
                        Be sure to give yourself a flyover tour of all of our biggest cities: Wengen, Atami, Trotrea,
                        Lyria...<br/><br/>
                        And of course the infrastructure in between ;)
                    </p>
                </div>
            </div>
            <h3>Happening Now</h3>
            <div className='container'>
                <div className='section'>
                    <p>Since 2020, the Taeko & Co. Creative Collective has been an outlet for its members to
                        exercise their manifold forms of creative expression and hobbies, be it posters, logos,
                        architecture, or even urban planning. We can do all this through the medium of our Minecraft
                        server; the beginning
                        of our project. Here, three countries spearhead server development:
                        Atteca, Lyria, and Swarovski. These countries each contain their own architecture, industry,
                        and culture. We boast a serverwide network of roads and railway lines.

                        We hope to see you in our Discord or on the server soon!</p>
                </div>
                <div className='section'>
                    <p>Since 2020, the Taeko & Co. Creative Collective has been an outlet for its members to
                        exercise their manifold forms of creative expression and hobbies, be it posters, logos,
                        architecture, or even urban planning. We can do all this through the medium of our Minecraft
                        server; the beginning
                        of our project. Here, three countries spearhead server development:
                        Atteca, Lyria, and Swarovski. These countries each contain their own architecture, industry,
                        and culture. We boast a serverwide network of roads and railway lines.

                        We hope to see you in our Discord or on the server soon!</p>
                </div>
            </div>
            <h3>Useful Links</h3>
            <div className='container'>
                <div className='section section-important-links'>
                    <a>Modpack Essentials - 1.20.1 Fabric <HiDownload/></a><br/>
                    <a>Modpack Recommended - 1.20.1 Fabric <HiDownload/></a><br/>
                    <a>Modpack Expanded - 1.20.1 Fabric <HiDownload/></a>
                    <p>See a detailed mod list for each modpack version<a> here.</a></p>
                </div>
            </div>
        </>
    )
}

export default Home