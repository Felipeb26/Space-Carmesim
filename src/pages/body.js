import React from "react";
import "../components/css/body.css";
import tato1 from "../components/img/tato1.png";
import  tato2 from "../components/img/tato2.png";
import  tato3 from "../components/img/tato3.png";

function corpo(){
    return (
		<>
		<div className="card">
			<div className="corpo">
				<div className="title">
					<h3>COME TO TRY</h3>
				</div>
				<div className="imgs">
					<img className="img" src={tato1} alt="tatuagem"></img>
					<img className="img" src={tato2} alt="tatuagem"></img>
					<img className="img" src={tato3} alt="tatuagem"></img>
				</div>
			</div>
		</div>
		</>
	);
}
export default corpo;