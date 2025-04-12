import "bootstrap/dist/css/bootstrap.min.css"
import React, { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import Home from "./Pages/Home"

const root = createRoot(document.getElementById("root"))
root.render(
	<StrictMode>
		<Home />
	</StrictMode>
)
