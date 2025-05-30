import './footer.css';
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-brand">Full Stack Developer</div>
                <div className="footer-socials">
                    {/* <a href="#"><FaFacebookF /></a>
                    <a href="#"><FaTwitter /></a>
                    <a href="#"><FaInstagram /></a> */}
                    {/* <a href="#"><FaLinkedinIn /></a> */}
                </div>
            </div>

            <div className="footer-links">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>

            <div className="footer-bottom">
                &copy; {new Date().getFullYear()} All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
