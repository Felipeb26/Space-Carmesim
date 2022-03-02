import React from 'react';

import logo from "../components/img/helmet.png";
import "../components/css/index.css";

function App() {
	return (
			<header>
				<div>
					<img className="logo" src={logo} alt="logo"></img>
				</div>
				<div>
					<h4 className="title">SPACE CARMESIN</h4>
				</div>
				<nav>
					<ul className="links">
						<li><a className="link" href='./contato'>HOME</a></li>
						<li><a className="link" >HOME</a></li>
						<li><a className="link">LOCALIZAÇÃO</a></li>
					</ul>
				</nav>
			</header>
	);
}

export default App;