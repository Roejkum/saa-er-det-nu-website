import React from 'react';
import LayoutSimple from '../components/Layout/LayoutSimple';
import ContactForm from '../components/ContactForm/ContactForm';
import { Helmet } from 'react-helmet';

const formular = () => (

  <LayoutSimple>
    <Helmet>
      <title>Tilmeldingsformular</title>
    </Helmet>
    <section>
    <div className="container-fluid white-box wrap" style={{ margin: 0 }}>
      <div className="row">
        <div className="col-xs-12">
          <h2>Skriv under og spred ordet, så er vi igang!</h2>
          <ContactForm/>
        </div>
      </div>
    </div>
    </section>
  </LayoutSimple>
);

export default formular;