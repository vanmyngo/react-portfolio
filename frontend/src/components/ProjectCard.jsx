import React from 'react';

const ProjectCard = ({ project }) => {
    return (
        <section className='project-card'>
            <img
                src={require(`../static/images/${project.title}.png`)}
                alt={project.title}
                className='project-card-image'
            />
            <div xs='auto' className='project-card-header'>
                <h2 className='project-card-title'><b>{project.title}</b></h2>
                <div className='project-card-link'>
                    <a 
                        href={project.githubUrl}
                        target='_blank'
                        rel='noreferrer'
                    >
                        [ Github ]
                    </a>
                    <a
                        href={project.liveDemoUrl}
                        target='_blank'
                        rel='noreferrer'
                    >
                        [ Live Demo ]
                    </a>
                </div>
            </div>
            <p className='project-card-description'>
                OVERVIEW <br/>
                {project.description}
            </p>
            <p className='project-card-technologies'>
                TECH STACK <br/>
                {project.technologies.join(', ')}
            </p>
        </section>
    );
};

export default ProjectCard;
