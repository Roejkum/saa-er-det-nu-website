import React from 'react';
import Layout from '../components/Layout/Layout';
import BarCount from '../components/BarCount/BarCount';
import ContactForm from '../components/ContactForm/ContactForm';
import grass from "../../static/img/grassnew.svg"
import MapDk from '../components/Map/MapDk';
import logo from "../../static/img/logo.svg";
import SunSvg from '../components/SunSvg/SunSvg';
import Trees from '../components/Trees/Trees';
import Fade from 'react-reveal/Fade';

export default class IndexPage extends React.Component {
  state = {
    totalSigners: null
  }

  componentDidMount() {
      fetch('/.netlify/functions/getSubscriberAmount', {
        method: 'POST'
      })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(JSON.stringify(data.msg));
        this.setState({totalSigners: data.msg})
      })
      .catch((error) => console.log(error));
  }

  render() {

    return (
      <Layout>
        <section className="section section-signup">
        <SunSvg/>
        <Trees/>
          <div className="container-fluid wrap">
            <div className="row">

              {/* tekst */}
              <Fade >
              <div className="col-sm-7 col-md-6 col-xs-12 last-sm pl-sm">
                <img src={logo} alt="Logo" className="logo"/>
                <h1>Kan vi få 100.000 underskrifter på at gøre <span className="bold-text">valget grønt?</span></h1>
                <BarCount amount={this.state.totalSigners} totalAmount="50"/>
                <p>Hvis du også synes at klima og natur skal øverst på dagsordenen til det kommende folketingsvalg, så skriv under og vær med til at råbe politikerne op!</p>
              </div>
              </Fade>

                {/* Signupform */}
                <div className="col-sm-5 col-xs-12">
                  <div className="container-fluid white-box fade-in">
            <div className="row">
              <div className="col-xs-12">
                <h2>Skriv under nu!</h2>
                <p>Vi skal snart til valg og det er nu vi skal vise politikerne at tiden til små skridt og tomme løfter er ovre. Vi vil se omgående handling fra første år af en ny regerings levetid. </p>
                
                <ContactForm/>
              </div>
            </div>
            </div>
                </div>

              </div>
            
              </div>
          <img src={grass} alt="grass" className="grass" />
        </section>

        {/* Map section */}
        <section className="map-section">
          <div className="container-fluid wrap">
            <div className="row">
              <div className="col-sm-7 col-md-6 col-md-offset-1 col-xs-12 last-sm">
              <p>Vi skal snart til valg og det er nu vi skal vise politikerne at tiden til små skridt og tomme løfter er ovre. Vi vil se omgående handling fra første år af en ny regerings levetid. </p>
              </div>
              <div className="col-sm-5 col-xs-12">
              <MapDk /> 
              </div>
            </div>
          </div>
        </section>
        
      </Layout>
    )
  }
}
