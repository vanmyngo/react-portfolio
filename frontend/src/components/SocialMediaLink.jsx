import { Row } from 'react-bootstrap';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const SocialMediaLink = () => {
    return (
        <Row>
            <ul className='social-link'>
                <li className='social-icon'>
                    <a 
                    href='https://www.linkedin.com/in/vanmyngo'
                    target='_blank'
                    rel='noreferrer'
                    aria-label='LinkedIn profile'
                    >
                        <FaLinkedinIn />
                    </a>
                </li>
                <li className='social-icon'>
                    <a 
                    href='https://github.com/vanmyngo'
                    target='_blank'
                    rel='noreferrer'
                    aria-label='GitHub profile'
                    >
                        <FaGithub />
                    </a>
                </li>
            </ul>
        </Row>
    );
};

export default SocialMediaLink;