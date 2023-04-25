import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import KeplerComp from './kepler/kepler';
import Navbar from './navbar/navbar';

function App() {
	return (
		<React.StrictMode>
			<div className="App">
				<BrowserRouter>
					<Navbar />
					<Routes>
						<Route path="/keplers-third-law" element = {<KeplerComp/>}></Route>
					</Routes>
				</BrowserRouter>
			</div>
		</React.StrictMode>
	);
}

export default App;
