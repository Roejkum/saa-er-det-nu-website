import React, { Component } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import { Link } from 'gatsby';

class ContactForm extends Component {  
    state = { 
        loading: false,
        submitted: false,
        submitError: false,
        isValidated: false, 
        emailValidated: false,
        nameValidated: false,
        zipValidated: false,
        termsValidated: false,
        errorMsg: '',
        form: {
            email: '',
            listFields: {
            }
        },
      };  
    
      validateEmail = email => {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }
      validateZip = zip => {
        const re = /^[0-9]{4}$/;
        return re.test(zip);
      }
    
      handleChange = e => {
        if(e.target.name === 'email') {
          const emailValidated = this.validateEmail(e.target.value);
          const currentFormData = this.state.form;
          const nameValidated = this.state.nameValidated;
          const zipValidated = this.state.zipValidated;
          const termsValidated = this.state.termsValidated;
          this.setState({
            form: {
              ...currentFormData,
              [e.target.name]: e.target.value 
            },
            emailValidated: (emailValidated ? true : false),
            isValidated: (termsValidated && nameValidated && emailValidated && zipValidated ? true : false)
          });
          e.target.className = (emailValidated ? 'valid input' : 'invalid input');
        }
    
        if(e.target.name === 'FNAME') {
          const nameValid = e.target.value ? true : false;
          const currentForm = this.state.form;
          const currentListFields = this.state.form.listFields;
          const emailValidated = this.state.emailValidated;
          const zipValidated = this.state.zipValidated;
          const termsValidated = this.state.termsValidated;
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
            isValidated: (emailValidated && termsValidated && nameValid && zipValidated ? true : false),
            nameValidated: nameValid
          };
          });
          e.target.className = (nameValid ? 'valid input' : 'invalid input');
        }
        if(e.target.name === 'ZIP') {

          const zipValid = this.validateZip(e.target.value);
          const currentForm = this.state.form;
          const currentListFields = this.state.form.listFields;
          const emailValidated = this.state.emailValidated;
          const termsValidated = this.state.termsValidated;
          const nameValidated = this.state.nameValidated;
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
            isValidated: (emailValidated && termsValidated && nameValidated && zipValid ? true : false),
            zipValidated: zipValid
          };
          });
          e.target.className = (zipValid ? 'valid input' : 'invalid input');
        }

      

        if(e.target.name === 'signup') {
          const checked = e.target.checked;
          const currentForm = this.state.form;
          const currentListFields = this.state.form.listFields;
          const emailValidated = this.state.emailValidated;
          const nameValidated = this.state.nameValidated;
          const zipValidated = this.state.zipValidated;
          const newForm = {
            ...currentForm,
            listFields: {
              ...currentListFields,
              [e.target.name]: (checked ? 'Ja' : 'Nej')
            }
          };

          this.setState(() => {
            return {isValidated: (emailValidated && nameValidated && checked && zipValidated ? true : false),
                    termsValidated: (checked ? true : false)
          };
          });

          e.target.className = e.target.checked ? 'valid input' : 'invalid input';
        }

        if(e.target.name === 'NEWS') {
          const currentForm = this.state.form;
          const currentListFields = this.state.form.listFields;
          const newForm = {
            ...currentForm,
            listFields: {
              ...currentListFields,
              [e.target.name]: (e.target.checked ? 'Ja' : 'Nej')
            }
          };

          this.setState(() => {
            return {form: {
              ...newForm
            }
          };
          });
          e.target.className = (e.target.checked ? 'valid input' : '');
        }

      };
      
      handleSubmit = e => {
        e.preventDefault();
        this.setState({
          loading: true
        })
        if(this.state.isValidated) {
          addToMailchimp(this.state.form.email, this.state.form.listFields)
            .then(data => {
            if(data.result === 'error' && data.msg.includes('is already subscribed')) {
              this.setState({
                errorMsg: 'Du har allerede skrevet under.',
                submitError: true,
                loading: false
              });
            } else if(data.result === 'error' && data.msg.includes('too many recent signup requests')) {
              this.setState({
                errorMsg: 'For mange forsøg. Prøv igen senere.',
                submitError: true,
                loading: false
              });
            } else if(data.result !== 'error') {
              this.setState({
                loading: false,
                submitError: false,
                submitted: true,
                errorMsg: ''
              });
            }
          })
          .catch(err => {
            this.setState({
              errorMsg: 'Fejl i din forbindelsen. Prøv igen.',
              loading: false
            });
          })
        } else {
          this.setState({errorMsg: 'Der er fejl i din indtastning. Gennemgå venligst formularen og prøv igen.'})
        }
      };
    
      render() {
    
        let errorMsg;
    
        if(this.state.errorMsg) {
          errorMsg = (
            <p className="error">{this.state.errorMsg}</p>
          );
        }
    
    
        return (
             

              <form
                name="contact"
                method="post"
                action="/contact/thanks/"
                onSubmit={this.handleSubmit}
                >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{" "}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                  <div className="row">
                    <div className="field col-xs-12">
                        <div className="control">
                          <label className="label" htmlFor={"name"} hidden>Navn</label>
                          <input className="input" type={"text"} name={"FNAME"} onChange={this.handleChange} onFocus={this.handleChange} id={"name"} placeholder="Navn" required={true} />
                          <p className="error-msg">Fejl i indtastning</p>
                        </div>
                      </div>
                    <div className="field col-xs-12">
                        <div className="control">
                          <label className="label" htmlFor={"email"} hidden>Email</label>
                          <input className="input" type={"email"} name={"email"} onChange={this.handleChange} onFocus={this.handleChange} id={"email"} placeholder="Email" required={true} />
                          <p className="error-msg">Fejl i indtastning</p>
                        </div>
                      </div>
                      <div className="field col-xs-12">
                        <div className="control">
                          <label className="label" htmlFor={"ZIP"} hidden>postnummer</label>
                          <input className="input" type={"text"} name={"ZIP"} pattern="[0-9]{4}" onChange={this.handleChange} onFocus={this.handleChange} id={"ZIP"} placeholder="Postnummer" required={true} />
                          <p className="error-msg">Fejl i indtastning</p>
                        </div>
                      </div>
                      <div className="field col-xs-12">
                          <label className="label checkbox" htmlFor={"signup"}>
                          <input className="input" type={"checkbox"} name={"signup"} value={this.state.termsValidated} onChange={this.handleChange} id={"signup"} required={true} />
                          <span className="checkmark"></span>
                          <p>
                            ja, jeg bakker op og har desuden læst og accepterer <Link to="/persondatapolitik" title="Logo">persondatapolitikken</Link> <span className="required">*</span>
                          </p>
                        </label>
                        <label className="label checkbox" htmlFor={"NEWS"}>
                            <input className="input" type={"checkbox"} name={"NEWS"} onChange={this.handleChange} id={"NEWS"} required={false} />
                            <span className="checkmark"></span>
                            <p>ja, jeg vil gerne holdes opdateret med mails om “Gør valget grønt”</p>
                        </label>
                      </div>
                      <div className="field col-xs-12 mt">
                        <button className={this.state.loading && !this.state.submitted ? 'loading' : this.state.submitError ? 'submit-error' : this.state.submitted ? 'submitted' : ''} id="signupbtn" type="submit" disabled={!this.state.isValidated || this.state.submitted}>
                          <span>SKRIV UNDER</span>
                          <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><path className="checkmark" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>
                        </button>
                        {errorMsg}
                      </div>
                  </div>
                </form>
                  );
      }
}

export default ContactForm;