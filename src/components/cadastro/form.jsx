import React, { useState } from "react";
import INPUT from "components/html/inputFile";

function CreateUpdate() {
	let style = (value) => {
		const newValue = { ...value };
		newValue[value.target.id] = value.target.value;
		data.idImg.push({ id: newValue.id });
	};
	const [data, setData] = useState({
		nome: "",
		idImg: [],
	});

	function postData(e) {
		const newData = { ...data };
		newData[e.target.id] = e.target.value;
		setData(newData);
	}

	function submit(e) {
		e.preventDefault()
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
				<INPUT />
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
				<button className="btnReset">alterar</button>
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
