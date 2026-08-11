import SkillCarousel from './SkillCarousel';
import languagesAndFrameworks from '../data/languages-frameworks';
import toolsAndInfastructure from '../data/tools-infrastructure';
import { Container } from 'react-bootstrap';

const Language = () => {
    return (
        <Container className="language-section" id="language">
            <SkillCarousel title="LANGUAGES & FRAMEWORKS" data={languagesAndFrameworks} />  
            <SkillCarousel title="TOOLS & INFRASTRUCTURE" data={toolsAndInfastructure} />
        </Container>
    );
};

export default Language;