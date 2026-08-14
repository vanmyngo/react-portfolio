import { Col, Container } from 'react-bootstrap';
import utsaLogo from '../static/images/utsa-logo.png';

const About = () => {
    return (
        <Container id='about' className='about-section'>
            <img src={utsaLogo} alt='utsa logo' id='utsa-logo'/>
            <Col> 
                <span id='hero-greeting'>
                    THIS IS <b>VAN</b>
                </span>
                <p>
                    I'm a Software Engineer born in <b>Vietnam</b> and raised in <b>Texas</b>, 
                    with a background in <b>Electrical and Computer Engineering</b> from UTSA. 
                    Over the past two years at General Motors, I've grown from a Software Test Engineer 
                    into a Software Engineer — building REST APIs, supporting cloud deployments, 
                    and contributing to a large-scale AngularJS-to-React migration.<br/><br/>

                    My QA roots shape how I build: I write code with reliability in mind, 
                    catch issues early, and care about shipping software that actually works. 
                    Now, I'm focused on growing further as a software engineer and joining a 
                    team where I can keep learning, move fast, and make an impact.
                </p>
            </Col>
        </Container>
    );
};

export default About;