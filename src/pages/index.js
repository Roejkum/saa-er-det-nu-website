import React from 'react'
import Layout from '../components/Layout/Layout'
import BarCount from '../components/BarCount/BarCount';
import ContactForm from '../components/ContactForm/ContactForm';
import logo from "../../static/img/Logo_2.svg"
import graes from "../../static/img/Graes.svg"

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
          <div className="container-fluid wrap">
            <div className="row">
              {/* tekst */}
              <div className="col-sm-7 col-md-6 col-md-offset-1 col-xs-12 last-sm">
                <img src={logo} alt="Logo" />
                <h1 className="white-text text-center-xs">Kan vi få 100.000 underskrifter på at gøre <span className="bold-text">valget grønt?</span></h1>
                <p className="white-text text-center-xs">Hvis du også synes at klima og natur skal øverst på dagsordenen til det kommende folketingsvalg, så skriv under og vær med til at råbe politikerne op!</p>
              </div>

                {/* Signupform */}
                <div className="col-sm-5 col-xs-12">
                  <div className="container-fluid white-box fade-in">
            <div className="row">
              <div className="col-xs-12">
                <h2>Skriv under nu!</h2>
                <p>Vi skal snart til valg og det er nu vi skal vise politikerne at tiden til små skridt og tomme løfter er ovre. Vi vil se omgående handling fra første år af en ny regerings levetid. </p>
                <BarCount amount={this.state.totalSigners} totalAmount="10"/>
                <ContactForm/>
              </div>
            </div>
            </div>
                </div>

              </div>
            
              </div>
          <img src={graes} alt="grass" className="grass" />
          
        </section>
        
      </Layout>
    )
  }
}
