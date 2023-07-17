import { Col, Container } from 'react-bootstrap';
import profile from '../static/images/profile.jpg';

const About = () => {
    return (
        <Container className='about-section' id='about'>
            <img src={profile} alt='profile'/>
            <Col className='about-me'>
                <h3>THIS IS <strong>ME</strong></h3>
                <p>
                    I am an ambitious recent graduate, born in <strong>Vietnam</strong> and 
                    raised in <strong>Texas</strong>, with a strong educational 
                    background in <strong>Electrical and Computer Engineering</strong> from 
                    UTSA. Passionate about Machine Learning, 
                    I am seeking a position that aligns with my expertise 
                    and allows me to contribute to innovative projects 
                    in this field. My desired titles include, 
                    but are not limited to:
                </p>
                <ul>
                    <li>Machine Learning Engineer/Researcher</li>
                    <li>Data Scientist</li>
                    <li>Software Engineer</li>
                </ul>
                <p>
                    However, I am open to exploring other opportunities 
                    that can foster both professional and personal growth. 
                    <br />
                    My commitment to client satisfaction drives me to 
                    continuously acquire new skills and adapt to diverse 
                    project requirements. I am dedicated to delivering 
                    high-quality work and ensuring that projects are 
                    completed to exceed client expectations. With a 
                    strong focus on organization, I maintain meticulous 
                    documentation and strive to create efficient and 
                    well-structured workspaces.
                </p>
            </Col>
        </Container>
    );
};

export default About;