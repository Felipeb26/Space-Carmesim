import React, { useEffect, useState } from "react";
import axios from "axios";
import "assets/css/pagination.css";
import SELECT from "components/html/select"

function BWPagenation() {
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
				url: `http://localhost:8080/estilo/3`,
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
				<SELECT/>
			</div>
			<div className="cardTato">
				<div className="cardTato">
					{itens.content?.map((item) => {
						return (
							<>
								<div className="item">
									<img
										className="imagem"
										src={item[2]}
										key={item}
										alt={item[0]}
									></img>
								<span>{item[1]}</span>
								</div>
							</>
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
							key={item}
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

export default BWPagenation;
