import React from 'react';
import Layout from '../components/Layout/Layout';
import BarCount from '../components/BarCount/BarCount';
import ContactForm from '../components/ContactForm/ContactForm';
import Grass from '../components/Grass/Grass'
import mosaik from "../../static/img//mosaik.jpg";
import vSLogo from '../../static/img/Verdens-Skove-logo.png';
import dMLogo from '../../static/img/DM-vandret.png';
import dNLogo from '../../static/img/DN-logo_almindelig_RGB_small.jpg';
import checkmark from '../img/checkmark.svg';
import logo from "../../static/img/logo.svg";
import SunSvg from '../components/SunSvg/SunSvg';
import Trees from '../components/Trees/Trees';
import { Link } from 'gatsby';

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
        return response.json();
      })
      .then((data) => {
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
              <div className="col-sm-6 col-md-7 col-xs-12 last-sm pl-sm">
                <img src={logo} alt="Logo" className="logo center-xs"/>
                <h1 className="text-center-xs">Gør valget <span className="bold-text">grønt!</span></h1>
                <BarCount amount={this.state.totalSigners}/>
                <p className="text-center-xs">De politiske partier skal love at gøre Danmark grønt. De skal love at stoppe ødelæggelsen af vores natur og klima. Nu. Vi vil ikke høre mere snak, vi vil se ægte handling.</p>
                <p className="text-center-xs">
                Det kræver, at vi samler os nu og hæver stemmen. Vil du være med?
                </p>
              </div>

              {/* Signupform */}
              <div className="col-sm-6 col-md-5 col-xs-12">
                  <div className="container-fluid white-box fade-in">
                    <div className="row">
                      <div className="col-xs-12">
                        <h2>Skriv under og spred ordet, så er vi igang!</h2>
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
              <h2 className="fadeIn text-center white-text signers-caption">Underskrivere</h2>
              </div>
            </div>
          </div>
          </div>
        </section>

        <section className="section section-w-padding">
          <div className="container wrap">
            <div className="row center-xs">
              <div className="col-xs-12 col-sm-8 col-md-6 logo-partners">
                <img src={vSLogo} alt="Verdens Skove logo" className="fadeIn"/>
                <img src={dMLogo} alt="Verdens Skove logo" className="fadeIn"/>
                <img src={dNLogo} alt="Verdens Skove logo" className="fadeIn"/>
              </div>
            </div>
          </div>
        </section>

        {/* Map section */}
        <section className="map-section">
          <div className="container-fluid wrap">
            <div className="row middle-sm">
            <div className="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-xs-12">
              <h2 className="fadeIn">Sådan kan vi gøre valget grønt, hvis <span className="bold-text">du er med</span></h2>
                <div className="checkmarkbox">
                 <img className="fadeIn checkmark" alt="checkmark" src={checkmark} />
                 <p className="fadeIn"><span className="bold-text">Vi skal</span> være mange. Del kampagnen på sociale medier og skriv direkte til folk du kender</p>
                </div>
                <div className="checkmarkbox">
                 <img className="fadeIn checkmark" alt="checkmark" src={checkmark} />
              <p className="fadeIn"><span className="bold-text">Vi skal</span> være synlige. Skab opmærksomhed hvor du bor, arbejder eller uddanner dig.</p>
              </div>
              <div className="checkmarkbox">
                 <img className="fadeIn checkmark" alt="checkmark" src={checkmark} />
              <p className="fadeIn"><span className="bold-text">Vi skal</span>  lægge pres. Vi henvender os til politikerne og beder dem gøre Danmark grønt - online og til valgmøder.</p>
              </div>
              <div className="checkmarkbox">
                 <img className="fadeIn checkmark" alt="checkmark" src={checkmark} />
              <p className="fadeIn"><span className="bold-text">Ved at vi... ??</span> (har du en ide til, hvordan vi sammen kan gøre valget grønt? Så snart du har skrevet under, så skyd dine ideer afsted til os!)</p>
              </div>
              </div>
              <div className="col-sm-5 col-xs-12 map">
              </div>
            </div>
          </div>
        </section>

        <section className="text-section">
          <div className="container-fluid wrap">
            <div className="row">
              <div className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-xs-12">
              <h2 className="fadeIn text-center">Initiativets grundlag og mål</h2>
              <p className="fadeIn text-center">Vi har lavet borgerinitiativet <span className="bold-text">"Så er det nu"</span> for at få den grønne omstilling øverst på valgkampens dagsorden og for at sikre, at vi får et Folketing, der allerede i næste valgperiode kan levere på følgende 3 mål:</p>
              <p className="fadeIn text-center"><span className="bold-text">1. </span> Gennemføre en grøn omstilling, som starter umiddelbart efter valget, og som sikrer at det danske klimaaftryk halveres i 2030 og går i nul i 2040</p>
                <p className="fadeIn text-center"><span className="bold-text">2. </span>Sikre at natur udgør mindst en femtedel af Danmarks samlede areal</p>
                <p className="fadeIn text-center"><span className="bold-text">3. </span>Beskytte vores drikkevand, folkesundhed og miljø ved at påbegynde en total udfasning af sprøjtegifte </p>
                <p className="fadeIn text-center">Sådan kan vi sammen gøre Danmark <span className="bold-text">grønt!</span></p>

              </div>
            </div>
          </div>
          <div className="container-fluid wrap">
            <div className="row">
              <div className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-xs-12">
              <p className="fadeIn text-center">Kontakt os på <br/><a className="bold-text" href="mailto:info@saaerdet.nu">info@saaerdet.nu</a></p>
              <p className="fadeIn text-center"><Link className="bold-text" to="/om-os">Om os</Link></p>
              <p className="fadeIn text-center"><Link className="bold-text" to="/persondatapolitik">Persondatapolitik</Link></p>
              <p className="fadeIn text-center"><Link className="bold-text" to="/cookie-politik">Cookie-politik</Link></p>
              </div>
              </div>
              </div>
              <p className="fadeIn text-center"><a href="https://www.facebook.com/saaerdetnu/">Følg med på Facebook</a></p>
        </section>        
      </Layout>
    )
  }
}
