import React from 'react';
import Layout from '../components/Layout/Layout';
import BarCount from '../components/BarCount/BarCount';
import ContactForm from '../components/ContactForm/ContactForm';
import grass from "../../static/img/grassnew.svg";
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
      })
      
      
    
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
              <div className="col-sm-7 col-md-6 col-xs-12 last-sm pl-sm">
                <img src={logo} alt="Logo" className="logo"/>
                <h1 className="h2">Kan vi få 100.000 underskrifter på at gøre <span className="bold-text">valget grønt?</span></h1>
                <BarCount amount={this.state.totalSigners} totalAmount="50"/>
                <p>Hvis du også synes at klima og natur skal øverst på dagsordenen til det kommende folketingsvalg, så skriv under og vær med til at råbe politikerne op!</p>
              </div>

                {/* Signupform */}
                <div className="col-sm-5 col-xs-12">
                  <div className="container-fluid white-box fade-in">
            <div className="row">
              <div className="col-xs-12">
                <h3>COUNTDOWN!!!!!!</h3>
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
              <p className="fadeIn text-center"><span className="bold-text">Vi skal</span> her og nu iværksætte den nødvendige omstilling af vores samfund, for at undgå at den globale opvarmning overstiger 1,5 grader. </p>
              <p className="fadeIn text-center"><span className="bold-text">Vi skal</span> sikre at vores produktion og forbrug sker i fuld balance med naturgrundlag, klima og dyreliv. Danmark skal med eksemplets magt vise verden, at det er muligt at finde de nye løsninger, der gør, at vi kan lykkes som menneskehed.</p>
              <p className="fadeIn text-center"><span className="bold-text">Vi skal</span> beskytte vores vand - både vores drikkevand og verdenshavene. Og vi skal bevare et stabilt klima og varieret dyre- og planteliv. Vi skal sørge for, at de næste generationer også kan nyde den summende humlebi, den sky hare og havørnens brede vingefang.</p>
              <p className="fadeIn text-center"><span className="bold-text">Næste valgperiode er helt afgørende.</span> Det er nu vi skal sætte fart i en retfærdig omstilling af Danmark. Derfor har vi stiftet ‘så er det nu’ bevægelsen. For at gøre den grønne omstilling til valgkampens vigtigste tema og for at sikre, at vi får et folketing, der allerede i næste valgperiode kan levere på følgende 3 mål:</p>
              <p className="fadeIn text-center">- Sænke det danske CO2 fodaftryk med 1 ton per dansker om året</p>
              <p className="fadeIn text-center">- Sikre at natur udgør mindst en femtedel af Danmarks samlede areal</p>
              <p className="fadeIn text-center">- Beskytte vores drikkevand, folkesundhed og miljø ved at påbegynde en total udfasning af sprøjtegifte</p>
              
          

              </div>
            </div>
          </div>
        </section>
        
      </Layout>
    )
  }
}
