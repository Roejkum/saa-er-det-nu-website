import React from 'react';
import Layout from '../components/Layout/Layout';
import SunSvg from '../components/SunSvg/SunSvg';
import { Helmet } from 'react-helmet';

const events = () => (

  <Layout>
      <Helmet>
      <title>'Så er det nu: Gør valget grønt’ - events</title>
    </Helmet>
    <section className="section section-signup fullHeight events-page">
      <SunSvg/>
      <div className="container wrap">
        <div className="row">
          <div className="col-xs-12">
            <div className="container fade-in">
              <div className="row">
                <div className="col-xs-12">
                <link href='https://actionnetwork.org/css/style-embed-whitelabel-v3.css' rel='stylesheet' type='text/css' />
                <script src='https://actionnetwork.org/widgets/v3/event_campaign/middagstest?format=js&source=widget&style=full' async></script>
                <div id='can-event_campaign-area-middagstest' style={{width: '100%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default events;
