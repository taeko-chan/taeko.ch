import tcLogo from '../assets/tclogow.svg'
import '../assets/css/nav.css'
import {HiMenu, HiOutlineExternalLink} from "react-icons/hi";
import {NavLink} from "react-router";

function Nav() {
    // const [count, setCount] = useState(0)
    return (
        <>
            <div className='nav'>
                <div>
                    <a href="/">
                        <img src={tcLogo} className="logo" alt="Taeko & Co Logo"/>
                    </a>
                </div>
                <div className="navlinks">
                    <NavLink to="/overview"><a className="menuItem">Overview</a><br/></NavLink>
                    <NavLink to="http://map.taeko-and-co.ch:3876"><a
                        className="menuItem">BlueMap<HiOutlineExternalLink/></a></NavLink><br/>
                    <NavLink to="http://map.taeko-and-co.ch:3876"><a
                        className="menuItem">Wiki<HiOutlineExternalLink/></a></NavLink><br/><br/>
                    <NavLink to="/countries"><a className="menuItem">Countries </a></NavLink><br/>
                    <NavLink to="/technical"><a className="menuItem">Technical </a></NavLink><br/>
                    <NavLink to="/design"><a className="menuItem">Design </a></NavLink><br/>
                    <NavLink to="/other"><a className="menuItem">Other </a></NavLink><br/>
                </div>
                <div className="navbutton"><HiMenu/></div>
                <div className="navFooter">
                    <p>Made possible by <a href="https://cubisima.com">Suchthosting.</a><br/> Thank you!</p>
                    <p>© 2025 F.R. Cordone unless <br/>
                        otherwise indicated, all <br/>
                        rights reserved.</p>
                </div>
            </div>
        </>
    )
}

export default Nav
