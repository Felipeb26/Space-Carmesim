import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CreateUpdate() {
	const [fileName, fileContent] = useState("");
	const [data, setData] = useState({
		nome: "",
		foto: "",
		idImg: {},
	});

	let style = (value) => {
		const newValue = { ...value };
		newValue[value.target.id] = value.target.value;
		data.idImg = { id: newValue.id };
	};

	const handleFileChange = (e) => {
		const file = e.target.files[0];
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => {
			fileContent(reader.result);
		};
	};

	function postData(e) {
		const newData = { ...data };
		newData[e.target.id] = e.target.value;
		setData(newData);
	}

	const submit = (e) => {
		e.preventDefault();
		data.foto = fileName;
		const envio = axios.post("http://localhost:8080/add", data);
		toast.promise(envio, {
			pending: "Carregando",
			success: "Adicionado ao banco",
			error: "erro",
		});
	};

	return (
		<form className="cardCadastro">
			<ToastContainer theme="dark" />
			<div className="formCadastro">
				<h3>Nome Da Imagem</h3>
				<input
					className="nameImg"
					type="text"
					id="nome"
					maxLength="50"
					placeholder="nome para a imagem"
					onChange={(e) => postData(e)}
				/>
				<div className="input">
					<div className="inputFile">
						<label className="inputLabel" htmlFor="fileCadastro">
							ESCOLHER FOTO
						</label>
						<input
							id="fileCadastro"
							type="file"
							onChange={handleFileChange}
							name="fileCadastro"
						></input>
					</div>
					<div className="image">
						<img
							className="imgCadastro"
							src={fileName}
							alt="tatuagem"
						></img>
					</div>
				</div>
				<select
					className="nameImg"
					id="id"
					onChange={(event) => style(event)}
				>
					<option></option>
					<option value="1">ESCOLHA DO CLIENTE</option>
					<option value="2">ANIME</option>
					<option value="3">REALISTAS</option>
					<option value="4">COLORIDAS</option>
					<option value="5">PRETO E BRANCO</option>
				</select>
			</div>
			<div className="btnsCadastro">
				<input
					className="btnReset"
					type="button"
					value="alterar"
				></input>
				<input
					type="submit"
					className="btnEnvio"
					id="send"
					value="ENVIAR"
					onClick={submit}
				></input>
			</div>
		</form>
	);
}

export default CreateUpdate;
