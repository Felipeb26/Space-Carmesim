import React from "react";
import { FaWhatsapp, FaEnvelope, FaInstagram } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import "../assets/css/footer.css";

function footer(){
    return (
		<div className="FOOTER">
			<div>
				<iframe className="mapa"
					title="mapa"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.9866281493664!2d-46.68045448501989!3d-23.67643618462587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce501ac3b77f8f%3A0xdaa230261180506a!2sShopping%20Interlagos!5e0!3m2!1spt-BR!2sbr!4v1646225363122!5m2!1spt-BR!2sbr"
					loading="lazy"
				></iframe>
			</div>
			<div className="myFooter">
				<div>
					<h3 className="contatos">HORARIOS</h3>
					<span className="contato">08:00 até 16:00</span>
				</div>
				<div className="contatoTelefones">
					<h3>TELEFONES</h3>
					<span className="contato">
						FIXO: (11) 97161-1212
					</span>
					<span className="contato">
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
		</div>
	);
};

export default footer;