import React from 'react';

import logo from "components/img/helmet.png";
import "assets/css/header.css";
import { Link } from 'react-router-dom';

function App() {
	return (
			<header>
				<div>
					<Link to="/"><img className="logo" src={logo} alt="logo"></img></Link>
				</div>
				<div>
					<h4 className="title">SPACE CARMESIN</h4>
				</div>
				<nav>
					<ul className="links">
						<li><Link className="link" to="/">HOME</Link></li>
						<li><Link className="link" to="/estilos">ESTILOS</Link></li>
						<li><Link className="link" to="/contato">CONTATO</Link></li>
						<li><Link className="link" to="/quemsomos">QUEM SOMOS</Link></li>
					</ul>
				</nav>
			</header>
	);
}

export default App;