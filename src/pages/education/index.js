import React from "react";
import './style.css';
import {academics} from './data';

export default function Education(props){
	const ui = academics.map((academicObj, index)=>{
		const {degree, discipline, board, institution, location} = academicObj;
		return (
			<div className='education' key={index}>
				<h2>{degree} - {discipline} - {board}</h2>
				<div className='education-location'>
					<h4>{institution}, {location}</h4>
				</div>
			</div>
		)
		
	})
	return (
		<section className="academics">
			<h1 className='section-header'>Education Details</h1>
			{ui}
		</section>
	)
}