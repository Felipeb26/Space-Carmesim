import React from "react";
import "assets/css/bodyContato.css"
import Inter from "assets/img/inter.png";
import Inter1 from "assets/img/inter1.png";

function body(){
    return (
		<>
			<div className="cardLocalizacao">
				<div className="cardTitulo">
					<h3>PODEMOS SER LOCALIZADOS EM:</h3>
					<br></br>
					<span>
						nos encontramos proximos de tal estação em frente ao
						terminal
					</span>
					<span>em caso de duvida ou queira marcar horario.</span>
				</div>
				<div className="cardMapa">
					<iframe
						className="mapaContato"
						title="mapa"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.9866281493664!2d-46.68045448501989!3d-23.67643618462587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce501ac3b77f8f%3A0xdaa230261180506a!2sShopping%20Interlagos!5e0!3m2!1spt-BR!2sbr!4v1646225363122!5m2!1spt-BR!2sbr"
						loading="lazy"
					></iframe>
					<div className="cardRefencias">
						<img
							className="mapaRefencia"
							src={Inter}
							alt="imagem refenrecia"
						></img>
						<img className="mapaRefencia" src={Inter1}alt="imagem refenrecia"></img>
					</div>
				</div>
			</div>
			{/* PARTE ONDE VAI SER TRATADA ENVIO DE MENSAGEM */}
			<div className="cardMensagem">
				<div className="contatoMensagem">
					<h3 className="mensagemTitulo">ENVIE SUA MENSAGEM</h3>
					<h3 className="mensagemTitulo obs" > necessario preencher todos os campos!</h3>
				</div>
				<div className="mensagemDados">
					<input className="mensagem" type="text" placeholder="NOME:"></input>
					<input className="mensagem" type="text" placeholder="TELEFONE:"></input>
					<input className="mensagem" type="email" placeholder="EMAIL:"></input>
					<textarea className="mensagem" rows="10" placeholder="deixe a mensagem"></textarea>
					<input className="enviarMensagem" type="submit" value="ENVIAR"></input>
				</div>
			</div>
		</>
	);
};

export default body