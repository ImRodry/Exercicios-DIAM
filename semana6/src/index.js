import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router"
import { Provider } from './pages/Context'
import App from "./pages/App"
import Formulario from "./pages/Formulario"
import Resposta from "./pages/Resposta"
import Estatisticas from "./pages/Estatisticas"
import FormInscricao from "./components/FormInscricao"
import FormInquerito from "./components/FormInquerito"

const root = createRoot(document.getElementById("root"))
root.render(
	<StrictMode>
        <BrowserRouter>
            <Provider>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/formulario" element={<Formulario Form={FormInscricao} />} />
                    <Route path="/inquerito" element={<Formulario Form={FormInquerito} />} />
                    <Route path="/resposta" element={<Resposta />} />
                    <Route path="/estatisticas" element={<Estatisticas />} />
                </Routes>
            </Provider>
        </BrowserRouter>
    </StrictMode>
)
