import React, {useState, useEffect} from "react";
import axios from "axios";
import ORUMAITO from "assets/img/orumaito.png";

function SearchDelete(){
    	const [itens, setItens] = useState([]);
		const [name, setName] = useState("");
		const [nome, setNome] = useState("");

		useEffect(() => {
			const fetchData = async () => {
				const result = await axios
					.get(`http://localhost:8080/${nome}`)
					.then((response) => response.data)
					.then((data) => data);

				setItens(result);
			};
			fetchData();
		}, [nome]);
        return (
			<div className="cardDelete">
				<div className="sendAndGet">
					<input
						className="searchInput"
						type="search"
						maxLength="35"
						onChange={(e) => setName(e.target.value)}
					/>
					<input
						className="getImages"
						type="submit"
						placeholder={name}
						value="ENVIAR"
						onClick={(e) => setNome(e.target.placeholder)}
					></input>
				</div>
				{itens?.map((dado) => {
					return (
						<div className="deleteImage">
							<img
								className="imgDelete"
								src={ORUMAITO}
								alt="ghchgc"
								key={dado.id}
							></img>
							<h3>{dado.id}</h3>
							<span>{dado.nome}</span>
							<button className="btnDelete">APAGAR</button>
						</div>
					);
				})}
			</div>
		);
}

export default SearchDelete;