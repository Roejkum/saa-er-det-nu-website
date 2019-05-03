import React from 'react';
import Layout from '../components/Layout/Layout';
import SunSvg from '../components/SunSvg/SunSvg';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import instagram from "../../static/img/instagram.png";
import facebook from "../../static/img/facebook.png";
import twitter from "../../static/img/twitter.png";

const kontakt = () => (

  <Layout>
      <Helmet>
      <title>Kontakt ‘Så er det nu: Gør valget grønt’</title>
    </Helmet>
    <section className="section section-signup fullHeight">
      <SunSvg/>
      <div className="container-fluid wrap">
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2 col-xs-12">
            <div className="container-fluid white-box fade-in">
              <div className="row">
                <div className="col-xs-12">
                <Link to="/">&larr; Til forsiden</Link>
                <h2>Kontakt</h2>
                  <h3>Kontakt os på</h3>
                  <a href="mailto:info@saaerdet.nu">info@saaerdet.nu</a>
                  <h3>Pressehenvendelser</h3>
                  <a href="mailto:presse@saaerdet.nu">presse@saaerdet.nu</a>
                  <div className="some-icons-wrapper">
                    <a href="https://www.facebook.com/saaerdetnu/" target="_blank"><img src={facebook} className="some-icon fadeIn"/></a>
                    <a href="https://www.instagram.com/goervalgetgroent/" target="_blank"><img src={instagram} className="some-icon fadeIn"/></a>
                    <a href="https://twitter.com/saaerdetnu" target="_blank"><img src={twitter} className="some-icon fadeIn" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default kontakt;