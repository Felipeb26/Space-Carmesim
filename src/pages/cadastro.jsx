import React from "react";
import "assets/css/cadastro.css";
import HEADER from "components/html/header";
import FOOTER from "components/html/footer";
import INPUT from "components/html/inputFile";

function Cadastrar() {
	document.addEventListener("keydown", function (e) {
		let link = "/";
		if (e.ctrlKey && e.shiftKey && e.key === "E") {
			window.location.assign(link);
		}
	});
	return (
		<>
			<HEADER />
			<div className="cardCadastro">
				<div className="formCadastro">
					<h3>Nome Da Imagem</h3>
					<input className="nameImg" type="text" />
					<INPUT />
					<select className="nameImg">
						<option></option>
						<option value="1">PRETO E BRANCO</option>
						<option value="2">REALISTA</option>
						<option value="3">COLORIDA</option>
						<option value="4">ANIME</option>
					</select>
				</div>
				<div className="btnsCadastro">
					<button className="btnReset">apagar</button>
					<button className="btnEnvio">enviar</button>
				</div>
			</div>
			<FOOTER />
		</>
	);
}

export default Cadastrar;
