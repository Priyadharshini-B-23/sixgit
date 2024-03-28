
import React from 'react';
import LayoutSeeker from '../../components/Layouts/LayoutSeeker';
import SectionSeeker1 from './SectionSeeker1';
import "../../styles/HomeStyle.css";
import SectionSeeker2 from './SectionSeeker2';
import SectionSeeker3 from './SectionSeeker3';
import SectionSeeker4 from './SectionSeeker4';

function HomeSeeker () {
  return (
    <>
     <LayoutSeeker>
     {/* Home Section Hero Banner */}
     <SectionSeeker1/>
      {/* Home Section About */}
      <SectionSeeker2/>
       {/* Home Section Menu */}
       <SectionSeeker3/>
       {/* Home Section Menu */}
       <SectionSeeker4/>
     </LayoutSeeker>
    </>
  )
}

export default HomeSeeker;