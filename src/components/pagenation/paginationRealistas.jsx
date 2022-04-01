import React, { useEffect, useState } from "react";
import axios from "axios";
import "assets/css/pagination.css";
import ORUMAITO from "assets/img/orumaito.png";
import SELECT from "components/html/select";


function PagenationRealistc() {
	const [itens, setItens] = useState([]);

	let page = sessionStorage.getItem("pag");

	if (page == null) {
		page = 0;
	} else {
		page = sessionStorage.getItem("pag");
	}

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios({
				method: "get",
				url: `http://localhost:8080/estilo/1`,
			})
				.then((response) => response.data)
				.then((data) => data);

			setItens(result);
		};
		fetchData();
	}, [page]);

	return (
		<>
			<div className="choiceStyle">
				<SELECT />
			</div>
			<div className="cardTato">
				<div className="cardTato">
					{itens.content?.map((item) => {
						return (
							<div className="item">
								<span>{item.nome}</span>
								<img
									className="imagem"
									src={item.foto}
									key={item.id}
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
							onClick={(e) => [
								sessionStorage.setItem("pag", e.target.value),
								window.location.reload(),
							]}
						>
							{index + 1}
						</button>
					);
				})}
			</div>
		</>
	);
}

export default PagenationRealistc;
