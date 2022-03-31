import React, { useState } from "react";

function CreateUpdate() {
	const [fileName, fileContent] = useState("");
	const [data, setData] = useState({
		nome: "",
		foto: fileName,
		idImg: [],
	});

	let style = (value) => {
		const newValue = { ...value };
		newValue[value.target.id] = value.target.value;
		data.idImg.push({ id: newValue.id });
	};

	const handleFileChange = (e) => {
		const file = e.target.files[0];
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => {
			fileContent(reader.result);
		};
		data.foto.replace("foto", {foto: fileName})
	};

	function postData(e) {
		const newData = { ...data };
		newData[e.target.id] = e.target.value;
		setData(newData);
	}

	function submit(e) {
		e.preventDefault();
		console.log(data);
	}

	return (
		<form className="cardCadastro">
			<div className="formCadastro">
				<h3>Nome Da Imagem</h3>
				<input
					className="nameImg"
					type="text"
					id="nome"
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
					<option value="1">PRETO E BRANCO</option>
					<option value="2">REALISTA</option>
					<option value="3">COLORIDA</option>
					<option value="4">ANIME</option>
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
