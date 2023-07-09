import { Col, Container } from 'react-bootstrap';
import profile from '../static/images/profile.jpg';

const About = () => {
    
    return (
        <Container className='about-section' id='about'>
            <img src={profile} alt='profile'/>
            <Col className='about-me'>
                <h3>THIS IS <strong>ME</strong></h3>
                <p>A little about me, I was born in <strong>Vietnam</strong> and grow up  
                    in <strong>Texas</strong>. I'm a recent grad, with a BS in <strong>Electrical and 
                    Computer Engineering</strong> from UTSA, that's looking for a 
                    position suited for my experience in Machine Learning. 
                    My desired title include but are not limited to:</p>
                <ul>
                    <li>Machine Learning Engineer/Researcher</li>
                    <li>Data Scientist</li>
                    <li>Software Engineering</li>
                </ul>
                <p>I'm open to any other opportunities that can help me 
                    develop professionally and personally.
                    In my free time, I enjoy various hobbies such as:</p>
                <ul>
                    <li>Play games</li>
                    <li>Watch movies</li>
                    <li>Learn foreign languages</li>
                </ul>
            </Col>
        </Container>
    );
};

export default About;