import React, { useState } from "react";
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
	}

	a {
		font-size: 18px;
		color: #e3e3e3;
		margin-bottom: 2rem;
		text-decoration: none;
	}
`;

const App = () => {
	const [state, setState] = useState(false);
	return (
		<Container>
			<h2
				onClick={() => {
					setState(!state);
				}}
			>
				What is state?: {state.toString()};
			</h2>
			<a href="./index.html">Home</a>
			<a href="./vue.html">Go to the Vue App...</a>
			<img src={parcelLogo} alt="parcel bundler logo" width={400} />
		</Container>
	);
};

export default App;
