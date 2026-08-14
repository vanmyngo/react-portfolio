import React from 'react';

const ProjectCard = ({ project }) => {
    return (
        <section className='project-card'>
            <img
                src={require(`../static/images/${project.title}.png`)}
                alt={project.title}
                className='project-card-image'
            />
            <b>{project.title}</b>
            {project.description}
            <div className='project-card-link'>
                <a 
                    href={project.githubUrl}
                    target='_blank'
                    rel='noreferrer'
                >
                    [Github]
                </a>
                <a
                    href={project.liveDemoUrl}
                    target='_blank'
                    rel='noreferrer'
                >
                    [Live Demo]
                </a>
            </div>
        </section>
    );
};

export default ProjectCard;
