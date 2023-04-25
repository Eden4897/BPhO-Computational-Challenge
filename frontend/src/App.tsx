import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';

function App() {
	return (
		<React.StrictMode>
			<div className="App">
				<BrowserRouter>
					<Navbar />
					<Routes>
						<Route path="/about">{/* <About /> */}</Route>
						<Route path="/contact">{/* <Contact /> */}</Route>
						<Route path="/">{/* <Home /> */}</Route>
					</Routes>
				</BrowserRouter>
			</div>
		</React.StrictMode>
	);
}

export default App;
