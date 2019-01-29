import React from "react";
import Layout from '../../components/Layout/Layout'
import addToMailchimp from 'gatsby-plugin-mailchimp';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      isValidated: false, 
      emailValidated: false,
      nameValidated: false,
      errorMsg: '',
      form: {
        email: '',
        listFields: {
          FNAME: '',
          LNAME: ''        }
      },
    };
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  validateEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  handleChange = e => {
    if(e.target.name === 'email' && this.validateEmail(e.target.value)) {
      const currentFormData = this.state.form;
      const nameValidated = this.state.nameValidated;
      this.setState({
        form: {
          ...currentFormData,
          [e.target.name]: e.target.value 
        },
        emailValidated: true,
        isValidated: nameValidated
      });
      e.target.className = 'valid input';
    }

    if(e.target.value && e.target.name !== 'email') {
      const currentForm = this.state.form;
      const currentListFields = this.state.form.listFields;
      const emailValidated = this.state.emailValidated;
      const newForm = {
        ...currentForm,
        listFields: {
          ...currentListFields,
          [e.target.name]: e.target.value
        }
      };
      this.setState(() => {
        return {form: {
          ...newForm
        },
        isValidated: emailValidated,
        nameValidated: true
      };
      });
      e.target.className = 'valid input';
    }

    if(!e.target.value && e.target.name !== 'email') {
      e.target.className = 'invalid input';
      this.setState({
        isValidated: false
      });
    }
    if(e.target.name === 'email' && !this.validateEmail(e.target.value)) {
      e.target.className = 'invalid input';
      this.setState({
        isValidated: false,
        emailValidated: false
      })
    }
  };
  
  handleSubmit = e => {
    e.preventDefault();

    if(this.state.isValidated) {
      addToMailchimp(this.state.form.email, this.state.form.listFields)
        .then(data => {
        // I recommend setting data to React state
        // but you can do whatever you want (including ignoring this `then()` altogether)
        if(data.result === 'error') {
          this.setState({errorMsg: 'Der skete en fejl.'})
        }
      })
      console.log('submitted');
    } else {
      // this.setState({showError: true});
      this.setState({errorMsg: 'Der er fejl i din indtastning. Gennemgå venligst formularen og prøv igen.'})
    }
  };

  render() {

    const errorMsg = null;

    if(this.state.errorMsg) {
      this.errorMsg = (
        <p className="error">{this.state.errorMsg}</p>
      );
    }


    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h2>Skriv under nu!</h2>
              
          <form
            name="contact"
            method="post"
            action="/contact/thanks/"
            onSubmit={this.handleSubmit}
            >
            <div className="row">
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="contact" />
            <div hidden>
              <label>
                Don’t fill this out:{" "}
                <input name="bot-field" onChange={this.handleChange} />
              </label>
            </div>
            <div className="container">
              <div className="row">
                <div className="field col-xs-6">
                  <label className="label" htmlFor={"FNAME"} hidden>Fornavn</label>
                    <div className="control">
                      <input className="input" type={"text"} name={"FNAME"} onChange={this.handleChange} onFocus={this.handleChange} id={"name"} placeholder="Fornavn" required={true} />
                      <p>Fejl i indtastning</p>
                    </div>
                  </div>
                  <div className="field col-xs-6">
                    <label className="label" htmlFor={"FNAME"} hidden>Efternavn</label>
                    <div className="control">
                      <input className="input" type={"text"} name={"LNAME"} onChange={this.handleChange} onFocus={this.handleChange} id={"name"} placeholder="Efternavn" required={true} />
                      <p>Fejl i indtastning</p>
                    </div>
                  </div>
                <div className="field col-xs-12">
                  <label className="label" htmlFor={"email"} hidden>Email</label>
                    <div className="control">
                      <input className="input" type={"email"} name={"email"} onChange={this.handleChange} onFocus={this.handleChange} id={"email"} placeholder="Email" required={true} />
                      <p>Fejl i indtastning</p>
                    </div>
                  </div>
                  <div className="field col-xs-12">
                    <button className="button is-link" type="submit" disabled={!this.state.isValidated}>Send</button>
                    {errorMsg}
                    {this.errorMsg}
                  </div>
                </div>
              </div>
              </div>
            </form>
            </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}