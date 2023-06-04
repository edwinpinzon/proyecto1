import React from 'react'
import { Box, Divider, Stack, Grid, Container, styled, Typography, ButtonBase } from '@mui/material'

import terror1 from '../images/terror1.jpeg';
import terror2 from '../images/terror2.jpeg';
import terror3 from '../images/terror3.jpeg';
import terror4 from '../images/terror4.jpeg';
import terror5 from '../images/terror5.jpeg';
import terror6 from '../images/terror6.png';
import terror7 from '../images/terror7.jpeg';
import terror8 from '../images/terror8.jpeg';
import terror9 from '../images/terror9.jpeg';
import terror10 from '../images/terror10.jpeg';
import terror11 from '../images/terror11.jpeg';
import terror12 from '../images/terror12.jpeg';
import terror13 from '../images/terror13.jpeg';
import terror14 from '../images/terror14.jpeg';
import terror15 from '../images/terror15.jpeg';
import terror16 from '../images/terror16.jpeg';
import terror17 from '../images/terror17.jpeg';
import terror18 from '../images/terror18.jpeg';
import terror19 from '../images/terror19.jpeg';
import terror20 from '../images/terror20.jpeg';

const Img = styled('img')({
	margin:'auto',
	display: 'block',
	width: 120,
  flexGrow: 1,
	height: 190,
})

