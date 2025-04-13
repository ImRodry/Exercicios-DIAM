import "bootstrap/dist/css/bootstrap.min.css"
import React, { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router"
import Home from "./Pages/Home"
import DetailPage from "./Pages/DetailPage"
import VotePage from "./Pages/VotePage"
import Header from "./Components/Header"

const root = createRoot(document.getElementById("root"))
root.render(
	<StrictMode>
		<Header />
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/detalhes" element={<DetailPage />} />
				<Route path="/votacao" element={<VotePage />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>
)
