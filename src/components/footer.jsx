import '../styles/footer.css'
import twitter from '../images/twitter.svg'
import facebook from '../images/facebook.svg'
import instagram from '../images/instagram.svg'
import gmail from '../images/gmail.svg'

export default function Footer(){
	return(
		<div className='footer'>
			<div className='sb_footer section_padding'>
				<div className='sb_footer-links'>
					<div className='sb_footer-links_div servicio'>
						<h4>Servicios Librarius</h4>
						<a href='#'>
							<p>Afiliación al programa</p>
						</a>
						<a href='#'>
							<p>Publicaciones y guías de Autores</p>
						</a>
						<a href='#'>
							<p>Descuentos en pedidos al granel</p>
						</a>
						<a href='#'>
							<p>Prensa Librarius</p>
						</a>
					</div>
					<div className='sb_footer-links_div recurso'>
						<h4>Recursos</h4>
						<a href='#'>
							<p>Centro de recursos</p>
						</a>
						<a href='#'>
							<p>Opiniones</p>
						</a>
					</div>
					<div className='sb_footer-links_div redes'>
						<h4>Encuentranos en</h4>
						<div className='socialmedia'>
							<p><img src={instagram} alt='' href='https://www.instagram.com/'/>Instagram</p>
							<p><img src={twitter} alt='' href='https://twitter.com/ceciarmy/status/1664297250397253633'/>Twitter</p>
							<p><img src={gmail} alt='' href='https://www.google.com/intl/es-419/gmail/about/'/>Gmail</p>
						</div>
					</div>
				</div>
				<hr></hr>
				<div className='sb_footer-below'>
					<div className='sb_footer-copyright'>
						<p>@{new Date().getFullYear()} Todos los derechos reservados</p>
					</div>
					<div className='sb_footer-below-links'>
						<a href='#'><p>Terminos y condiciones</p></a>
						<a href='#'><p>Privacidad</p></a>
						<a href='#'><p>Declaraciones de Cookies</p></a>
					</div>
				</div>
			</div>
		</div>
  )
}