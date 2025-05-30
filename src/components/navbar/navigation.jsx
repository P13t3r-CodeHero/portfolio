import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faLaptopCode, faMessage, faUserSecret } from '@fortawesome/free-solid-svg-icons';
import './navigation.css';

const Navbar = () => {
    return (
        <div className="navbar"> 
            <ul className="navbar-links">
                <li>
                    <a href="#home"><FontAwesomeIcon icon={faHouse}/></a>
                </li>
                <li>
                    <a href="#about"><FontAwesomeIcon icon={faUser} /></a>
                </li>
                <li>
                    <a href="#projects"><FontAwesomeIcon icon={faLaptopCode} /></a>
                </li>
                {/* <li>
                    <a href="/hackathons"><FontAwesomeIcon icon={faUserSecret} /></a>
                </li> */}
                <li>
                    <a href="#contact"><FontAwesomeIcon icon={faMessage} /></a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;