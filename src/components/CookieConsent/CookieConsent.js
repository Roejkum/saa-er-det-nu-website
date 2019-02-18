import React, { Component } from 'react';
import Styles from './CookieConsent.module.scss';
import { Link } from 'gatsby';

class CookieConsent extends Component {
    state = {
      cookieAccepted: false,
      bannerVisible: true,
      showSettings: false,
      gaCodeinserted: false
    }

    componentDidMount = () => {
        const cookieAccepted = this.getCookie("CookieConsent");

        if ( cookieAccepted ) {
            this.props.acceptAnalytics();
            this.gaInsertAfterBody();
            
            this.setState({
                cookieAccepted: true,
                bannerVisible: false,
                gaCodeinserted: true
            });
            
        }
    }

    componentDidUpdate = () => {
        if( this.state.cookieAccepted && !this.state.gaCodeinserted ) {
            this.gaInsertAfterBody();
            this.setState({
                gaCodeinserted: true
            })
        }
    }

    gaInsertAfterBody = () => {
            const body = document.getElementsByTagName("BODY")[0];
            const noscript = document.createElement("NOSCRIPT");
            const iframe = document.createElement("IFRAME");
            iframe.src = "https://www.googletagmanager.com/ns.html?id=GTM-N55QRBM";
            iframe.height = 0;
            iframe.width = 0;
            iframe.style = "display:none;visibility:hidden"
            noscript.appendChild(iframe);
            body.insertBefore(noscript, body.childNodes[0]);
    }
    getCookie = (name) => {
        var re = new RegExp(name + "=([^;]+)");
        var value = re.exec(document.cookie);
        return (value != null) ? unescape(value[1]) : null;
    }

    cookieAcceptanceHandler = (boolean) => {
        this.setState({ cookieAccepted: boolean, bannerVisible: false });
        if (boolean) {
            this.setCookie('CookieConsent', true, 30);
            
        }
    }

    setCookie = (cname, cvalue, exdays) => {
        let d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        const expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
      }

    render() {
        let cookieBanner = (<div className={Styles.bannerWrapper}>
            <p>Vi bruger vores cookies til statistik, indholdsoptimering, præferencer og målrettet indhold fra os. Tredjepart kan anvende cookies til målrettet markedsføring. Ved at klikke Acceptér giver du dit samtykke. Læs mere om vores <Link to="/cookie-politik" className="white-text" >cookiepolitik</Link> og vores <Link to="/persondatapolitik" className="white-text">persondatapolitik</Link>.</p>
            <button className={Styles.danger} onClick={() => this.cookieAcceptanceHandler(false)}>Afvis</button>
            <button className={Styles.succes} onClick={() => {
                this.cookieAcceptanceHandler(true);
                this.props.acceptAnalytics();
            }}>Acceptér</button>
            </div>);
        if (!this.state.bannerVisible) {
            cookieBanner = null;
        }

      return (
          cookieBanner
      )
    }
}

export default CookieConsent;