function Terror() {

	return (
    <Container>
			<Box paddingTop={8}>
			<h2>Género de terror</h2>
			</Box>
			<Grid container paddingTop={3} paddingBottom={5} spacing={10} paddingLeft={1}>

				<Grid item xs={2}>
					<Grid item container direction='column'>
						<Grid item>
							<Img src={terror1} alt='terror1'></Img>
						</Grid>
						<Grid item xs={12} sm container>
						<Grid item xs container direction='row' spacing={2} padding={1}>
							<Grid item>
								<Typography gutterBottom variant="subtitle1" component="div">
									Asylum
								</Typography>
								<Typography variant="body2" gutterBottom>
									Madeleine Roux
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Tapa Blanda, Nuevo
								</Typography>
							</Grid>
						</Grid>
					</Grid>
					</Grid>
					<Grid item paddingLeft={'4.1rem'}>
						<Typography variant='subtitle1' component='div'>
							$86.064
						</Typography>
					</Grid>
					<Grid container item justifyContent='center' alignItems='center' marginTop={2}>
						<ButtonBase className='butonadd' variant='contained'>
							Añadir al carro
						</ButtonBase>
					</Grid>
				</Grid>

				<Grid item xs>
					<Grid item container direction='column'>
						<Grid item width={190}>
							<Img src={terror2} alt='terror1'></Img>
						</Grid>
						<Grid item xs={12} sm container>
						<Grid item xs container direction='row' spacing={2} padding={1}>
							<Grid item xs>
								<Typography gutterBottom variant="subtitle1" component="div">
									Cierra todas las puertas
								</Typography>
								<Typography variant="body2" gutterBottom>
									Riley Sager
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Tapa Dura, Nuevo
								</Typography>
							</Grid>
						</Grid>
					</Grid>
					</Grid>
					<Grid item paddingLeft={'4.1rem'}>
						<Typography variant='subtitle1' component='div'>
							$102.450
						</Typography>
					</Grid>
					<Grid container item justifyContent='center' alignItems='center' paddingTop={2}>
						<ButtonBase className='butonadd' variant='contained'>
							Añadir al carro
						</ButtonBase>
					</Grid>
				</Grid>

				<Grid item xs>
					<Grid item container direction='column'>
						<Grid item>
							<Img src={terror3} alt='terror1'></Img>
						</Grid>
						<Grid item xs={12} sm container>
						<Grid item xs container direction='row' spacing={2} padding={1}>
							<Grid item xs>
								<Typography gutterBottom variant="subtitle1" component="div">
									Montañas de la locura
								</Typography>
								<Typography variant="body2" gutterBottom>
									H.P Lovecraft
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Tapa Blanda, Nuevo
								</Typography>
							</Grid>
						</Grid>
					</Grid>
					</Grid>
					<Grid item paddingLeft={'4.1rem'}>
						<Typography variant='subtitle1' component='div'>
							$74.760
						</Typography>
					</Grid>
					<Grid container item justifyContent='center' alignItems='center' paddingTop={2}>
						<ButtonBase className='butonadd' variant='contained'>
							Añadir al carro
						</ButtonBase>
					</Grid>
				</Grid>

				<Grid item xs>
					<Grid item container direction='column'>
						<Grid item>
							<Img src={terror4} alt='terror1'></Img>
						</Grid>
						<Grid item xs={12} sm container>
						<Grid item xs container direction='row' spacing={2} padding={1}>
							<Grid item xs>
								<Typography gutterBottom variant="subtitle1" component="div">
									El segundo asesino
								</Typography>
								<Typography variant="body2" gutterBottom>
									Sarah Pinborough
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Tapa Dura, Nuevo
								</Typography>
							</Grid>
						</Grid>
					</Grid>
					</Grid>
					<Grid item paddingLeft={'4.1rem'}>
						<Typography variant='subtitle1' component='div'>
							$57.890
						</Typography>
					</Grid>
					<Grid container item justifyContent='center' alignItems='center' paddingTop={2}>
						<ButtonBase className='butonadd' variant='contained'>
							Añadir al carro
						</ButtonBase>
					</Grid>
				</Grid>

				<Grid item xs>
					<Grid item container direction='column'>
						<Grid item>
							<Img src={terror5} alt='terror1'></Img>
						</Grid>
						<Grid item xs={12} sm container>
						<Grid item xs container direction='row' spacing={2} padding={1}>
							<Grid item xs>
								<Typography gutterBottom variant="subtitle1" component="div">
									Julia
								</Typography>
								<Typography variant="body2" gutterBottom>
									Peter Straub
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Tapa Blanda, Usado
								</Typography>
							</Grid>
						</Grid>
					</Grid>
					</Grid>
					<Grid item paddingLeft={'4.1rem'}>
						<Typography variant='subtitle1' component='div'>
							$89.990
						</Typography>
					</Grid>
					<Grid container item justifyContent='center' alignItems='center' paddingTop={2}>
						<ButtonBase className='butonadd' variant='contained'>
							Añadir al carro
						</ButtonBase>
					</Grid>
				</Grid>

				<Grid item xs={2}>
					<Grid item container direction='column'>
						<Grid item>
							<Img src={terror6} alt='terror1'></Img>
						</Grid>
						<Grid item xs={12} sm container>
						<Grid item xs container direction='row' spacing={2} padding={1}>
							<Grid item xs>
								<Typography gutterBottom variant="subtitle1" component="div">
									Apartamento olvidado
								</Typography>
								<Typography variant="body2" gutterBottom>
									S.L Grey
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Tapa Blanda, Nuevo
								</Typography>
							</Grid>
						</Grid>
					</Grid>
					</Grid>
					<Grid item paddingLeft={'5rem'}>
						<Typography variant='subtitle1' component='div'>
							$54.800
						</Typography>
					</Grid>
					<Grid container item justifyContent='center' alignItems='center' paddingTop={2}>
						<ButtonBase className='butonadd' variant='contained'>
							Añadir al carro
						</ButtonBase>
					</Grid>
				</Grid>

				<Grid item xs>
					<Grid item container direction='column'>
						<Grid item>
							<Img src={terror7} alt='terror1'></Img>
						</Grid>
						<Grid item xs={12} sm container>
						<Grid item xs container direction='row' spacing={2} padding={1}>
							<Grid item xs>
								<Typography gutterBottom variant="subtitle1" component="div">
									Déjame entrar
								</Typography>
								<Typography variant="body2" gutterBottom>
									John Ajvide
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Tapa Blanda, Nuevo
								</Typography>
							</Grid>
						</Grid>
					</Grid>
					</Grid>
					<Grid item paddingLeft={'5rem'}>
						<Typography variant='subtitle1' component='div'>
							$145.670
						</Typography>
					</Grid>
					<Grid container item justifyContent='center' alignItems='center' paddingTop={2}>
						<ButtonBase className='butonadd' variant='contained'>
							Añadir al carro
						</ButtonBase>
					</Grid>
				</Grid>

				<Grid item xs>
					<Grid item container direction='column'>
						<Grid item>
							<Img src={terror8} alt='terror1'></Img>
						</Grid>
						<Grid item xs={12} sm container>
						<Grid item xs container direction='row' spacing={2} padding={1}>
							<Grid item xs>
								<Typography gutterBottom variant="subtitle1" component="div">
									El terror
								</Typography>
								<Typography variant="body2" gutterBottom>
									Dan Simmons
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Tapa Blanda, Usado
								</Typography>
							</Grid>
						</Grid>
					</Grid>
					</Grid>
					<Grid item paddingLeft={'5rem'}>
						<Typography variant='subtitle1' component='div'>
							$57.603
						</Typography>
					</Grid>
					<Grid container item justifyContent='center' alignItems='center' paddingTop={2}>
						<ButtonBase className='butonadd' variant='contained'>
							Añadir al carro
						</ButtonBase>
					</Grid>
				</Grid>

				<Grid item xs>
					<Grid item container direction='column'>
						<Grid item>
							<Img src={terror9} alt='terror1'></Img>
						</Grid>
						<Grid item xs={12} sm container>
						<Grid item xs container direction='row' spacing={2} padding={1}>
							<Grid item xs>
								<Typography gutterBottom variant="subtitle1" component="div">
									El hombre de tiza
								</Typography>
								<Typography variant="body2" gutterBottom>
									C.J Tudor
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Tapa Blanda, Nuevo
								</Typography>
							</Grid>
						</Grid>
					</Grid>
					</Grid>
					<Grid item paddingLeft={'5rem'}>
						<Typography variant='subtitle1' component='div'>
							$97.450
						</Typography>
					</Grid>
					<Grid container item justifyContent='center' alignItems='center' paddingTop={2}>
						<ButtonBase className='butonadd' variant='contained'>
							Añadir al carro
						</ButtonBase>
					</Grid>
				</Grid>

				<Grid item xs>
					<Grid item container direction='column'>
						<Grid item>
							<Img src={terror10} alt='terror1'></Img>
						</Grid>
						<Grid item xs={12} sm container>
						<Grid item xs container direction='row' spacing={2} padding={1}>
							<Grid item xs>
								<Typography gutterBottom variant="subtitle1" component="div">
									El invierno más largo
								</Typography>
								<Typography variant="body2" gutterBottom>
									Cecilia Ekback
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Tapa Blanda, Usado
								</Typography>
							</Grid>
						</Grid>
					</Grid>
					</Grid>
					<Grid item paddingLeft={'5rem'}>
						<Typography variant='subtitle1' component='div'>
							$124.560
						</Typography>
					</Grid>
					<Grid container item justifyContent='center' alignItems='center' paddingTop={2}>
						<ButtonBase className='butonadd' variant='contained'>
							Añadir al carro
						</ButtonBase>
					</Grid>
				</Grid>

				<Grid item xs={2}>
					<Grid item container direction='column'>
						<Grid item>
							<Img src={terror11} alt='terror1'></Img>
						</Grid>
						<Grid item xs={12} sm container>
						<Grid item xs container direction='row' spacing={2} padding={1}>
							<Grid item xs>
								<Typography gutterBottom variant="subtitle1" component="div">
									El visitante
								</Typography>
								<Typography variant="body2" gutterBottom>
									Stephen King
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Tapa Dura, Nuevo
								</Typography>
							</Grid>
						</Grid>
					</Grid>
					</Grid>
					<Grid item paddingLeft={'5rem'}>
						<Typography variant='subtitle1' component='div'>
							$213.570
						</Typography>
					</Grid>
					<Grid container item justifyContent='center' alignItems='center' paddingTop={2}>
						<ButtonBase className='butonadd' variant='contained'>
							Añadir al carro
						</ButtonBase>
					</Grid>
				</Grid>

				<Grid item xs>
					<Grid item container direction='column'>
						<Grid item>
							<Img src={terror12} alt='terror1'></Img>
						</Grid>
						<Grid item xs={12} sm container>
						<Grid item xs container direction='row' spacing={2} padding={1}>
							<Grid item xs>
								<Typography gutterBottom variant="subtitle1" component="div">
									El intercambio
								</Typography>
								<Typography variant="body2" gutterBottom>
									Rebecca Fleet
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Tapa Dura, Nuevo
								</Typography>
							</Grid>
						</Grid>
					</Grid>
					</Grid>
					<Grid item paddingLeft={'5rem'}>
						<Typography variant='subtitle1' component='div'>
							$145.670
						</Typography>
					</Grid>
					<Grid container item justifyContent='center' alignItems='center' paddingTop={2}>
						<ButtonBase className='butonadd' variant='contained'>
							Añadir al carro
						</ButtonBase>
					</Grid>
				</Grid>

				<Grid item xs>
					<Grid item container direction='column'>
						<Grid item>
							<Img src={terror13} alt='terror1'></Img>
						</Grid>
						<Grid item xs={12} sm container>
						<Grid item xs container direction='row' spacing={2} padding={1}>
							<Grid item xs>
								<Typography gutterBottom variant="subtitle1" component="div">
									Un rastro de asesinato
								</Typography>
								<Typography variant="body2" gutterBottom>
									Blake Pierce
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Tapa Blanda, Usado
								</Typography>
							</Grid>
						</Grid>
					</Grid>
					</Grid>
					<Grid item paddingLeft={'5rem'}>
						<Typography variant='subtitle1' component='div'>
							$48.650
						</Typography>
					</Grid>
					<Grid container item justifyContent='center' alignItems='center' paddingTop={2}>
						<ButtonBase className='butonadd' variant='contained'>
							Añadir al carro
						</ButtonBase>
					</Grid>
				</Grid>

				<Grid item xs>
					<Grid item container direction='column'>
						<Grid item>
							<Img src={terror14} alt='terror1'></Img>
						</Grid>
						<Grid item xs={12} sm container>
						<Grid item xs container direction='row' spacing={2} padding={1}>
							<Grid item xs>
								<Typography gutterBottom variant="subtitle1" component="div">
									Obsesión
								</Typography>
								<Typography variant="body2" gutterBottom>
									J.L. Butler
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Tapa Dura, Nuevo
								</Typography>
							</Grid>
						</Grid>
					</Grid>
					</Grid>
					<Grid item paddingLeft={'5rem'}>
						<Typography variant='subtitle1' component='div'>
							$163.160
						</Typography>
					</Grid>
					<Grid container item justifyContent='center' alignItems='center' paddingTop={2}>
						<ButtonBase className='butonadd' variant='contained'>
							Añadir al carro
						</ButtonBase>
					</Grid>
				</Grid>

				<Grid item xs>
					<Grid item container direction='column'>
						<Grid item>
							<Img src={terror15} alt='terror1'></Img>
						</Grid>
						<Grid item xs={12} sm container>
						<Grid item xs container direction='row' spacing={2} padding={1}>
							<Grid item xs>
								<Typography gutterBottom variant="subtitle1" component="div">
									Bibilioteca de los muertos
								</Typography>
								<Typography variant="body2" gutterBottom>
									Glenn Cooper
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Tapa Blanda, Usado
								</Typography>
							</Grid>
						</Grid>
					</Grid>
					</Grid>
					<Grid item paddingLeft={'5rem'}>
						<Typography variant='subtitle1' component='div'>
							$74.890
						</Typography>
					</Grid>
					<Grid container item justifyContent='center' alignItems='center' paddingTop={2}>
						<ButtonBase className='butonadd' variant='contained'>
							Añadir al carro
						</ButtonBase>
					</Grid>
				</Grid>

				<Grid item xs={2}>
					<Grid item container direction='column'>
						<Grid item>
							<Img src={terror16} alt='terror1'></Img>
						</Grid>
						<Grid item xs={12} sm container>
						<Grid item xs container direction='row' spacing={2} padding={1}>
							<Grid item xs>
								<Typography gutterBottom variant="subtitle1" component="div">
									El ritual
								</Typography>
								<Typography variant="body2" gutterBottom>
									Adam Nevill
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Tapa Blanda, Nuevo
								</Typography>
							</Grid>
						</Grid>
					</Grid>
					</Grid>
					<Grid item paddingLeft={'5rem'}>
						<Typography variant='subtitle1' component='div'>
							$137.420
						</Typography>
					</Grid>
					<Grid container item justifyContent='center' alignItems='center' paddingTop={2}>
						<ButtonBase className='butonadd' variant='contained'>
							Añadir al carro
						</ButtonBase>
					</Grid>
				</Grid>

				<Grid item xs>
					<Grid item container direction='column'>
						<Grid item>
							<Img src={terror17} alt='terror1'></Img>
						</Grid>
						<Grid item xs={12} sm container>
						<Grid item xs container direction='row' spacing={2} padding={1}>
							<Grid item xs>
								<Typography gutterBottom variant="subtitle1" component="div">
									La gallina degollada
								</Typography>
								<Typography variant="body2" gutterBottom>
									Horacio Quiroga
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Tapa Blanda, Nuevo
								</Typography>
							</Grid>
						</Grid>
					</Grid>
					</Grid>
					<Grid item paddingLeft={'5rem'}>
						<Typography variant='subtitle1' component='div'>
							$48.340
						</Typography>
					</Grid>
					<Grid container item justifyContent='center' alignItems='center' paddingTop={2}>
						<ButtonBase className='butonadd' variant='contained'>
							Añadir al carro
						</ButtonBase>
					</Grid>
				</Grid>

				<Grid item xs>
					<Grid item container direction='column'>
						<Grid item>
							<Img src={terror18} alt='terror1'></Img>
						</Grid>
						<Grid item xs={12} sm container>
						<Grid item xs container direction='row' spacing={2} padding={1}>
							<Grid item xs>
								<Typography gutterBottom variant="subtitle1" component="div">
									La casa negra
								</Typography>
								<Typography variant="body2" gutterBottom>
									S. King & Peter Straub
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Tapa Blanda, Nuevo
								</Typography>
							</Grid>
						</Grid>
					</Grid>
					</Grid>
					<Grid item paddingLeft={'5rem'}>
						<Typography variant='subtitle1' component='div'>
							$246.980
						</Typography>
					</Grid>
					<Grid container item justifyContent='center' alignItems='center' paddingTop={2}>
						<ButtonBase className='butonadd' variant='contained'>
							Añadir al carro
						</ButtonBase>
					</Grid>
				</Grid>

				<Grid item xs>
					<Grid item container direction='column'>
						<Grid item>
							<Img src={terror19} alt='terror1'></Img>
						</Grid>
						<Grid item xs={12} sm container>
						<Grid item xs container direction='row' spacing={2} padding={1}>
							<Grid item xs>
								<Typography gutterBottom variant="subtitle1" component="div">
									La última habitación
								</Typography>
								<Typography variant="body2" gutterBottom>
									Carlos Navas
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Tapa Blanda, Usado
								</Typography>
							</Grid>
						</Grid>
					</Grid>
					</Grid>
					<Grid item paddingLeft={'5rem'}>
						<Typography variant='subtitle1' component='div'>
							$104.520
						</Typography>
					</Grid>
					<Grid container item justifyContent='center' alignItems='center' paddingTop={2}>
						<ButtonBase className='butonadd' variant='contained'>
							Añadir al carro
						</ButtonBase>
					</Grid>
				</Grid>

				<Grid item xs>
					<Grid item container direction='column'>
						<Grid item>
							<Img src={terror20} alt='terror1'></Img>
						</Grid>
						<Grid item xs={12} sm container>
						<Grid item xs container direction='row' spacing={2} padding={1}>
							<Grid item xs>
								<Typography gutterBottom variant="subtitle1" component="div">
									Amercian psycho
								</Typography>
								<Typography variant="body2" gutterBottom>
									Bret Ellis
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Tapa Blanda, Usado
								</Typography>
							</Grid>
						</Grid>
					</Grid>
					</Grid>
					<Grid item paddingLeft={'5rem'}>
						<Typography variant='subtitle1' component='div'>
							$74.760
						</Typography>
					</Grid>
					<Grid container item justifyContent='center' alignItems='center' paddingTop={2}>
						<ButtonBase className='butonadd' variant='contained'>
							Añadir al carro
						</ButtonBase>
					</Grid>
				</Grid>

			</Grid>
		</Container>
  )
}

export default Terror