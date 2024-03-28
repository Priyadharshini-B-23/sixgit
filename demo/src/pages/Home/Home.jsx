
import React from 'react';
import Layout from '../../components/Layouts/Layout';
import Section1 from './Section1';
import "../../styles/HomeStyle.css";
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';

function Home () {
  return (
    <>
     <Layout>
     {/* Home Section Hero Banner */}
     <Section1/>
      {/* Home Section About */}
      <Section2/>
       {/* Home Section Menu */}
       {/* <Section3/> */}
       {/* Home Section Menu */}
       <Section4/>
       <Section5/>
     </Layout>
    </>
  )
}

export default Home