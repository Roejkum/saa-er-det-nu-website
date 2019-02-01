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
          <div className="container">
            <div className="row">
              {/* tekst */}
              <div className="col-md-7 col-md-offset-1 col-xs-12 last-md">
                <img src={logo} alt="Logo" />
                <h1 className="has-text-weight-bold is-size-2 white-text">Kan vi få 100.000 underskrifter på at gøre <span className="bold-text">valget grønt?</span></h1>
                <h1 className="white-text">{this.state.totalSigners} Har underskrevet</h1>
              </div>

                {/* Signupform */}
                <div className="col-md-4 col-xs-12">
                  <div className="container-fluid white-box">
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
