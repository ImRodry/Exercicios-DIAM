import Header from "../components/Header"
import Footer from "../components/Footer"
import FormInquerito from "../components/FormInquerito"

function Inquerito() {
    return (
        <div className="conteudo-principal">
            <Header />
            <main className="main-content">
                <FormInquerito />
            </main>
            <Footer />
        </div>
    )
}

export default Inquerito
