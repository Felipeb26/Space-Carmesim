import React, { useState } from "react";

function InputFile() {
	const [fileName, fileContent] = useState("");

	const handleFileChange = (e) => {
		const file = e.target.files[0];
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => {
			fileContent(reader.result);
		};
	};

	sessionStorage.setItem("ft",fileName);
	return (
		<>
			<div className="input">
				<div className="inputFile">
					<label className="inputLabel" htmlFor="fileCadastro">
						ESCOLHER FOTO
					</label>
					<input
						id="fileCadastro"
						type="file"
						onChange={handleFileChange}
						name="fileCadastro"
					></input>
				</div>
				<div className="image">
					<img
						className="imgCadastro"
						src={fileName}
						alt="tatuagem"
					></img>
				</div>
			</div>
		</>
	);
}

export default InputFile;
