import React from 'react';
import Layout from '../components/Layout/Layout';
import grass from "../../static/img/grassnew.svg";
import logo from "../../static/img/logo.svg";
import SunSvg from '../components/SunSvg/SunSvg';
import Trees from '../components/Trees/Trees';
import Countdown from '../components/countdown/Countdown';

export default class IndexPage extends React.Component {
  state = {
    totalSigners: null,
    mapVisible: false

  }

  componentDidMount() {
      import('scrollreveal').then(({ default: ScrollReveal }) => {
        ScrollReveal().reveal('.fadeIn', { delay: 300, distance: '-2rem', duration: 1000, interval: 200 });
      })
      
  }

  render() {

    return (
      <Layout>
        <section className="section section-signup">
        <SunSvg/>
        <Trees/>
          <div className="container-fluid wrap">
            <div className="row center-xs">
            
              {/* tekst */}
              <div className="col-xs-12 col-sm-6">
                <img src={logo} alt="Logo" className="logo"/>
              </div>

                {/* Signupform */}
                  <div className="container-fluid fade-in">
                    <div className="row">
                      <div className="col-xs-12 col-sm-8 col-sm-offset-2 ">
                        <h1 className="h2">Her kan du være med fra
                        <span className="bold-text"> d. 19/2 2019.</span></h1> 
                        <p>Underskriv om:</p>
                        <Countdown />
                        <p>Vi er en lille, men hurtigt voksende 
                        gruppe af bekymrede borgere, der knokler 
                      for at blive klar til lancering af vores 
                        initiativ snart. Har du lyst til at hjælpe os? Så kan du skrive til os på <a href="mailto: info@såerdet.nu" className="bold-text unstyled-text">info@såerdet.nu</a>
                      <br /><br /> - Vi håber du vil være med!<br /></p>
                      </div>
                     </div>
                    </div>
                 </div>
              </div>
          <img src={grass} alt="grass" className="grass" />
        </section>
      </Layout>
    )
  }
}

