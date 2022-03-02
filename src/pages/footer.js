import React from "react";
import '../components/css/footer.css'

function footer(){
    return (
		<div className="myFooter">
			<div>
				<h3>CONTATO</h3>
				<span>avenida testando a apaciencia</span>
			</div>
			<div>
				<iframe
					title="mapa"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.9866281493664!2d-46.68045448501989!3d-23.67643618462587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce501ac3b77f8f%3A0xdaa230261180506a!2sShopping%20Interlagos!5e0!3m2!1spt-BR!2sbr!4v1646176699707!5m2!1spt-BR!2sbr"
					allowFullScreen
					loading="lazy"
					className="mapa"
				></iframe>
			</div>
		</div>
	);
}

export default footer;