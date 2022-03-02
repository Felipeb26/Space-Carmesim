import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useRoutes,
} from "react-router-dom";
import Index from "../home";


import INDEX from "../home";
import CONT from "../pages/contato";

export  function App(){
	let routes = useRoutes([
		{ path: "/", element: <INDEX/> },
        { path: "contato", element: <CONT/> }
    	]);
	return routes;
};