import React from "react";
import './style.css';

export default function Education(props){
	return (
		<div className="education-details">
			<h1 className=" main-heading">Education Details:</h1>
			<div>
				<h1 className="education-sub-heading">B.Tech - Computer Science - from Kerala University</h1>
				<h2 className="education-description"> I studied at UKF College of Engineering and Technology affiliated to
					Kerala University.</h2>
			</div>
			
			<div>
				<h1 className="education-sub-heading">12th - Science - Maths -Computer Science - CBSE</h1>
				<h2 className="education-description"> I studied at Sree Narayana Trusts Central School, Kollam.</h2>
			</div>
			
			<div>
				<h1 className="education-sub-heading">10th - Science - Maths - CBSE</h1>
				<h2 className="education-description"> I studied at Sree Narayana Trusts Central School, Kollam.</h2>
			</div>
		</div>
	)
}