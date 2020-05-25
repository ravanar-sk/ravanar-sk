import React, {useRef, useState} from 'react';
import { render } from "react-dom";

import Home from './pages/home'
import Education from './pages/education'
import Work from "./pages/work";
import Hobbies from "./pages/hobbies";
import Navigation from "./navigation";

import './skin.css';
import './app.css';


function App(props){
	const homeRef = useRef(null);
	const eduRef = useRef(null);
	const workRef = useRef(null);
	const hobbiesRef = useRef(null);
	//const [currentPage, setCurrentPage] = useState('home')
	
	function navClickHandler(page){
		console.log(page);
		//setCurrentPage(page);
		let domElement;
		if(page == 'home'){
			domElement = homeRef.current;
		} else if(page == 'education'){
			domElement = eduRef.current;
		} else if(page == 'work'){
			domElement = workRef.current;
		} else {
			domElement = hobbiesRef.current;
		}
		if(domElement){
			domElement.scrollIntoView({
				behavior: "smooth",
				block: "start",
				inline: "nearest"
			});
		}
	}
	return (
		<>
			<Navigation className="navigation" onChange={navClickHandler}/>
			<div className="page-container">
				<div ref={homeRef}><Home/></div>
				<div ref={eduRef}><Education/></div>
				<div ref={workRef}><Work/></div>
				<div ref={hobbiesRef}><Hobbies/></div>
			</div>
		</>
	)
}

render(<App/>, document.getElementById('app'))
