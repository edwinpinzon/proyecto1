import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import NavListDrawerAdmin from "./NavListDrawerAdmin";
import { useState } from "react";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {NavLink} from 'react-router-dom'
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import SellIcon from '@mui/icons-material/Sell';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import SettingsIcon from '@mui/icons-material/Settings';

export default function NavbarAdmin() {
	const [open, setOpen] = useState(false)

        // navbar
        const terrorLibros=[
            {title: 'Ventas', path: '#', icon:<SellIcon/>},
            {title: 'Productos', path: '#', icon:<ProductionQuantityLimitsIcon/>},
            {title: 'Configuración', path: '#', icon:<SettingsIcon/>},
        ]
	
	return(
		<>
			<AppBar position="fixed">
				<Toolbar>
					<IconButton color="inherit" size="large" onClick={()=>setOpen(true)} sx={{display: {xs:'flex', sm: 'none'}}}
					edge='start'>
						<MenuOpenIcon/>
					</IconButton>
					<Button component={NavLink} to='/'>
							<IconButton><AutoStoriesIcon/></IconButton>
					</Button>
					<Typography variant="h5" sx={{flexGrow: 1}}>
						Librarius
					</Typography>
					
					<Box sx={{display: {xs: 'none', sm: 'block'}}}>
						{terrorLibros.map((item)=>(
							<Button color="inherit" key={item.title} component={NavLink} to={item.path}>{item.title}</Button>
						))}
					</Box>
					<Button component={NavLink} to='/compras'>
							<IconButton><AddShoppingCartIcon/></IconButton>
					</Button>
					
				</Toolbar>
			</AppBar>

			<Drawer open={open} anchor="right" onClose={()=>setOpen(false)} sx={{display: {xs:'flex', sm: 'none'}}}>
			<NavListDrawerAdmin terrorLibros={terrorLibros} NavLink={NavLink} setOpen={setOpen}/>
			</Drawer>
		</>
	)
}