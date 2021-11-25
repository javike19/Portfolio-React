import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import projects from "./ProjectsInfo";

const CarouselPics = () => {
  const [selectedProject, setSelectedProject] = useState(null);
    return (
<>
    <div>
      {selectedProject && selectedProject.images.map((pic) => {
          return (
            <img src={pic} alt="pic" />                                )
      })}
      </div>

        <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://placeimg.com/640/480/tech"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://placeimg.com/640/480/tech"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://placeimg.com/640/480/tech"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</>
    )
}

export default CarouselPics
