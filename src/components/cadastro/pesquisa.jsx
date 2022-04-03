import React, { useState, useEffect } from "react";
import axios from "axios";
import ORUMAITO from "assets/img/orumaito.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const customId = "custom-id-yes";

function SearchDelete() {
	const [itens, setItens] = useState([]);
	const [name, setName] = useState("");
	const [nome, setNome] = useState("");

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios({
				method: "GET",
				url: `http://localhost:8080/${nome}`,
			})
			.then((res) => res.data)
			.catch((e) => {
				if (e.response.status === 404) {
					toast.error("Nenhum dado inicial no momento",{
						closeOnClick: true,
						autoClose: 2000,
						toastId: customId,
						theme: "dark"
					});
				}
			});
			setItens(result);
		};
		fetchData();
	}, [nome]);

	const Delete = (value) => {
		const del = axios({
			method: "DELETE",
			url: `http://localhost:8080/delete/${value}`,
		});
		toast.promise(del, {
			pending: "Carregando",
			success: "apagado com sucesso ao banco",
			error: "erro",
			theme: "dark",
		});
		setItens(itens.filter((itens) => itens.id !== value));
	};

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
