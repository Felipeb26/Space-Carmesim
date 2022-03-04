import React from "react";
import { Routes, Route } from "react-router-dom";

import Index from "../home";
import Contato from "../contato";
import Estilo from "../estilos";
import QuemSomos from "../apresentar"

function Rotas() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Index />} />
				<Route path="/contato" element={<Contato />} />
				<Route path="/estilos" element={<Estilo />} />
				<Route path="/quemsomos" element={<QuemSomos />} />
			</Routes>
		</div>
	);
}

export default Rotas;
