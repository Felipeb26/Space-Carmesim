import React, { useState, useEffect } from "react";
import axios from "axios";
import ORUMAITO from "assets/img/orumaito.png";

function SearchDelete() {
	const [itens, setItens] = useState([]);
	const [name, setName] = useState("");
	const [nome, setNome] = useState("");

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios
				.get(`http://localhost:8080/${nome}`)
				.then((response) => {
					if(response.status === 200){
						return(response.data)
					}})
				.catch((e) => {
					if(e.response.status === 404){
						alert("codigo 404")
					}
				})
			setItens(result);
		};
		fetchData();
	}, [nome]);

	console.log(itens)
	function Delete(value){
		 axios.delete(`http://localhost:8080/delete/${value}`)
			.then((res) => {if (res.status === 200) {alert("deu tudo certo")}})
			.catch((e) => console.log(e))
		setItens(itens.filter(itens => itens.id !== value))
	}

	return (
		<div className="cardDelete">
			<div className="sendAndGet">
				<input
					className="searchInput"
					type="search"
					maxLength="35"
					onChange={(e) => setName(e.target.value)}
				/>
				<input
					className="getImages"
					type="button"
					placeholder={name}
					value="ENVIAR"
					onClick={(e) => setNome(e.target.placeholder)}
				></input>
			</div>
			{itens?.map((dado) => {
				return (
					<div className="deleteImage">
						<img
							className="imgDelete"
							src={ORUMAITO}
							alt="ghchgc"
							key={dado.id}
						></img>
						<h3>{dado.id}</h3>
						<span>{dado.nome}</span>
						<button
							className="btnDelete"
							onClick={() =>
								Delete(dado.id)
							}
						>
							APAGAR
						</button>
					</div>
				);
			})}
		</div>
	);
}

export default SearchDelete;
