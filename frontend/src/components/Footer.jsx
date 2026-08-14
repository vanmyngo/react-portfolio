import nameLogo from '../static/images/name.ico';

const Footer = () => {
    return (
        <footer className='footer-section'>
            © 2026 <img src={nameLogo} alt='name logo' id='footer-logo'/> All rights reserved.
        </footer>
    );
};

export default Footer;
