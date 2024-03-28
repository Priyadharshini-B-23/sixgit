
import React from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import PromotionImage from '../../assets/promotion/pro.png';

function SectionProvider4 (){
  return (
    <>
    <section className='promotion_section' >
    <Container>
        <Row>
            <Col lg={6} className='text-center mb-5 mb-lg-0' >
            <img src={PromotionImage} className='img-fluid' alt="promotion" />
            </Col>

            <Col lg={6} className='px-5' >
            <h2>Nothing brings peapole together like a good burger</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ea modi magnam beatae commodi eveniet ab! Accusantium, natus ratione. Accusantium quas voluptatum modi aliquam ducimus fugit repellendus inventore cum saepe.</p>
            <ul>
                <li><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, harum!</p></li>
                <li><p>Lorem ipsum dolor sit amet.</p></li>
                <li><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur ex eveniet amet delectus. Consectetur, ipsam!</p></li>
            </ul>
            </Col>
        </Row>
    </Container>
    </section>
    // BG Parallac scroll
    
    <section  className='bg_parallax_scroll'>
      
    </section>
    </>
  )
}

export default SectionProvider4