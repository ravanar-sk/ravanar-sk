import React from "react";
import './style.css';
import {experience} from './data';
import Company from "./Company";

export default function Work(props){
	const companyUIs = experience.map((companyObj, index)=>{
		const {company, location, title, url, duration, projects} = companyObj;
		return <Company key={index}
		                company={company}
		                location={location}
		                url={url}
		                title={title}
		                duration={duration}
		                projects={projects}/>
	});
	return (
		<section className="experience">
			<h1 className='section-header'>Work Details</h1>
			{companyUIs}
		</section>
	)
}