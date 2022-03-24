import React, { Component } from "react";
import INPUT from "components/html/inputFile";

class CreateUpdate extends Component{
    state ={
        id: "",
        nome: "",
        imagem: "",
        estilo: "",
    }

    render() {
		return (
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
						onClick=""
					></input>
				</div>
			</div>
		);
    };
}

export default CreateUpdate;