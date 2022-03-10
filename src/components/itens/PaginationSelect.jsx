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
				url: "http://localhost:8080/style/escolha do cliente",
			})
				.then((response) => response.data)
				.then((data) => data);
				
			const imgs = result?.map((image) => {
				const gets = image.idImg?.map((teste) => teste.nome);
				return gets;
			});
			setItens(imgs);
		};
		fetchData();
	}, []);

	console.log(itens);
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

			{/* <div>
				{Array.from(Array(page), (item, index) =>{
					return <button value={index} onClick={(e)=>console.log(e.target.value)}>{index + 1}</button>
				})}
			</div> */}

			<div className="cardTato">
				<div className="cardTato">
					{itens?.map((item) => {
						const tes = item.idImg?.map((imagem) => {
							return (
								<div className="item">
									<span>{imagem.nome}</span>
									<img
										className="imagem"
										src={ORUMAITO}
										alt="teste"
									></img>
								</div>
							);
						});
						return tes;
					})}
				</div>
			</div>

			<div></div>
		</>
	);
}

export default Pagenation;
