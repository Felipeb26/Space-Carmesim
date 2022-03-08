import React from "react"
import { useEffect, useState } from "react";
import axios from "axios";
import "../assets/css/pagination.css";

import ORUMAITO from "../components/img/orumaito.png";
import PAGES from "../components/itens/PagenationComponent"

function Pagenation(){
	const [itens, setItens] = useState([]);
	const [setCurrentPage] = useState(0);
	const [page, setPage] = useState("");

	
	useEffect(() => {
		const fetchData = async () => {
			const result = await axios({
				method: "get",
				cors: {},
				url: `http://localhost:8080/page?page=${page}`,
				headers: {},
			})
				.then((response) => response.data)
				.then((data) => data);

			setItens(result);
		};
		fetchData();
	},[page]);

	return (
		<>
			<div className="choiceStyle">
				<select className="styles">
					<option className="stylesOption">TODAS</option>
					<option className="stylesOption">PRETO E BRANCO</option>
					<option className="stylesOption">COLORIDAS</option>
					<option className="stylesOption">REALISTA</option>
					<option className="stylesOption">ANIME</option>
				</select>
			</div>
			<div className="cardTato">
				<div className="cardTato">
					{itens.content?.map((item) => {
						return (
							<div className="item">
								<span>{item.id}</span>
								<img
									className="imagem"
									src={ORUMAITO}
									alt="teste"
								></img>
							</div>
						);
					})}
				</div>
			</div>

			<div className="divBtn">
				{Array.from(Array(itens.totalPages), (item, index) => {
					return (
						<button
							className="Btn"
							value={index}
							onClick={(e) =>
								<PAGES setPage={setCurrentPage}/>
							}
						>
							{index + 1}
						</button>
					);
				})}
			</div>
		</>
	);
}

export default Pagenation;
