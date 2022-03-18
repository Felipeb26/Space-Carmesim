import React, { useState } from "react";

function InputFile() {
	const [fileName, fileContent] = useState("");

	const handleFileChange = (e) => {
		const file = e.target.files[0];
		const reader = new FileReader();
		reader.readAsArrayBuffer(file);
		reader.onload = () => {
			fileContent(reader.result);
		};
	};

	console.log(fileName);

	const arrayBufferView = new Uint8Array(fileName);
	const blob = new Blob([arrayBufferView], { type: "image/jpeg" });
	const urlCreator = window.URL || window.webkitURL;
	const img = urlCreator.createObjectURL(blob);

	return (
		<>
			<div className="input">
				<div className="inputFile">
					<label className="inputLabel" htmlFor="fileCadastro">ESCOLHER FOTO</label>
					<input
						id="fileCadastro"
						type="file"
						onChange={handleFileChange}
						name="fileCadastro"
					></input>
				</div>
				<div className="image">
					<img className="imgCadastro" src={img} alt="tatuagem"></img>
				</div>
			</div>
		</>
	);
}

export default InputFile;
