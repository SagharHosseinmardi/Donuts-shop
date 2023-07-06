import { Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import MainPage from "./pages/main-page/MainPage";



const App = () => (
	<div className="main">
		<MainPage />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about/this/site" element={<About />} />
		</Routes>
	</div>
);

export default App;

{/* <div className="App">
	<BrowserRouter>
		<Header />
		<Routes>
			<Route path="/" element={<FrontPage />} />
			<Route path="/about" element={<About />} />
			<Route path="/projects" element={<Projects />} />
			<Route path="/skills" element={<Skills />} />
			<Route path="/jobs" element={<Jobs />} />
		</Routes>
	</BrowserRouter>
	<Footer />
</div>; */}