import React, { useEffect, useState } from "react";
import axios from "axios";
import "assets/css/cadastro.css";
import HEADER from "components/html/header";
import FOOTER from "components/html/footer";
import INPUT from "components/html/inputFile";

import ORUMAITO from "assets/img/orumaito.png";

function Cadastrar() {
	document.addEventListener("keydown", function (e) {
		if (e.ctrlKey && e.shiftKey && e.key === "E") {
			window.location.assign("/Space-Carmesim/");
		}
	});

	const [itens, setItens] = useState([]);
	const [name, setName] = useState("");

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios({
				method: "get",
				url: "http://localhost:8080/colorida",
			})
				.then((response) => response.data)
				.then((data) => data);

			setItens(result);
		};
		fetchData();
	}, []);

	return (
		<>
			<HEADER />
			<div className="cardsDeleteUpdate">
				<div className="cardCadastro">
					<div className="formCadastro">
						<h3>Nome Da Imagem</h3>
						<input className="nameImg" required type="text" />
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
						<button className="btnReset">alterar</button>
						<input
							type="submit"
							className="btnEnvio"
							value="ENVIAR"
						></input>
					</div>
				</div>
				<div className="cardDelete">
					<input
						className="searchInput"
						type="search"
						maxLength="35"
						onChange={(e)=>setName(e.target.value)}
					/>
					<input
						type="submit"
						onClick={() => alert(name)}
					></input>
					{itens?.map((dado) => {
						return (
							<div className="deleteImage">
								<img
									className="imgDelete"
									src={ORUMAITO}
									alt="ghchgc"
								></img>
								<h3>{dado.id}</h3>
								<span>{dado.nome}</span>
								<button className="btnDelete">APAGAR</button>
							</div>
						);
					})}
				</div>
			</div>
			<FOOTER />
		</>
	);
}

export default Cadastrar;
