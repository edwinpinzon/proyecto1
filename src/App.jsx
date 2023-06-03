import { useAuth0 } from '@auth0/auth0-react'
import { LoginButton } from './components/Login'
import { profile } from './components/profile'
import { LogoutButton } from './components/Logout'// Router
import { Route, Routes} from "react-router-dom";
// Slick-carrusel de generos de libros
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Boostrap para el banner
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
// Paginas dentro de la web
import Catego from './screens/Categorias';
import Colecci from './screens/Colecciones';
import Promo from './screens/Promociones';
import Home from './screens/Home';
import Carrito from './screens/Carrito';

// Mui-navbar
import { Container } from "@mui/material";
import CategoryIcon from '@mui/icons-material/Category';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
// Componentes
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer";
// Estilos para la pagina
import './styles/App.css'

export default function App() {
    // navbar
  const navArrayLinks=[
    {title: 'Categorías', path: '/categoria', icon:<CategoryIcon/>},
    {title: 'Promociones', path: '/promociones', icon:<AttachMoneyIcon/>},
    {title: 'Colecciones', path: './colecciones', icon:<CollectionsBookmarkIcon/>},
  ]
  return (
  <>
    <Navbar navArrayLinks={navArrayLinks}/>
    <Container sx={{ mt: 5}}>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/categoria" element={<Catego />}/>
        <Route path="/promociones" element={<Promo />}/>
        <Route path="/colecciones" element={<Colecci />}/>
        <Route path="/compras" element={<Carrito />}/>
      </Routes>
    </Container>
    <Footer></Footer>
  </>
  )
}

