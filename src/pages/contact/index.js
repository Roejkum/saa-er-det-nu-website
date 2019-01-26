import React from "react";
import Layout from '../../components/Layout/Layout'
import addToMailchimp from 'gatsby-plugin-mailchimp';

// function encode(data) {
//   return Object.keys(data)
//     .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
//     .join("&");
// }

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      isValidated: false, 
      form: {
        listFields: {
  }
      }
    };
  }

  handleChange = e => {
    const currentFormData = this.state.form;

    if(e.target.name === 'email') {
      this.setState({
        form: {
          ...currentFormData,
          [e.target.name]: e.target.value 
        }
      });
    }

    if(e.target.name !== 'email') {
      const currentlistFields = this.state.form.listFields;
      this.setState({
        form: {
          ...currentFormData,
          listFields: {
            ...currentlistFields,
            [e.target.name]: e.target.value 
          }
          
        }
      });
    }

    if(!e.target.value) {
      e.target.className = 'invalid input';
    }
    if(e.target.value) {
      e.target.className = 'valid input';
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    addToMailchimp(this.state.form.email, this.state.form.listFields)
    // listFields are optional if you are only capturing the email address.
    .then(data => {
      // I recommend setting data to React state
      // but you can do whatever you want (including ignoring this `then()` altogether)
      console.log('data: ', data);
    })
    // .catch(() => {
    //   // unnecessary because Mailchimp only ever
    //   // returns a 200 status code
    //   // see below for how to handle errors
    // })
    console.log('submitted');
  };

  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
        <h1>Contact</h1>
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
          <div className="field">
            <label className="label" htmlFor={"name"} hidden>Navn</label>
            <div className="control">
              <input className="input" type={"text"} name={"Navn"} onChange={this.handleChange} id={"name"} placeholder="Navn" required={true} />
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor={"email"} hidden>Email</label>
              <div className="control">
                <input className="input" type={"email"} name={"email"} onChange={this.handleChange} id={"email"} placeholder="Email" required={true} />
              </div>
          </div>
          <div className="field">
            <button className="button is-link" type="submit">Send</button>
          </div>
        </form>
        </div>
        </div>
        </section>
      </Layout>
    );
  }
}