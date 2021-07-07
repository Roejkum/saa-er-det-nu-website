import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from "gatsby";
import Navbar from '../Navbar';

import './sass/main.scss';
import CookieConsent from '../CookieConsent/CookieConsent';

class TemplateWrapper extends Component {
  state = {
    analyticsAccepted: false
  }

  acceptAnalyticsHandler = () => {
    this.setState({analyticsAccepted: true});
  }

  render() {
    return (

      <StaticQuery
      query={graphql`
        query HeadingQuery {
            site {
              siteMetadata {
                title,
                description,
                keywords,
              }
            }
          }
      `}
      render={data => (
        <>
          <Helmet>
            <meta http-equiv="Pragma" content="no-cache" />
            <meta http-equiv="Expires" content="-1" />
            <meta http-equiv="CACHE-CONTROL" content="NO-CACHE" />

            <html lang="da" />
            <title>{data.site.siteMetadata.title}</title>
            <meta name="description" content={data.site.siteMetadata.description} />
            <meta name="keywords" content={data.site.siteMetadata.keywords} />
            <meta name="google-site-verification" content="akpQafXdzaenmOrSICKv59cg8O33LKiEQ5RpjgsEzG8" />
            
            <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png" />
            <link rel="icon" type="image/png" href="/img/favicon-32x32.png" sizes="32x32" />
            <link rel="icon" type="image/png" href="/img/favicon-16x16.png" sizes="16x16" />
    
            <link rel="mask-icon" href="/img/sol-solo.svg" color="#80B35B" />
            {/* <link rel="mask-icon" href="/img/safari-pinned-tab.svg" color="#ff4400" /> */}
            <meta name="theme-color" content="#80B35B" />
  
            <meta property="og:type" content="website" />
            <meta property="og:title" content={data.site.siteMetadata.title} />
            <meta property="og:description" content={data.site.siteMetadata.description} />
            <meta property="og:url" content="https://www.saaerdet.nu" />
            <meta property="og:locale" content="da_DK" />
            <meta property="og:image" content="/img/mosaik.jpg" />
            
            {this.state.analyticsAccepted ? (
              <script>{(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-N55QRBM')}</script> 
            ) : ''}
          </Helmet>
                    
          <CookieConsent acceptAnalytics={this.acceptAnalyticsHandler}/>
          <Navbar/>
          <div className="page-content">
            {this.props.children}
          </div>
          
        </>
      )}
    />

    );
  }
  }

export default TemplateWrapper
