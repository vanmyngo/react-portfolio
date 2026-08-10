import { Container, Col, Row, Button } from 'react-bootstrap';
import { PiDownloadSimple } from 'react-icons/pi';
import SocialMediaLink from './SocialMediaLink';
import profile from '../static/images/profile.jpg';
import resume from '../static/VanNgo-Resume.pdf';

const Hero = () => {
    return (
        <Container id='hero-section'>
            <Col id='hero-info'>
                <Row>
                    <span id='hero-greeting'>
                        Hey there! I'm <br /> <b id='hero-name'>VAN</b>
                    </span>
                    <p>
                        I'm a software engineer who loves picking up new tools fast 
                        and turning them into working software. From automated testing 
                        to full-stack development, I bring strong QA instincts and 
                        quick execution to everything I build — and I'm always looking 
                        for the next challenge to grow into.
                    </p>
                </Row>
                <Button href={resume} target='_blank' rel='noreferrer' id='download-resume-btn'>
                    <PiDownloadSimple /> RESUME
                </Button>
                <p id='social-media-header'>Learn more about me:</p>
                <SocialMediaLink />
            </Col>
            <img src={profile} alt='profile of van ngo' id='profile-img'/>
        </Container>
    );
};

export default Hero;