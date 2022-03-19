import React from "react";
import { useNavigate } from "react-router-dom";

function Select() {
	let navigate = useNavigate();
	function handleChange(value) {
		navigate(`${value}`);
		value = "";
	}
	return (
		<>
			<select
				className="styles"
				onChange={(event) => handleChange(event.target.value)}
			>
				<option className="Link">ESTILOS</option>
				<option className="Link" value="/estilos">
					TODOS
				</option>
				<option className="Link" value="/estilos/estilo=anime">
					ANIME
				</option>
				<option className="Link" value="/estilos/estilo=colorida">
					COLORIDA
				</option>
				<option className="Link" value="/estilos/estilo=realista">
					REALISTA
				</option>
				<option className="Link" value="/estilos/estilo=preto-branco">
					PRETO E BRANCO
				</option>
			</select>
		</>
	);
}

export default Select;
