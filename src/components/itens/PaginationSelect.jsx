import React, { useEffect, useState } from "react";
import axios from "axios";
import "assets/css/pagination.css";
import ORUMAITO from "components/img/orumaito.png";

function Pagenation() {
	const [itens, setItens] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios({
				method: "get",
				url: `http://localhost:8080/style/coloridas`,
			})
				.then((response) => response.data)
				.then((data) => console.log(data.content));

			setItens(result);
		};
		fetchData();
	},);

	return (
		<>
			<div className="choiceStyle">
				<select className="styles">
					<option className="stylesOption">todos</option>
					<option className="stylesOption">preto e branco</option>
					<option className="stylesOption">coloridas</option>
					<option className="stylesOption">realistas</option>
					<option className="stylesOption">animes</option>
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

export default Pagenation;
