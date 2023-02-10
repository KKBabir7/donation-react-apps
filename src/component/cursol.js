import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample(props) {
    const {image,imagee,imageee}=props
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image}
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagee}
          alt="Second slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imageee}
          alt="Third slide"
        />

       
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;