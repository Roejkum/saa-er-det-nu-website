import React from 'react';
import Layout from '../components/Layout/Layout';
import Events from '../components/Events/Events';

import { Helmet } from 'react-helmet';

// const events = () => (

//   <Layout>
//       <Helmet>
//       <title>'Så er det nu: Gør valget grønt’ - events</title>
//     </Helmet>
//     <Events/>
//   </Layout>
// );

// export default events;


function events () {
  return (
    <Layout>
      <Helmet>
        <title>'Så er det nu: Gør valget grønt’ - events</title>  
        </Helmet>
      <Events/>
    </Layout>
  )
}

export default events;