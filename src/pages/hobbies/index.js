import React from "react";
import './style.css';
import {hobbies} from './data';

export default function Hobbies(props){
	const ui = hobbies.map((hobbyObj, index)=>{
		const {title, description} = hobbyObj;
		return (
			<div className='hobby' key={index}>
				<h3>{title}</h3>
				<div className='hobby-description'>
					{description}
				</div>
			</div>
		)
	});
	
	return (
		<section className="hobbies">
			<h1 className="section-header">Hobbies</h1>
			{ui}
		</section>
	)
}