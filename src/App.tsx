import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import { Container, EstiloGlobal } from './style'

function App() {
    return (
        <>
            <EstiloGlobal />
            <Header />
            <Hero />
            <Container>
                <ListaVagas />
            </Container>
        </>
    )
}

export default App
