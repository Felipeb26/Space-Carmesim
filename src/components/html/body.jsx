import React from "react";
import "assets/css/body.css";

import tato1 from "assets/img/tato1.WebP";
import tato2 from "assets/img/tato2.png";
import tato3 from "assets/img/tato3.WebP";

import TATO from "assets/img/tatuagem.png";
import TATO1 from "assets/img/tatuagem1.png";
import TATO2 from "assets/img/tatuagem2.WebP";
import TATO3 from "assets/img/tatuagem3.WebP";

function Corpo() {
	document.addEventListener("keydown", function (e) {
		if (e.ctrlKey && e.shiftKey && e.key === "E") {
			window.location.assign("/Space-Carmesim/cadastro");
		}
	});

	return (
		<>
			<div className="card">
				<div className="corpo">
					<div className="title">
						<h3>ULTIMAS REALIZADAS</h3>
					</div>
					<div className="imgs">
						<img className="img" src={tato1} alt="tatuagem"></img>
						<img className="img" src={tato2} alt="tatuagem"></img>
						<img className="img" src={tato3} alt="tatuagem"></img>
					</div>
				</div>
			</div>

			<div className="listaTato">
				<div className="divImgLista">
					<img className="imgLista" src={TATO} alt="tatuagem"></img>
				</div>
				<div className="divImgLista">
					<img className="imgLista" src={TATO1} alt="tatuagem"></img>
				</div>
				<div className="divImgLista">
					<img className="imgLista" src={TATO2} alt="tatuagem"></img>
				</div>
				<div className="divImgLista">
					<img className="imgLista" src={TATO3} alt="tatuagem"></img>
				</div>
			</div>
		</>
	);
}
export default Corpo;
