
import React from 'react'
import { Container, Row,Col } from 'react-bootstrap';
import {Link} from 'react-router-dom'

function Footer () {
  return (
    <footer>
      <Container>
        <Row>
          <Col sm={6} lg={3} className='mb-4 mb-lg-0' >
          <div className='text-center'>
           <h5>Location</h5>
           <p>Gandhi Street</p>
           <p>Chennai,Tamilnadu-607105</p>
          </div>
          </Col>

          <Col sm={6} lg={3} className='mb-4 mb-lg-0' >
          <div className='text-center'>
           <h5>Working Hours</h5>
           <p>Mon-Fri : 9:00 = 10:00PM</p>
           <p>Saturday : 10:00 = 8:30PM</p>
           <p>Sunday : 12:00 = 5:00PM</p>
          </div>
          </Col>

          <Col sm={6} lg={3} className='mb-4 mb-lg-0' >
          <div className='text-center'>
           <h5>Folloe Us</h5>
           <p>Lorem ipsum dolor sit amet.</p>
          
          <ul  className='list-unstyle text-center mt-2'>
            <li>
              <Link to="/">
              <i class="bi bi-facebook"></i>
              </Link>
            </li>

            <li>
              <Link to="/">
              <i class="bi bi-twitter"></i>
              </Link>
            </li>

            <li>
              <Link to="/">
              <i className='bi-bi-facebook' ></i>
              </Link>
            </li>

            <li>
              <Link to="/">
              <i class="bi bi-instagram"></i>
              </Link>
            </li>

             <li>
              <Link to="/">
              <i class="bi bi-youtube"></i>
              </Link>
            </li>


          </ul>
           
          </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer