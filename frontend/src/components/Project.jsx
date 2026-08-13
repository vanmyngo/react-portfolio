import { Container } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProjectCard from './ProjectCard';
import projects from '../data/projects';


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
            <h2>WALL OF <b>ACHIEVEMENTS</b></h2>
            {console.log(projects.map((project) => project.title))}
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
                {/* FIXME: carousel not working */}
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </Carousel>
        </Container>
    );
};

export default Project;
