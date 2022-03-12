import React from "react";
import { Link } from "react-router-dom";

function Select() {
	return (
		<div>
			<ul className="styles">
				<ol className="stylesOption">
					<Link className="link" to="/estilos">
						todos
					</Link>
				</ol>
				<ol className="stylesOption">
					<Link className="link" to="/estilos?estilo=anime">
						{window.location.reload}
						animes
					</Link>
				</ol>
				<ol className="stylesOption">
					<Link className="link" to="/estilos?estilo=colorida">
						coloridas
					</Link>
				</ol>
				<ol className="stylesOption">
					<Link className="link" to="/estilos?estilo=realista">
						realista
					</Link>
				</ol>
				<ol className="stylesOption">
					<Link className="link" to="/estilos?estilo=preto-branco">
						preto e branco
					</Link>
				</ol>
			</ul>
		</div>
	);
}

export default Select;
