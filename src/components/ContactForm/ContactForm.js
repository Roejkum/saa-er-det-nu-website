import React, { Component } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';

class ContactForm extends Component {  
    state = { 
        isValidated: false, 
        emailValidated: false,
        nameValidated: false,
        errorMsg: '',
        form: {
            email: '',
            listFields: {
                FNAME: '',
                LNAME: ''        
            }
        },
      };  
    
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
            if(data.result === 'error') {
              this.setState({errorMsg: 'Der skete en fejl. Tjek din internetforbindelse og prøv igen.'})
            }
          })
          console.log('submitted');
        } else {
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
                        <label className="label" htmlFor={"newsletter"} hidden>Newsletter</label>
                        <div className="control">
                            <div className="flex align-center">
                                <input className="input" type={"checkbox"} name={"newsletter"} onChange={this.handleChange} onFocus={this.handleChange} id={"newsletter"} required={false} />
                                <p className="description">Ja, jeg vil gerne holdes opdateret med mails af og til om sagen</p>
                            </div>

                        </div>
                      </div>
                      <div className="field col-xs-12">
                        <label className="label" htmlFor={"signup"} hidden>Newsletter</label>
                        <div className="control">
                            <div className="flex align-center">
                                <input className="input" type={"checkbox"} name={"signup"} onChange={this.handleChange} onFocus={this.handleChange} id={"signup"} required={true} />
                                <p className="description">Ja, jeg er med i kampen og vil gerne være med til at løfte sagen!</p>
                            </div>

                        </div>
                      </div>
                      <div className="field col-xs-12">
                        <label className="label" htmlFor={"privacy"} hidden>Privatlivspolitik</label>
                        <div className="control">
                            <div className="flex align-center">
                                <input className="input" type={"checkbox"} name={"privacy"} onChange={this.handleChange} onFocus={this.handleChange} id={"privacy"} required={true} />
                                <p className="description">Jeg bekræfter at …</p>
                            </div>

                        </div>
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