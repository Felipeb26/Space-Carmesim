import React from "react";
import "assets/css/cadastro.css";
import HEADER from "components/html/header";
import FOOTER from "components/html/footer";
import PESQUISA from "components/cadastro/pesquisa";
import CreateUpdate from "components/cadastro/form";

function Cadastrar() {
	document.addEventListener("keydown", function (e) {
		if (e.ctrlKey && e.shiftKey && e.key === "E") {
			window.location.assign("/Space-Carmesim/");
		}
	});
	return (
		<>
			<HEADER />
			<div className="cardsDeleteUpdate">
			<CreateUpdate/>
			<PESQUISA/>
			</div>
			<FOOTER />
		</>
	);
}

export default Cadastrar;
