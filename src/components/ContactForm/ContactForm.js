import React, { Component } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import { Link } from 'gatsby';

class ContactForm extends Component {  
    state = { 
        isValidated: false, 
        emailValidated: false,
        nameValidated: false,
        termsValidated: false,
        errorMsg: '',
        form: {
            email: '',
            listFields: {
                FNAME: '',
                LNAME: '',
                signup: false,
                newsletter: false   
            }
        },
      };  
    
      validateEmail = email => {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }
    
      handleChange = e => {
        if(e.target.name === 'email') {
          const emailValidated = this.validateEmail(e.target.value);
          const currentFormData = this.state.form;
          const nameValidated = this.state.nameValidated;
          const termsValidated = this.state.termsValidated;
          this.setState({
            form: {
              ...currentFormData,
              [e.target.name]: e.target.value 
            },
            emailValidated: (emailValidated ? true : false),
            isValidated: (termsValidated && nameValidated && emailValidated ? true : false)
          });
          e.target.className = (emailValidated ? 'valid input' : 'invalid input');
        }
    
        if(e.target.name === 'FNAME') {
          const nameValid = e.target.value ? true : false;
          const currentForm = this.state.form;
          const currentListFields = this.state.form.listFields;
          const emailValidated = this.state.emailValidated;
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
            isValidated: (emailValidated && termsValidated && e.target.value ? true : false),
            nameValidated: nameValid
          };
          });
          e.target.className = (nameValid ? 'valid input' : 'invalid input');
        }

        if(e.target.name === 'signup') {
          const checked = e.target.checked;
          const currentForm = this.state.form;
          const currentListFields = this.state.form.listFields;
          const emailValidated = this.state.emailValidated;
          const nameValidated = this.state.nameValidated;
          const newForm = {
            ...currentForm,
            listFields: {
              ...currentListFields,
              [e.target.name]: (checked ? 'Ja' : 'Nej')
            }
          };

          this.setState(() => {
            return {form: {
              ...newForm
            },
            isValidated: (emailValidated && nameValidated && checked ? true : false),
            termsValidated: (checked ? true : false)
          };
          });

          e.target.className = e.target.checked ? 'valid input' : 'invalid input';
        }

        if(e.target.name === 'newsletter') {
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
    
        if(this.state.isValidated) {
          addToMailchimp(this.state.form.email, this.state.form.listFields)
            .then(data => {
            if(data.result === 'error') {
              this.setState({errorMsg: 'Der skete en fejl. Tjek din internetforbindelse og prøv igen.'})
            }
          })
          console.log('submitted');
        } else {
          this.setState({errorMsg: 'Der er fejl i din indtastning. Gennemgå venligst formularen og prøv igen.'})
        }
      };

      componentDidUpdate() {
        console.log(this.state);
      }
    
      render() {
    
        const errorMsg = null;
    
        if(this.state.errorMsg) {
          this.errorMsg = (
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
                      <label className="label" htmlFor={"FNAME"} hidden>Fornavn</label>
                        <div className="control">
                          <input className="input" type={"text"} name={"FNAME"} onChange={this.handleChange} onFocus={this.handleChange} id={"name"} placeholder="Navn" required={true} />
                          <p className="error-msg">Fejl i indtastning</p>
                        </div>
                      </div>
                    <div className="field col-xs-12">
                      <label className="label" htmlFor={"email"} hidden>Email</label>
                        <div className="control">
                          <input className="input" type={"email"} name={"email"} onChange={this.handleChange} onFocus={this.handleChange} id={"email"} placeholder="Email" required={true} />
                          <p className="error-msg">Fejl i indtastning</p>
                        </div>
                      </div>
                      <div className="field col-xs-12">
                        <label className="label checkbox" htmlFor={"newsletter"}>
                            <input className="input" type={"checkbox"} name={"newsletter"} onChange={this.handleChange} id={"newsletter"} required={false} />
                            <span className="checkmark"></span>
                            <p>Ja, jeg vil gerne holdes opdateret med mails af og til om sagen</p>
                        </label>
                        <label className="label checkbox" htmlFor={"signup"}>
                          <input className="input" type={"checkbox"} name={"signup"} value={this.state.termsValidated} onChange={this.handleChange} id={"signup"} required={true} />
                          <span className="checkmark"></span>
                          <p>
                            Ja, jeg er med i kampen og vil gerne være med til at løfte sagen! Jeg har desuden læst og accepterer <Link to="/privatlivspolitik" title="Logo">privatlivspolitikken</Link> <span className="required">*</span>
                          </p>
                        </label>
                  
                      </div>
                      <div className="field col-xs-12 mt">
                        <button className="button is-link" type="submit" disabled={!this.state.isValidated}>SKRIV UNDER</button>
                        {errorMsg}
                        {this.errorMsg}
                      </div>
                  </div>
                </form>
                  );
      }
}

export default ContactForm;