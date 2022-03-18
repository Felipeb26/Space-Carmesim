import React from "react";
import { Routes, Route } from "react-router-dom";

import Index from "pages/home";
import Contato from "pages/contato";
import QuemSomos from "pages/apresentar";
import CADATRO from "pages/cadastro";
import Estilo from "components/pagenation-sub-pages/AllPhotos";

import ANIME from "components/pagenation-sub-pages/AnimePage";
import REAL from "components/pagenation-sub-pages/RealistPage";
import COLOR from "components/pagenation-sub-pages/ColorPage";
import BaW from "components/pagenation-sub-pages/BlackWhitePage";

function Rotas() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Index />} />
				<Route path="/contato" element={<Contato />} />
				<Route path="/estilos" element={<Estilo />} />
				<Route path="/cadastro" element={<CADATRO />} />
				<Route path="/estilos/estilo=anime" element={<ANIME />} />
				<Route path="/estilos/estilo=colorida" element={<COLOR />} />
				<Route path="/estilos/estilo=realista" element={<REAL />} />
				<Route path="/estilos/estilo=preto-branco" element={<BaW />} />
				<Route path="/quemsomos" element={<QuemSomos />} />
			</Routes>
		</div>
	);
}

export default Rotas;
