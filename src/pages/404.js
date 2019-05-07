import React from 'react'
import Layout from '../components/Layout/Layout'
import { Link } from 'gatsby'
import Grass from '../components/Grass/Grass'
import SunSvg from '../components/SunSvg/SunSvg';
import Trees from '../components/Trees/Trees';
import { Helmet } from 'react-helmet';

const NotFoundPage = () => (
  <Layout>
    <Helmet>
      <title>404</title>
    </Helmet>
  <section className="section section-signup" style={{minHeight: '100vh', padding: 0}}>
  <SunSvg/>
  <Grass/>
  <Trees/>

    <div className="container-fluid wrap">
      <div className="row">
        {/* tekst */}
        <div className="col-xs-12 col-sm-6 col-sm-offset-3" style={{padding: '5rem 0'}}>
      <h1>Siden findes ikke :(</h1>
      <p>Du har fundet en side der ikke findes.<br/><br/>
      <Link to="/goer-valget-groent">Hop tilbage til forsiden</Link> eller bliv og nyd solen.</p>
    </div>
    </div>
    </div>
      
    </section>
  </Layout>
)

export default NotFoundPage
