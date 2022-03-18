import React from "react";
import "assets/css/body.css";

import tato1 from "components/img/tato1.png";
import tato2 from "components/img/tato2.png";
import tato3 from "components/img/tato3.png";

import TATO from "components/img/tatuagem.png";
import TATO1 from "components/img/tatuagem1.png";
import TATO2 from "components/img/tatuagem2.png";
import TATO3 from "components/img/tatuagem3.png";

function Corpo() {

	document.addEventListener("keydown", function(e){
		let link = "/cadastro";
			if(e.ctrlKey && e.shiftKey && e.key === "E"){
				window.location.assign(link)
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
