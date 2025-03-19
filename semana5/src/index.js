import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router"
import App from "./pages/App"
import Form from "./pages/Formulario"

const root = createRoot(document.getElementById("root"))
root.render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/form" element={<Form />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>
)
