import "./App.css";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Input from "./layout/Input";
import {nav} from "./data/nav";
import {inputData} from "./data/inputData";

function App() {
	return (
		<>
			<Header navigation={nav} />
			<main>
				<Input inputData={inputData} />
			</main>
			<Footer navigation={nav} />
		</>
	);
}

export default App;
