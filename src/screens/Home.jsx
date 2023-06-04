import Banner from "../components/Banner"
import Carrusel from "../components/carrusel"
import Slider from "../components/Slider"
import { Container } from "react-bootstrap"

export default function Home() {
    return (
        <Container>
            <div className="container">
                <Banner></Banner>
            </div>
            <div className="carrusel">
                <Carrusel></Carrusel>
            </div>
            <div className="Slider">
                <Slider></Slider>
            </div>
        </Container>
    )
}