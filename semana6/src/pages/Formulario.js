import { Component } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

class Formulario extends Component {
    render() {
        const { Form } = this.props
        return (
            <div className="conteudo-principal">
                <Header />
                <main className="main-content">
                    <Form />
                </main>
                <Footer />
            </div>
        )
    }
}

export default Formulario
