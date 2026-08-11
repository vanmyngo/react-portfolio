import { Container } from 'react-bootstrap';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {
    TbBrandCss3,
    TbBrandHtml5,
    TbBrandJavascript,
    TbBrandPython,
    TbBrandGithub,
    TbBrandVercel,
    TbBrandDocker,
    TbBrandNextjs,
    TbBrandReact,
} from 'react-icons/tb';
import {
    FaJava,
    FaNodeJs,
} from 'react-icons/fa';
import { 
    SiGithubactions, 
    SiKubernetes,
    SiConfluence,
    SiJira,
    SiSelenium,
} from 'react-icons/si';

// Map icon names (as used in the data files) to the actual icon components.
const iconMap = {
    TbBrandCss3,
    TbBrandHtml5,
    TbBrandJavascript,
    TbBrandPython,
    TbBrandGithub,
    TbBrandVercel,
    TbBrandDocker,
    TbBrandNextjs,
    TbBrandReact,
    SiJira,
    SiConfluence,
    SiKubernetes,
    SiGithubactions,
    SiSelenium,
    FaJava,
    FaNodeJs,
};

// number of items depend on screen size
const responsive = {
    1265: { items: 11 },
    870: { items: 7 },
    767: { items: 5 },
    512: { items: 3 },
    0: { items: 1 },
};

const SkillCarousel = ({ title, data }) => {
    const items = data.map((skill) => {
        const Icon = iconMap[skill.icon];
        return (
            <Container key={skill.name}>
                {Icon && <Icon className='language-icon' size={42} />}<br/>
                <p>{skill.name}</p>
            </Container>
        );
    });

    return (
        <Container id={title.toLowerCase().replace(/\s+/g, '-')}>
            <h2>{title}</h2>
            {items.length > 0 && (
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
            )}
        </Container>
    );
};

export default SkillCarousel;