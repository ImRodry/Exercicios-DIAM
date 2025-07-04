import "bootstrap/dist/css/bootstrap.min.css"
import React, { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router"
import Home from "./pages/Home"
import DetailPage from "./pages/DetailPage"
import VotePage from "./pages/VotePage"
import Header from "./components/Header"
import "./styles/style.css"

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
