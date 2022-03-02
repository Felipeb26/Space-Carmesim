import React from "react";
import {Routes, Route} from "react-router-dom"

import Index from "../home"
import Contato from "../contato"

function Rotas(){
	return (
		<div>
			<Routes>
				<Route path="/" element={<Index/>} />
				<Route path="/home" element={<Contato/>} />
			</Routes>
		</div>
	);
};

export default Rotas;