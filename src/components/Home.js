import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../static/slide1.jpg';
import slide2 from '../static/slide2.jpg';
import slide3 from '../static/slide3.jpg';

const Home = () => {
  return (
  <div className="row">
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Home;