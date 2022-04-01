import React, { useState, useEffect } from "react";
import axios from "axios";
import ORUMAITO from "assets/img/orumaito.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SearchDelete() {
	const [itens, setItens] = useState([]);
	const [name, setName] = useState("");
	const [nome, setNome] = useState("");

	function notifica(){
		toast.success({
			pending: "Carregando",
			success: "apagado com sucesso ao banco",
			error: "erro",
		});
}

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios
				.get(`http://localhost:8080/${nome}`)
				.then((res) => res.data)
				.catch((e) => {
					if (e.response.status === 404) {
						toast.error("codigo 404", { theme: "dark" });
					}
				});
			setItens(result);
		};
		fetchData();
	}, [nome]);

	function Delete(value) {
		const del = axios.delete(`http://localhost:8080/delete/${value}`)
		.then((res) => {if(res.status === 200){
			toast.success(del,{
				pending: "Carregando",
				success: "apagado com sucesso ao banco",
				error: "erro",
			});
		}})
		
		setItens(itens.filter((itens) => itens.id !== value));
	}

	return (
		<div className="cardDelete">
			<ToastContainer theme="dark" />
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
							onClick={() => Delete(dado.id)}
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
