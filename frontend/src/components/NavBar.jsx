import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

const NavBar = () => {

    return(
        <Navbar sticky='top' expand='lg' variant='dark'>
            <Container>
                <Navbar.Brand>
                    <NavHashLink
                    className='navbar-logo'
                    smooth
                    as={Link} 
                    to='/react-portfolio/#home'>
                        vn.
                    </NavHashLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <NavHashLink
                    className='navbar-text'
                    smooth
                    as={Link} 
                    to='/react-portfolio/#home'
                    >
                        HOME
                    </NavHashLink>
                    <NavHashLink
                    className='navbar-text'
                    smooth
                    as={Link} 
                    to='/react-portfolio/#about'
                    >
                        ABOUT
                    </NavHashLink>
                    <NavHashLink
                    className='navbar-text'
                    smooth
                    as={Link} 
                    to='/react-portfolio/#language'
                    >
                        SKILLS
                    </NavHashLink>
                    <NavHashLink
                    className='navbar-text'
                    smooth
                    as={Link} 
                    to='/react-portfolio/#project'
                    >
                        PROJECTS
                    </NavHashLink>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default NavBar;