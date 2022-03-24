import React from "react";
import "assets/css/bodyApresenta.css";
import KRATOS from "assets/img/kratos.png";
import KRATOS_PERFIL from "assets/img/kratos1.png";
import ZARAKI from "assets/img/teste.mp4";

function QuemSomos(){
    return (
		<div>
			<div className="cardQuemSomos">
				<div className="cardApresentacao">
					<img
						className="imagemTatuador"
						src={KRATOS}
						alt="foto perfil"
					></img>
				</div>
				<div className="maisImagens">
					<img
						className="perfilTatuador"
						src={KRATOS_PERFIL}
						alt="foto perfil"
					></img>
					<video
						className="perfilTatuador video"
						src={ZARAKI}
						preload="auto"
						autoPlay
						muted
						loop
					></video>
				</div>
				<div className="cardTatuador">
					<h2>Meu nome é Jubscleiton e tatuo a 50 anos</h2>
					<p className="about">
						Lorem Ipsum é simplesmente uma simulação de texto da
						indústria tipográfica e de impressos, e vem sendo
						utilizado desde o século XVI, quando um impressor
						desconhecido pegou uma bandeja de tipos e os embaralhou
						para fazer um livro de modelos de tipos. Lorem Ipsum
						sobreviveu não só a cinco séculos, como também ao salto
						para a editoração eletrônica, permanecendo
						essencialmente inalterado. Se popularizou na década de
						60, quando a Letraset lançou decalques contendo
						passagens de Lorem Ipsum, e mais recentemente quando
						passou a ser integrado a softwares de editoração
						eletrônica como Aldus PageMaker. Lorem Ipsum é
						simplesmente uma simulação de texto da indústria
						tipográfica e de impressos, e vem sendo utilizado desde
						o século XVI, quando um impressor desconhecido pegou uma
						bandeja de tipos e os embaralhou para fazer um livro de
						modelos de tipos. Lorem Ipsum sobreviveu não só a cinco
						séculos, como também ao salto para a editoração
						eletrônica, permanecendo essencialmente inalterado. Se
						popularizou na década de 60, quando a Letraset lançou
						decalques contendo passagens de Lorem Ipsum, e mais
						recentemente quando passou a ser integrado a softwares
						de editoração eletrônica como Aldus PageMaker. Lorem
						Ipsum é simplesmente uma simulação de texto da indústria
						tipográfica e de impressos, e vem sendo utilizado desde
						o século XVI, quando um impressor desconhecido pegou uma
						bandeja de tipos e os embaralhou para fazer um livro de
						modelos de tipos. Lorem Ipsum sobreviveu não só a cinco
						séculos, como também ao salto para a editoração
						eletrônica, permanecendo essencialmente inalterado. Se
						popularizou na década de 60, quando a Letraset lançou
						decalques contendo passagens de Lorem Ipsum, e mais
						recentemente quando passou a ser integrado a softwares
						de editoração eletrônica como Aldus PageMaker.
					</p>
				</div>
			</div>
		</div>
	);
}

export default QuemSomos;