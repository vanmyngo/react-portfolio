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
                    to='/#home'>
                        vn.
                    </NavHashLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <NavHashLink
                    className='navbar-text'
                    smooth
                    as={Link} 
                    to='/#home'
                    >
                        HOME
                    </NavHashLink>
                    <NavHashLink
                    className='navbar-text'
                    smooth
                    as={Link} 
                    to='/#about'
                    >
                        ABOUT
                    </NavHashLink>
                    <NavHashLink
                    className='navbar-text'
                    smooth
                    as={Link} 
                    to='/#language'
                    >
                        SKILLS
                    </NavHashLink>
                    <NavHashLink
                    className='navbar-text'
                    smooth
                    as={Link} 
                    to='/#project'
                    >
                        PROJECTS
                    </NavHashLink>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default NavBar;