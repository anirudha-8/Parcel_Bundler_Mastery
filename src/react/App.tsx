import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import parcelLogo from "../images/image.png";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	place-items: center;
	background-color: midnightblue;
	color: cornflowerblue;
	font-family: sans-serif;
	width: 600px;
	padding: 40px;

	h2 {
		font-size: 50px;
		cursor: pointer; /* Added cursor for better UX */
	}

	a {
		font-size: 18px;
		color: #e3e3e3;
		margin-bottom: 2rem;
		text-decoration: none;

		&:hover {
			color: #ffffff; /* Hover effect */
		}
	}

	img {
		margin-top: 20px;
		border-radius: 8px; /* Slight border-radius for a polished look */
	}
`;

const App = () => {
	const [isToggled, setIsToggled] = useState(false);

	return (
		<Router>
			<Container>
				<h2 onClick={() => setIsToggled(!isToggled)}>
					What is state?: {isToggled.toString()}
				</h2>
				<Link to="/">Home</Link>
				<Link to="/vue">Go to the Vue App...</Link>
				<img
					src={parcelLogo}
					alt="Parcel Bundler Logo"
					width={400}
					onError={(e) => (e.target.src = "fallback-image.png")} // Fallback image
				/>
			</Container>

			{/* Add your Route components here */}
			<Route exact path="/" component={HomePage} />
			<Route path="/vue" component={VueAppPage} />
		</Router>
	);
};

const HomePage = () => <div>Welcome to the Home Page</div>;
const VueAppPage = () => <div>This is the Vue App Page</div>;

export default App;
