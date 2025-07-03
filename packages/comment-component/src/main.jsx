import React from "react";
import ReactDOM from "react-dom/client";
import CommentComponent from "./CommentComponent";

const $ = document.querySelector.bind(document);

const rootDOM = $("#root");

const rootReact = ReactDOM.createRoot(rootDOM);

rootReact.render(
	<React.StrictMode>
		<CommentComponent />
	</React.StrictMode>
);
