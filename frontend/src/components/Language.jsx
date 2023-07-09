
import { Container } from 'react-bootstrap';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { 
    TbBrandCpp, 
    TbBrandCss3, 
    TbBrandHtml5, 
    TbBrandJavascript, 
    TbBrandPython, 
} from 'react-icons/tb';
import { SiReact } from 'react-icons/si';

const Language = () => {
    
    // List of program languages
    const items = [
        <Container>
            <TbBrandPython className='language-icon' size={42}/><br/>
            <p>
                <strong>Python</strong><br />
                Junior
            </p>
        </Container>,
        <Container>
            <TbBrandCpp className='language-icon' size={42}/><br/>
            <p>
                <strong>Cpp</strong><br />
                Beginner
            </p>
        </Container>,
        <Container>
            <TbBrandCss3 className='language-icon' size={42}/><br/>
            <p>
                <strong>CSS</strong><br />
                Beginner
            </p>
        </Container>,
        <Container>
            <TbBrandJavascript className='language-icon' size={42}/><br/>
            <p>
                <strong>Javascript</strong><br />
                Beginner
            </p>
        </Container>,
        <Container>
            <TbBrandHtml5 className='language-icon' size={42}/><br/>
            <p>
                <strong>HTML</strong><br />
                Beginner
            </p>
        </Container>,
        <Container>
            <SiReact className='language-icon' size={42}/><br/>
            <p>
                <strong>ReactJS</strong><br />
                Beginner
            </p>
        </Container>,
    ];
    
    // number of items depend on screen size
    const responsive = {
        1265: {
            items: 11,
        },
        870: {
            items: 7,
        },
        767: {
            items: 5,
        },
        512: {
            items: 3,
        },
        0: {
            items: 1,
        },
    };

    return (
        <Container className='language-section' id='language'>
            <h3>MY <strong>SKILLS</strong></h3>
            <AliceCarousel 
            infinite
            autoPlay
            disableButtonsControls
            disableDotsControls
            mouseTracking
            autoPlayInterval={1500}
            items={items}
            responsive={responsive}
            touchTracking
            />
        </Container>
    );
};

export default Language;