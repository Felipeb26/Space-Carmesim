import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function InputFile() {
  const notify = () => {
    toast.success("teste")
  }
	return(
	<div>
      <ToastContainer/>

      <button onClick={notify}>eteterter</button>
    </div>
  )
}

export default InputFile;
