import React from 'react';

import logo from "/";
import "../components/css/index.css";
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
						<li><a className="link" href='gwre'>ESTILOS</a></li>
						<li><Link className="link" to="home">CONTATO</Link></li>
						<li><a className="link" href='gwre'>QUEM SOMOS</a></li>
					</ul>
				</nav>
			</header>
	);
}

export default App;