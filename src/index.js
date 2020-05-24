import React from 'react';
import { render } from "react-dom";

function App(props){
	
	return (
		<div>
			<div className="side-navigation-menu">
				<div className="side-menu-item">
					<a href="#my-profile"> <img className="side-menu-item-icon" src="assets/images/icons/iconUser.png" /></a>
				</div>
				<div className="side-menu-item">
					<a href="#education-details">
						<img className="side-menu-item-icon" src="assets/images/icons/iconEducation.png" />
					</a>
				</div>
				<div className="side-menu-item">
					<a href="#work-details"><img className="side-menu-item-icon" src="assets/images/icons/iconWork.png" /></a>
				</div>
				<div className="side-menu-item">
					<a href="#hobbies"><img className="side-menu-item-icon" src="assets/images/icons/iconHobbies.png" /></a>
				</div>
			</div>
			<div className="page-container">
				
				<div id="my-profile">
					<div style={{width: '100%', height: '100%', position: 'absolute', top: '0', left: '0', right: 0, bottom: 0, zIndex: -1, opacity: 0.5}}>
						<img style={{width: '100%', height: '100%', objectFit: 'cover'}} src="assets/images/pictures/imgPic1.jpg" />
					</div>
					
					<h1>Hey there...</h1>
					<p id="name">SARAVANA KUMAR K R</p>
					<p id="about-me">Mobile application developer</p>
				</div>
				
				<div id="education-details">
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
				
				<div id="work-details">
					<h1 className=" main-heading">Work Details:</h1>
					<div>
						<a href="https://www.experionglobal.com/" target="_blank">
							<h1 className="work-details-sub-heading">Experion Technologies, Technopark, Trivandrum</h1>
						</a>
						<h2 className="work-details-sub-heading">Mobile Application Developer</h2>
						<h4 className="work-details-duration">Feb 2019 - present(1y 1m)</h4>
						
						<div className="projects-container">
							<h2 className="projects-text">projects:</h2>
							<div className="projects-sub-container-right">
								
								<div>
									<h2>MapHabit</h2>
									<h3>A React-Native application for people with dementia to help with activities in their
										life with
										the help of a virtual support partner.</h3>
									
									<div>
										<a href="https://apps.apple.com/us/app/maphabit/id1466187296" target="_blank">
											<img style={{width: '30px',height: '30px'}} src="assets/images/icons/iconApple.png" />
										</a>
										<a href="https://play.google.com/store/apps/details?id=com.maphabitmobileapp&hl=en_IN"
										   target="_blank">
											<img style={{width: '30px', height: '30px'}}
											     src="assets/images/icons/iconAndroid.png" />
										</a>
									</div>
								
								</div>
							
							</div>
						</div>
					</div>
					
					
					<div>
						<a href="https://www.zoondia.com/" target="_blank">
							<h1 className="work-details-sub-heading">Zoondia Software, Technopark, Trivandrum</h1>
						</a>
						<h2 className="work-details-sub-heading">iOS & Android Mobile Application Developer</h2>
						<h4 className="work-details-duration">Dec 2015 – Feb 2019(3y 3m)</h4>
						
						<div className="projects-container">
							<h2 className="projects-text">projects:</h2>
							<div className="projects-sub-container-right">
								
								<div>
									<h2>MATCHBOXX</h2>
									<h3>A social networking iOS application where you could meet sport enthusiasts, such as
										Coach,
										Teams, Fans and interact with them over personal and group chat, post on their feeds,
										follow them, comment on their feeds and most importantly you could schedule matches
										between users or teams.</h3>
								
								</div>
								
								<div>
									<h2>PLANSMILE</h2>
									<h3>An iOS offline medical application used to analyze, and provide treatment solutions in
										the form of PDF reports.</h3>
								</div>
								
								<div>
									<h2>BIZCLIPS</h2>
									<h3>A professional social networking iOS application where you could publicize job openings
										if you are an entrepreneur, or market your skills as a job seeker using Videos as the
										media of communication.</h3>
									
									<div>
										<a href="https://apps.apple.com/il/app/bizclips/id1315696803" target="_blank">
											<img style={{width: '30px', height: '30px'}} src="assets/images/icons/iconApple.png" />
										</a>
									
									</div>
								</div>
								
								<div>
									<h2>SAP</h2>
									<h3>An iOS application used to authenticate users in a SAP technical event using QR code and
										REST API
										authentication.</h3>
								</div>
								
								<div>
									<h2>HASANAT</h2>
									<h3>An application used for donation based crowdfunding for middle east location. It
										includes features like Payment Gateway.</h3>
									
									<div>
										<a href="https://apps.apple.com/us/app/%D8%AD%D8%B3%D9%86%D8%A7%D8%AA-hasanat/id1223319991"
										   target="_blank">
											<img style={{width: '30px', height: '30px'}} src="assets/images/icons/iconApple.png" />
										</a>
										<a href="https://play.google.com/store/apps/details?id=com.applab.hasanat&hl=en_IN"
										   target="_blank">
											<img style={{width: '30px', height: '30px'}}
											     src="assets/images/icons/iconAndroid.png" />
										</a>
									</div>
								</div>
								
								<div>
									<h2>EDUCATION ABOVE ALL</h2>
									<h3>An application used for donation based crowdfunding for middle east location. It
										includes features like Payment Gateway.</h3>
								</div>
								
								<div>
									<h2>QATAR CANCER SOCIETY</h2>
									<h3>An application used for donation based crowdfunding for middle east location. It
										includes features like Payment Gateway.</h3>
									
									<div>
										<a href="https://apps.apple.com/us/app/qatar-cancer-society/id1448365698"
										   target="_blank">
											<img style={{width: '30px', height: '30px'}} src="assets/images/icons/iconApple.png" />
										</a>
										<a href="https://play.google.com/store/apps/details?id=com.applab.QCS&hl=en_US"
										   target="_blank">
											<img style={{width: '30px', height: '30px'}}
											     src="assets/images/icons/iconAndroid.png" />
										</a>
									</div>
								</div>
								
								<div>
									<h2>YOU GOT A GIFT</h2>
									<h3>An iOS application to send gift cards to your friends and family to use in authorised
										stores.</h3>
									
									<div>
										<a href="https://apps.apple.com/ae/app/yougotagift-com/id1003784085" target="_blank">
											<img style={{width: '30px', height: '30px'}} src="assets/images/icons/iconApple.png" />
										</a>
									</div>
								</div>
								
								<div>
									<h2>DIETHUB</h2>
									<h3>A client application for customers who are subscribed to DietHub services. It includes a
										private virtual online coach to monitor your health and diet. Also includes personal
										chat.</h3>
									
									<div>
										<a href="https://itunes.apple.com/qa/app/diethub/id1220736852?mt=8)" target="_blank">
											<img style={{width: '30px', height: '30px'}} src="assets/images/icons/iconApple.png" />
										</a>
										<a href="https://play.google.com/store/apps/details?id=com.makers.diethub"
										   target="_blank">
											<img style={{width: '30px', height: '30px'}}
											     src="assets/images/icons/iconAndroid.png" />
										</a>
									</div>
								</div>
								
								<div>
									<h2>DIETHUB Coach</h2>
									<h3>A client application for Coach who act as virtual coaches to DietHub users, having
										featured to set diet and monitor them including personal chat (audio, image, text) for
										communication.</h3>
									
									<div>
										<a href="https://itunes.apple.com/qa/app/diethub-coach/id1257393544?mt=8"
										   target="_blank">
											<img style={{width: '30px', height: '30px'}} src="assets/images/icons/iconApple.png" />
										</a>
										<a href="https://play.google.com/store/apps/details?id=com.makers.diethubcoach"
										   target="_blank">
											<img style={{width: '30px', height: '30px'}}
											     src="assets/images/icons/iconAndroid.png" />
										</a>
									</div>
								</div>
							
							</div>
						</div>
					</div>
					
					<div>
						<a href="https://www.dhisigma.com/" target="_blank">
							<h1 className="work-details-sub-heading">DHI Logics, Kaloor, Ernakulam</h1>
						</a>
						<h2 className="work-details-sub-heading">Javascript Developers</h2>
						<h4 className="work-details-duration">April 2015 – Oct 2015(5m)</h4>
						
						<div className="projects-container">
							<h2 className="projects-text">projects:</h2>
							<div className="projects-sub-container-right">
								
								<div>
									<h2>DHI Cubes</h2>
									<h3>Design and Develop UI pages for websites using DHI Cubes, an interactive customizable
										web front end design and
										development tool. Languages used: Java, Javascript, C++</h3>
								
								</div>
							
							</div>
						</div>
					</div>
					
					<div>
						<h1 className="work-details-sub-heading">FREELANCE CONSULTANT since graduation</h1>
						<h2 className="work-details-sub-heading">iOS, Android and React-Native.</h2>
						
						<div className="projects-container">
							<h2 className="projects-text">projects:</h2>
							<div className="projects-sub-container-right">
								
								<div>
									<h2>ONEPORT</h2>
									<h3>An iOS application to be used by employees and residents of OnePort settlements in Qatar
										for flat
										maintenance.</h3>
									
									<div>
										<a href="https://apps.apple.com/us/app/oneport/id1486790154" target="_blank">
											<img style={{width: '30px', height: '30px'}} src="assets/images/icons/iconApple.png" />
										</a>
									</div>
								</div>
								
								<div>
									<h2>AL JNOUB</h2>
									<h3>A React-Native application to reserve camping ground in the southern reserve of Qatar.
									</h3>
									
									<div>
										<a href="https://apps.apple.com/in/app/%D9%85%D8%AD%D9%85%D9%8A%D8%A9-%D8%A7%D9%84%D
8%AC%D9%86%D9%88%D8%A8/id1440043523" target="_blank">
											<img style={{width: '30px', height: '30px'}} src="assets/images/icons/iconApple.png" />
										</a>
										<a href="https://play.google.com/store/apps/details?id=com.applab.aljnoub"
										   target="_blank">
											<img style={{width: '30px', height: '30px'}}
											     src="assets/images/icons/iconAndroid.png" />
										</a>
									</div>
								</div>
								
								<div>
									<h2>EMPORIUM</h2>
									<h3>An e-commerce React-Native application for GCC by emporium group.</h3>
								</div>
							
							</div>
						</div>
					</div>
				</div>
				
				
				<div id="hobbies">
					<h1 className=" main-heading">Hobbies:</h1>
					
					<ul>
						<li className="hobbies-title">
							<h1>Cycling</h1>
							<p className="hobbies-description">I recently started cycling as an alternative for exercise, but now it
								kind of changed into a hobby
								which I could not let go.</p>
						</li>
					</ul>
				
				</div>
				
			</div>
		</div>
	)
}



render(<App/>, document.getElementById('app'))
