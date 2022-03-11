import React from "react";
import { Link } from "react-router-dom";

function Select() {
	return (
		<ul className="styles">
			<li className="stylesOption">
				<Link className="link" to="/estilos">
					todos
				</Link>
			</li>
			<li className="stylesOption">
				<Link className="link" to="/estilos?estilo=anime">
					animes
				</Link>
			</li>
			<li className="stylesOption">
				<Link className="link" to="/estilos?estilo=colorida">
					coloridas
				</Link>
			</li>
			<li className="stylesOption">
				<Link className="link" to="/estilos?estilo=realista">
					realista
				</Link>
			</li>
			<li className="stylesOption">
				<Link className="link" to="/estilos?estilo=preto-branco">
					preto e branco
				</Link>
			</li>
		</ul>
	);
}

export default Select;
