import { Container } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaGithub } from 'react-icons/fa';
import stockPrediction from '../static/images/stock-prediction.webp';
import langPrediction from '../static/images/language-prediction.png';
import portfolio from '../static/images/portfolio.png';


const Project = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <Container className='project-section' id='project'>
            <h3>MY <strong>PROJECTS</strong></h3>
            <Carousel 
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            >
                <div className='project-card'>
                    <img src={stockPrediction} alt='stock market trend' />
                    <h6>Stock Prediction</h6>
                    <p>
                        <strong>Python</strong><br />
                        Developed a stock price prediction project that 
                        leverages historical data fetched directly from 
                        Yahoo Finance. The project aims to forecast the 
                        everchanging stock prices using machine learning 
                        techniques.
                    </p>
                    <a 
                    href='https://github.com/vanmyngo/stock-predictor'
                    target='_blank'
                    rel='noreferrer'
                    >
                        <FaGithub />
                        &nbsp;
                        Github
                    </a>
                </div>
                <div className='project-card'>
                    <img src={langPrediction} alt='predict language from script' />  
                    <h6>Language Detection</h6>
                    
                    <p>
                        <strong>Python</strong><br />
                        Developed a real-time language detection and 
                        translation system as a personal portfolio project. 
                        The system takes input from a microphone and 
                        accurately detects the spoken language from a pool 
                        of languages. It then automatically translates the 
                        phrase into English if it is not already in English. 
                        Integrated popular translation APIs to enable 
                        seamless and accurate translation of the detected 
                        language into English.
                    </p>
                    <a 
                    href='https://github.com/vanmyngo/language-detection'
                    target='_blank'
                    rel='noreferrer'
                    >
                        <FaGithub />
                        &nbsp;
                        Github
                    </a>
                </div>
                <div className='project-card'>
                    <img src={portfolio} alt='loading' />  
                    <h6>Personal Portfolio</h6>
                    <p>
                        <strong>JSX | CSS</strong><br />
                        Utilized ReactJS to create a dynamic and responsive 
                        user interface, enhancing the user experience with 
                        smooth transitions and interactive components. 
                        Employed modern web development practices, including 
                        component-based architecture, state management, 
                        and routing, to ensure scalability and maintainability 
                        of the website.
                    </p>
                    <a 
                    href='https://github.com/vanmyngo/react-portfolio'
                    target='_blank'
                    rel='noreferrer'
                    >
                        <FaGithub />
                        &nbsp;
                        Github
                    </a>
                </div>
            </Carousel>
        </Container>
    );
};

export default Project;
