import React from "react";
import { FaWhatsapp, FaEnvelope, FaInstagram } from "react-icons/fa";
import { GoLocation } from "react-icons/go";

function footer(){
    return (
		<>
			<div className="myFooter">
				<div>
					<h3 className="contatos">HORARIOS</h3>
					<span className="contato">08:00 até 16:00</span>
				</div>
				<div className="contatoTelefones">
					<h3>TELEFONES</h3>
					<span className="contato contatoTelefone">
						FIXO: (11) 97161-1212
					</span>
					<span className="contato contatoTelefone">
						CEL: (11) 9715161-1212
					</span>
				</div>
				<div className="contatoEndereco">
					<h3>ENDEREÇO</h3>
					<GoLocation className="contatos contatoLocal" />
					<span className="contato">
						AVENIDA SAO PAULO CEP:04671-845
					</span>
				</div>
				<div className="redesSociais">
					<h3>REDES SOCIAIS</h3>
					<a
						className="contato"
						href="mailto:felipeb2silva@gmail.com"
					>
						{" "}
						<FaEnvelope className="contatos contatoEmail" />
						felipeb2silva@gmail.com
					</a>
					<a
						className="contato"
						href="http://api.whatsapp.com/send?phone=5511971404157"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaWhatsapp className="contatos contatoWhats" />
						entre em contato pelo whats`app
					</a>
					<a className="contato" href="http://intagram.com.br">
						<FaInstagram className="contatos contatoInsta" />
						entre em contato pelo intagtam
					</a>
				</div>
			</div>
		</>
	);
};

export default footer;