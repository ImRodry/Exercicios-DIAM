import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router"
import { Provider } from './pages/Context'
import App from "./pages/App"
import Formulario from "./pages/Formulario"
import Inquerito from "./pages/Inquerito"
import Resposta from "./pages/Resposta"
import Estatisticas from "./pages/Estatisticas"

const root = createRoot(document.getElementById("root"))
root.render(
	<StrictMode>
        <BrowserRouter>
            <Provider>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/formulario" element={<Formulario />} />
                    <Route path="/inquerito" element={<Inquerito />} />
                    <Route path="/resposta" element={<Resposta />} />
                    <Route path="/estatisticas" element={<Estatisticas />} />
                </Routes>
            </Provider>
        </BrowserRouter>
    </StrictMode>
)
