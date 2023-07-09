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
                        Predict the everchanging of stock prices by fetching 
                        historical data straight from Yahoo Finance. 
                        Demonstrate data preparation and the use of pandas 
                        dataframe for machine learning models.
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
                        Detect spoken language using input from 
                        the device's microphone. The main purpose is to 
                        determine language with no knowledge of what 
                        language is the speaker speaking in
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
                        Personal porfolio website that ultilized ReactJs 
                        and Bootstrap. 
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
