
import React from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import Image1 from '../../assets/menu/burger-11.png';
import Image2 from '../../assets/menu/burger-12.png';
import Image3 from '../../assets/menu/burger-13.png';
import Image4 from '../../assets/menu/burger-14.png';
import Image5 from '../../assets/menu/burger-15.png';
import Image6 from '../../assets/menu/burger-16.png';
import Image7 from '../../assets/menu/burger-17.png';
import Image8 from '../../assets/menu/burger-18.png';
import Cards from '../../components/Layouts/Cards';
import {Link} from "react-router-dom";


//Mock data cards

const mockData=[
    {
        id:"0001",
        image:Image1,
        title:"Crispy Chicken",
        paragraph:"Chicken breast,chilli sauce,tomatoes.pickles,colesla",
        rating:2,
        price:99.15,
    },
    {
        id:"0002",
        image:Image2,
        title:"Ultimate Bacon",
        paragraph:"Chicken breast,chilli sauce,tomatoes.pickles,colesla",
        rating:5,
        price:99.15,
    },
    {
        id:"0003",
        image:Image3,
        title:"Ultimate Bacon",
        paragraph:"Chicken breast,chilli sauce,tomatoes.pickles,colesla",
        rating:3.7,
        price:99.15,
    },
    {
        id:"0004",
        image:Image4,
        title:"Ultimate Bacon",
        paragraph:"Chicken breast,chilli sauce,tomatoes.pickles,colesla",
        rating:1,
        price:99.15,
    },
    {
        id:"0005",
        image:Image5,
        title:"Ultimate Bacon",
        paragraph:"Chicken breast,chilli sauce,tomatoes.pickles,colesla",
        rating:5,
        price:99.15,
    },
    {
        id:"0006",
        image:Image6,
        title:"Ultimate Bacon",
        paragraph:"Chicken breast,chilli sauce,tomatoes.pickles,colesla",
        rating:2.5,
        price:99.15,
    },
    {
        id:"0007",
        image:Image7,
        title:"Ultimate Bacon",
        paragraph:"Chicken breast,chilli sauce,tomatoes.pickles,colesla",
        rating:3,
        price:99.15,
    },
    {
        id:"0008",
        image:Image8,
        title:"Ultimate Bacon",
        paragraph:"Chicken breast,chilli sauce,tomatoes.pickles,colesla",
        rating:4,
        price:99.15,
    },
];


//Rating logical data

const renderRatingIcons = (rating)=>{
    const starts=[];
    for(let i=0;i<5;i++){
        if(rating>0.5){
            starts.push(<i key={i} className='bi bi-star-fill' ></i>);
            rating--;
        }else if (rating > 0 && rating<1){
            starts.push(<i key={"half"} className='bi bi-star-half' ></i>);
            rating--;
        }else{
            starts.push(<i key={`empty${i}`} className='bi bi-star' ></i>);
        }
    }
    return starts;
};





function SectionProvider3 () {
  return (
   <section  className='menu_section' >
  <Container>
    <Row>
        <Col  lg={{span:8, offset:2}} className='text-center mb-5'>
        <h2>OUR CRACY BURGERS</h2>
        <p className='para' >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora consectetur quibusdam harum cumque sint perferendis blanditiis quam adipisci voluptatem porro!</p>
        </Col>
    </Row>

    <Row>
        {mockData.map((cardData, index)=>(
            <Cards  
            key={index}
            image={cardData.image}
            rating={cardData.rating}
            title={cardData.title}
            paragraph={cardData.paragraph}
            price={cardData.price}
            renderRatingIcons={renderRatingIcons}
            />
        ))}
    </Row>

    
     <Row className='pt-5' >
       <Col sm={6} lg={5}>
        <div  className='ads_box ads_img1 mb-5 mb-md-0'>
          <h4 className='mb-0' >GET YOUR FREE</h4>
          <h5 >CHEESE FRIES</h5>
          <Link to="/" className='btn btn_red px-4 rounded-0' >
          Learn More
          </Link>
        </div>
       </Col>

       <Col sm={6} lg={7}>
        <div  className='ads_box ads_img2'>
          <h4 className='mb-0' >GET YOUR FREE</h4>
          <h5 >CHEESE FRIES</h5>
          <Link to="/" className='btn btn_red px-4 rounded-0' >
          Learn More
          </Link>
        </div>
       </Col>
     </Row>

  </Container>
   </section>
  );
}

export default SectionProvider3;