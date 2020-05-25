import React from "react";
import Project from './Project';

export default function Company(props) {
	const {company, location, url, title, duration, projects} = props;
	
	const projectUIs = projects ? projects.map((projectObj, index)=>{
		const {title:projectTitle, description, urls} = projectObj;
		return <Project title={projectTitle} description={description} urls={urls} key={index}/>
	}): null;
	
	return (
		<div className='company'>
			<div className='company-header'>
				<div className='company-info'>
					<div className='company-name'>
						<a href={url} target='blank'><h2>{title}</h2></a>
						<div className='company-title-location'>
							<h4>{company}</h4> &nbsp;|&nbsp;<h4>{location}</h4>
						</div>
					</div>
				</div>
				
				<span className='company-duration'>{duration}</span>
			</div>
			
			<div className="projects-container">
				<h4>projects</h4>
				<div className="projects">
					{projectUIs}
				</div>
			</div>
		</div>
	);
}