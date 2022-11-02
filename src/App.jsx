import { useState } from "react";
import cevidevsLogo from "./assets/cevidevs.svg";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<div>
				<a href="https://reactjs.org" target="_blank">
					<img src={cevidevsLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Cevidevs Peru Community</h1>
		</div>
	);
}

export default App;
