import React from "react";
// import { Link } from "react-router-dom";
import { Button, ButtonGroup, Dropdown } from "semantic-ui-react";

function Select() {
	// const removePage = () => sessionStorage.removeItem("pag");
	return (
		<>
		<Dropdown as={ButtonGroup}>
				<Button variant="sucess">split</Button>
				<Dropdown.Toggle split variant="sucess" />
				<Dropdown.Menu>
					<Dropdown.Item>
						animes
					</Dropdown.Item>
				</Dropdown.Menu>
		</Dropdown>
			{/* <ul className="styles">
				<li>
					<Link className="Link" to="/estilos" onClick={removePage}>
						todos
					</Link>
				</li>
				<li>
					<Link className="Link" to="/estilos/estilo=anime" onClick={removePage}>
						animes
					</Link>
				</li>
				<li>
					<Link className="Link" to="/estilos/estilo=colorida" onClick={removePage}>
						coloridas
					</Link>
				</li>
				<li>
					<Link className="Link" to="/estilos/estilo=realista" onClick={removePage}>
						realista
					</Link>
				</li>
				<li>
					<Link className="Link" to="/estilos/estilo=preto-branco" onClick={removePage}>
						preto e branco
					</Link>
				</li>
			</ul> */}
		</>
	);
}

export default Select;
