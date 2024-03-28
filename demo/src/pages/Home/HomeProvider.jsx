
import React from 'react';
import LayoutProvider from '../../components/Layouts/LayoutProvider';
import SectionProvider1 from './SectionProvider1';
import "../../styles/HomeStyleProvider.css";
import SectionProvider2 from './SectionProvider2';
import SectionProvider3 from './SectionProvider3';
import SectionProvider4 from './SectionProvider4';

function HomeProvider () {
  return (
    <>
     <LayoutProvider>
     {/* Home Section Hero Banner */}
     <SectionProvider1/>
      {/* Home Section About */}
      <SectionProvider2/>
       {/* Home Section Menu */}
       <SectionProvider3/>
       {/* Home Section Menu */}
       <SectionProvider4/>
     </LayoutProvider>
    </>
  )
}

export default HomeProvider