import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import NavListDrawer from "./NavListDrawer";
import { useState } from "react";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import {NavLink} from 'react-router-dom'
import Libro from '../../images/libro.png'

// {title: 'Carrito', path: '../../screens/Carrito.jsx', icon:<AddShoppingCartIcon/>},
// {title: 'Login', path: '../../screens/Login.jsx', icon:<HowToRegIcon/>},

export default function Navbar({navArrayLinks}) {
	const [open, setOpen] = useState(false)
	
	return(
		<>

			<AppBar position="fixed">
				<Toolbar>
					<IconButton color="inherit" size="large" onClick={()=>setOpen(true)} sx={{display: {xs:'flex', sm: 'none'}}}
					edge='start'>
						<MenuOpenIcon/>
					</IconButton>
					<Typography variant="h5" sx={{flexGrow: 1, cursor: 'pointer'}}>
						Librarius
					</Typography>
					
					<Box component={NavLink} to='/' sx={{display: {xs: 'none', sm: 'block'}}}>
						{navArrayLinks.map((item)=>(
							<Button color="inherit" key={item.title} component={NavLink} to={item.path}>{item.title}</Button>
						))}
					</Box>
					<Button component={NavLink} to='../../screens/CarritoRegistro.jsx'>
							<IconButton><AddShoppingCartIcon/></IconButton>
					</Button>
					<Button component='a' href="../../screens/Registro.jsx">
							<IconButton><HowToRegIcon/></IconButton>
					</Button>
				</Toolbar>
			</AppBar>

			<Drawer open={open} anchor="right" onClose={()=>setOpen(false)} sx={{display: {xs:'flex', sm: 'none'}}}>
			<NavListDrawer navArrayLinks={navArrayLinks} NavLink={NavLink} setOpen={setOpen}/>
			</Drawer>
		</>
	)
}