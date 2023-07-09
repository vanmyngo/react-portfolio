import { Container, Col, Row, Button } from 'react-bootstrap';
import { PiDownloadSimple } from 'react-icons/pi';
import SocialMediaLink from './SocialMediaLink';
import heroAvatar from '../static/images/hero-avatar.png';
import resume from '../static/Resume_VanNgo.pdf';

const Hero = () => {
    
    return (
        <Container className='hero-section' id='home'>
            <Col className='hero-info'>
                <Row>
                    <h2>
                        Hi! I'm
                    </h2>
                    <h1>
                        <strong>Van Ngo</strong>
                    </h1>
                    <p>
                        I'm a <strong>LEARNER</strong>.<br/>
                        A knowledge chaser motivated by projects.
                    </p>
                </Row>
                <Button href={resume} target='_blank' rel='noreferrer'>
                    DOWNLOAD CV <PiDownloadSimple />
                </Button>
                <p id='social-media-header'>Learn more about me:</p>
                <SocialMediaLink />
            </Col>
            <img src={heroAvatar} alt='software developer' className="hero-avatar" />
        </Container>
    );
};

export default Hero;