import React from 'react';
import Layout from '../components/Layout/Layout';
import SunSvg from '../components/SunSvg/SunSvg';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';

const middag = () => (

  <Layout>
      <Helmet>
      <title>'Så er det nu: Gør valget grønt’ - events</title>
    </Helmet>
    <section className="section section-signup fullHeight">
      <SunSvg/>
      <div className="container-fluid wrap">
        <div className="row">
          <div className="col-xs-12">
            <div className="container-fluid fade-in">
              <div className="row">
                <div className="col-xs-12">
                  <iframe src="https://www.notion.so/Hold-din-egen-Gr-nne-Middag-5ac2d24fb8564df3907afc6f00c43270" style={{width: '100%'}}></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default middag;