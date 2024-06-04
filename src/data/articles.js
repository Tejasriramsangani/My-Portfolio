import React from "react";



function article_1() {
	return {
		date: "Feb 2024 - Present",
		title: " Software Engineer Internship",
		company:"Suthra Technologies",
		description:
		"Developed robust web applications using MongoDB, Express.js, React.js, and Node.js technologies.Designed database schemas and implemented CRUD operations for efficient data management.Created RESTful APIs with Express.js to handle client requests and ensure smooth backend communication.Fostered positive client relationships by gathering requirements, providing updates, and ensuring client satisfaction throughout project lifecycles.",
		style: ``,
		keywords: [
			"Software Engineer",
			"Teja",
			"Teja Sriram",
			"Teja Sriram Sangani",
		],
		body: (
			<React.Fragment>
				<h1>Software Engineer Internship in Suthra Technologies ,Vijayawada..</h1>
				<li>
					<ul>Developed robust web applications using MongoDB, Express.js, React.js, and Node.js technologies.</ul>
					<ul>Designed database schemas and implemented CRUD operations for efficient data management.</ul>
					<ul>Created RESTful APIs with Express.js to handle client requests and ensure smooth backend communication.</ul>
				</li>
				<p>also i am working in a Bank project and i have learn a lot of skills and imporve my self.</p>
			</React.Fragment>
		),
	};
	
}
function article_2() {
	return {
		date: "Apr 2023 - July 2023",
		title: "React.js and Node.js Developer Internship",
		company:"Train-A-Tech Technologies ",
		description:
			"In this internship I have done 2 real-time project regarding to this internship and I have learnt some skills like ReactJS, NodeJS, Express, HTML, CSS, JavaScript, REST APIs, Bootstrap frameworks.",
		keywords: [
			"Frontend and Backend Development",
			"Teja Sriram",
			"Teja Sriram S",
			"Teja Sriram Sangani",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<h2 className="paragraph">Content of React.js and Node.js Development</h2>
					{/* <img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/> */}
					<div>In this internship i have done 2 real-time projects. they are<br></br>
						1.Text to Speech and Speech to Text Converter.<br></br>
						2.Text to QRcode Generetor.
					</div>
				</div>
			</React.Fragment>
		),
	};
}

function article_3() {
	return {
		date: "Sep 2022 - Nov 2022",
		title: "AWS Cloud Virtual Internship",
		company:"AWS Academy",
		description:
			"In this Internship I have learn cloud operations and how to build a cloud functions and how attach the data and security tricks",
		style: ``,
		keywords: [
			"AWS Cloud Operations",
			"Teja",
			"Teja Sriram",
			"Teja Sriram Sangani",
		],
		body: (
			<React.Fragment>
				<h1>Content of AWS Cloud virtual internship</h1>
			</React.Fragment>
		),
	};
	
}


function article_4() {
	return {
		date: "Aug 2022 - Oct 2022",
		title: "Salesforce Developer Internship ",
		company:"SmartInternz ",
		description:
			"Learned Salesforce fundamentals, Apex, Testing, and Debugging, and Organizational setups.Developed proficiency in Salesforce fundamentals and Apex programming language. Acquired skills in testing and debugging Salesforce applications ",
		style: ``,
		keywords: [
			"AWS Cloud Operations",
			"Teja",
			"Teja Sriram",
			"Teja Sriram Sangani",
		],
		body: (
			<React.Fragment>
				<h1>Salesforce Developer Internship in SmartInternz</h1>
				<p>Learned Salesforce fundamentals, Apex, Testing, and Debugging, and Organizational setups.Developed proficiency in Salesforce fundamentals and Apex programming language. Acquired skills in testing and debugging Salesforce applications. </p>
			</React.Fragment>
		),
	};
	
}


const myArticles = [article_1, article_2, article_3, article_4];

export default myArticles;
