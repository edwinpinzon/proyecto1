import Carousel from 'react-bootstrap/Carousel';
import Img1 from '../images/bienvenida.png'
import Img2 from '../images/firma.png'

function Banner() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img2}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;