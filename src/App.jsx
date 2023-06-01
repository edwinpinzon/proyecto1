// Router
import { Route, Routes } from "react-router-dom";
// Slick-carrusel de generos de libros
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Boostrap para el banner
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
// Paginas dentro de la web
import Categorias from './screens/Categorias';
import Colecciones from './screens/Colecciones';
import Promociones from './screens/Promociones';
// Mui-navbar
import { Container } from "@mui/material";
import CategoryIcon from '@mui/icons-material/Category';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
// Componentes
import Navbar from "./components/navbar/Navbar";
import Carrusel from "./components/carrusel";
import Banner from "./components/Banner";
import Slider from "./components/Slider";
import Footer from "./components/footer";
// Estilos para la pagina
import './styles/App.css'


export default function App() {
  // navbar
  const navArrayLinks=[
    {title: 'Categorías', path: './screens/Categorias.jsx', icon:<CategoryIcon/>},
    {title: 'Colecciones', path: './screens/Colecciones.jsx', icon:<CollectionsBookmarkIcon/>},
    {title: 'Promociones', path: './screens/Promociones.jsx', icon:<AttachMoneyIcon/>},
  ]

  return (
  <>
    <Navbar navArrayLinks={navArrayLinks}/>
    <Container sx={{ mt: 5}}>
      <Routes>
        <Route path="/categoria" element={<Categorias />}/>
        <Route path="/promociones" element={<Colecciones />}/>
        <Route path="/colecciones" element={<Promociones />}/>
      </Routes>
    </Container>
    <div className="container">
      <Banner></Banner>
    </div>
    <div className="carrusel">
      <Carrusel></Carrusel>
    </div>
    <Slider></Slider>
    <Footer></Footer>
  </>
  )
}

