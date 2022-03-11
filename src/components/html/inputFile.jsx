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
		<div className="inputFile">
			<h3>teste byte</h3>
			<input type="file" onChange={handleFileChange}></input>
			<img src={img} alt="dgedg"></img>
		</div>
	);
}

export default InputFile;
