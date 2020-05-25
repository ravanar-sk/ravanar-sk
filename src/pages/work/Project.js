import React from "react";

function ProjectUrl(props){
	const {url, iconUrl} = props;
	return (
		<a href={url} target="_blank">
			<img style={{width: '30px',height: '30px'}} src={iconUrl} />
		</a>
	)
}

export default function Project(props){
	const {title, description, urls} = props;
	
	const urlUi = urls ? urls.map((urlObj, index)=>{
		const {url, icon} = urlObj
		return (
			<div className='project-link' key={index}>
				<ProjectUrl url={url} iconUrl={icon} />
			</div>
		);
	}): null;
	
	return (
		<div className='project'>
			<div className='project-title'>
				<h3>{title}</h3>
			</div>
			<p className='project-description'>{description}</p>
			<div className='project-links'>
				{urlUi}
			</div>
		</div>
	)
}