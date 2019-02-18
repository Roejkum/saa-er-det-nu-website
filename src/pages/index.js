import React from 'react';
import Layout from '../components/Layout/Layout';
import BarCount from '../components/BarCount/BarCount';
import ContactForm from '../components/ContactForm/ContactForm';
import Grass from '../components/Grass/Grass'
import mosaik from "../../static/img//mosaik.jpg";
import MapDk from '../components/Map/MapDk';
import logo from "../../static/img/logo.svg";
import SunSvg from '../components/SunSvg/SunSvg';
import Trees from '../components/Trees/Trees';

export default class IndexPage extends React.Component {
  state = {
    totalSigners: null,
    mapVisible: false

  }

  componentDidMount() {
      fetch('/.netlify/functions/getSubscriberAmount', {
        method: 'POST'
      })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        // console.log(JSON.stringify(data.msg));
        this.setState({totalSigners: data.msg})
      })
      .catch((error) => console.log(error));
      
      import('scrollreveal').then(({ default: ScrollReveal }) => {
        
        ScrollReveal().reveal('.fadeIn', { delay: 300, distance: '-2rem', duration: 1000, interval: 200 });
      
      const animate = () => {
        this.setState({
          mapVisible: true
        });
      }

      ScrollReveal().reveal('.map', { afterReveal: animate, delay: 300, distance: '-2rem', duration: 1000 });
      });

      const Parallax = require('parallax-js')
        const scene = document.getElementById('scene');
        const parallaxInstance = new Parallax(scene);
      
    
  }

  render() {

    return (
      <Layout>
        <section className="section section-signup">
        <div id="scene">
          <SunSvg/>
          <Grass/>
          <Trees/>
        </div>
          <div className="container-fluid wrap">
            <div className="row">

              {/* tekst */}
              <div className="col-sm-7 col-md-6 col-xs-12 last-sm pl-sm">
                <img src={logo} alt="Logo" className="logo"/>
                <h1>Gør valget <span className="bold-text">grønt!</span></h1>
                <BarCount amount={this.state.totalSigners} totalAmount="10000"/>
                <p>De politiske partier skal love at gøre Danmark grønt. De skal love at stoppe ødelæggelsen af vores natur og klima. Nu. Vi vil ikke høre mere snak, vi vil se ægte handling.</p>
                <p>
                Det kræver, at vi samler os nu og hæver stemmen. Vil du være med?
                </p>
              </div>

                {/* Signupform */}
                <div className="col-sm-5 col-xs-12">
                  <div className="container-fluid white-box fade-in">
            <div className="row">
              <div className="col-xs-12">
                <h2>Sammen kan vi skabe historie</h2>
                <h4>Hvis vi er nok borgere, der går sammen, kan vi presse partierne til at love at gøre Danmark grønt igen. Skriv under og spred ordet, så er vi igang!</h4>
                <p>Jeg er med!</p>
                
                <ContactForm/>
              </div>
            </div>
            </div>
                </div>

              </div>
            
              </div>
              
        </section>

        <section className="stillere-sektion">
        <img src={mosaik} style={{width: '100%'}} alt="signers"/>
        <div style={{position: 'absolute', width: '100%', height: '100%', top: 0}}>
          <div className="container-fluid wrap">
            <div className="row middle-sm">
              <div className="col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4 col-xs-12">
              <h2 className="fadeIn h1 text-center white-text signers">{this.state.totalSigners}</h2>
              <h2 className="fadeIn text-center white-text">Underskrivere</h2>
              </div>
            </div>
          </div>
          </div>
        </section>

        {/* Map section */}
        <section className="map-section">
          <div className="container-fluid wrap">
            <div className="row middle-sm">
              <div className="col-sm-7 col-md-6 col-md-offset-1 col-xs-12 last-sm">
              <h2 className="fadeIn">Lorem ipsum <span className="bold-text">overskrift</span></h2>
              <p className="fadeIn">Vi skal snart til valg og det er nu vi skal vise politikerne at tiden til små skridt og tomme løfter er ovre. Vi vil se omgående handling fra første år af en ny regerings levetid. </p>
              </div>
              <div className="col-sm-5 col-xs-12 map">
              <MapDk visible={this.state.mapVisible} /> 
              </div>
            </div>
          </div>
        </section>

        <section className="text-section">
          <div className="container-fluid wrap">
            <div className="row">
              <div className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-xs-12">
              <h2 className="fadeIn text-center">Så er det nu: gør valget grønt
</h2>
              <p className="fadeIn text-center"><span className="bold-text">Vi skal</span> være mange. Del kampagnen på sociale medier og skriv direkte til folk du kender</p>
              <p className="fadeIn text-center"><span className="bold-text">Vi skal</span> være synlige. Skab opmærksomhed hvor du bor, arbejder eller uddanner dig.</p>
              <p className="fadeIn text-center"><span className="bold-text">Vi skal</span>  lægge pres. Vi henvender os til politikerne og beder dem gøre Danmark grønt - online og til valgmøder.</p>

              <p className="fadeIn text-center"><span className="bold-text">Ved at vi... ??</span> (har du en ide til, hvordan vi sammen kan gøre valget grønt? Så snart du har skrevet under, så skyd dine ideer afsted til os!)</p>
  
              
          

              </div>
            </div>
          </div>
        </section>
        
      </Layout>
    )
  }
}
