import { LoginButton } from "../../Login";
import {  LogoutButton } from "../../Logout";
import { useAuth0 } from '@auth0/auth0-react'
import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import NavListDrawer from "./NavListDrawer";
import { useState } from "react";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import {NavLink} from 'react-router-dom'
import AutoStoriesIcon from '@mui/icons-material/AutoStories';


export default function Navbar({navArrayLinks}) {
	const [open, setOpen] = useState(false)
	const { isAuthenticated } = useAuth0();
	
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
						{navArrayLinks.map((item)=>(
							<Button color="inherit" key={item.title} component={NavLink} to={item.path}>{item.title}</Button>
						))}
					</Box>
					<Button component={NavLink} to='/compras'>
							<IconButton><AddShoppingCartIcon/></IconButton>
					</Button>
					
					<div>
						{isAuthenticated ? (
							<>
							<profile/>
							<LogoutButton>
								<IconButton>
								<HowToRegIcon />
								</IconButton>
							</LogoutButton>
							
						</>
							):(
							<LoginButton>
								<IconButton>
								<HowToRegIcon />
								</IconButton>
							</LoginButton>

							)}
					</div>
					{/* <Button component={LoginButton}>
						<IconButton>
						<HowToRegIcon />
						</IconButton>
						</Button>
						<Button component={LogoutButton}>
						<IconButton>
						<HowToRegIcon />
						</IconButton>
						</Button> */}


				</Toolbar>
			</AppBar>

			<Drawer open={open} anchor="right" onClose={()=>setOpen(false)} sx={{display: {xs:'flex', sm: 'none'}}}>
			<NavListDrawer navArrayLinks={navArrayLinks} NavLink={NavLink} setOpen={setOpen}/>
			</Drawer>
		</>
	)
}