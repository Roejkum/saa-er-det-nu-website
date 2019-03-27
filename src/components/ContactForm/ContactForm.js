import React from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import { Link } from 'gatsby';

class ContactForm extends React.Component  {  
  constructor(props) {
    super(props);
    this.state = { 
      mounted: false
    }; 
  } 

  componentDidMount() {
    this.setState({
      mounted: true
    })
  }
       
  render() {
    
    let form = <p>Indlæser</p>;;

    if(this.state.mounted) {
      form = <div><link href='https://actionnetwork.org/css/style-embed-whitelabel-v3.css' rel='stylesheet' type='text/css' /><script src='https://actionnetwork.org/widgets/v3/form/gor-valget-gront?format=js&source=widget&style=full' async></script><div id='can-form-area-gor-valget-gront' style={{width: '100%'}}></div></div>;
    } 

    return (
      <div>
        { form }
      </div>
    )
  }
}

export default ContactForm;