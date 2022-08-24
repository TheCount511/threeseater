import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slidedata from '../../assets/slidedata.json'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BannerPromo, BannerPromoLink } from './styles/carousel';


const BannerCarousel = () => {
    return (
        <Container>
            <Row sm="1" md="2">
                <Col md="7">
                <Carousel variant="light" fade >

                {slidedata.map((item, index) => (
                        <Carousel.Item  key={index}>
                            <img
                                className='d-block w-100'
                                src={require(`../../assets/slidepictures/${item.src}.png`)}
                                alt={` ${item}`} 
                               />
                            <Carousel.Caption style={{"fontFamily": "'Open Sans', sans-serif"}}>
                                <h5>First slide label</h5>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
                </Col>
                <Col md={{span:4, offset:1}}>
                    <BannerPromo className="px-md-4" mode="Promo">Sale! 30% off* everything outdoors</BannerPromo>
                <BannerPromo mode="label" className="px-md-4">Beat the heat with cool styles</BannerPromo>
                <BannerPromo><BannerPromoLink mode="label" className="px-md-4" link>Shop Now</BannerPromoLink></BannerPromo>
                </Col>
            </Row>

        </Container>
    );
}

export default BannerCarousel;