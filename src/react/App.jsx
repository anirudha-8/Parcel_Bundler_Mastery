import React, { useState } from "react";
import parcelLogo from "../images/image.png";
const App = () => {
	const [state, setState] = useState(false);
	return (
		<div>
			<h2
				onClick={() => {
					setState(!state);
				}}
			>
				What is state?: {state.toString()};
			</h2>
			<img src={parcelLogo} alt="parcel bundler logo" width={400} />
		</div>
	);
};

export default App;
